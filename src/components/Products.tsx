import React, { useState } from 'react';
import { Search, Filter, Package, Edit, Eye, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Product } from '../types';
import { mockProducts } from '../data/mockData';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const categories = Array.from(new Set(mockProducts.map(p => p.category)));

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'inactive': return <XCircle className="w-4 h-4 text-gray-500" />;
      case 'out_of_stock': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default: return <Package className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'out_of_stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { text: 'Out of Stock', color: 'text-red-600' };
    if (stock < 10) return { text: 'Low Stock', color: 'text-yellow-600' };
    return { text: 'In Stock', color: 'text-green-600' };
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(value);
  };

  const ProductModal: React.FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XCircle className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">Product Name</label>
                <p className="text-lg font-semibold text-gray-900">{product.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">SKU</label>
                <p className="text-gray-900">{product.sku}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Category</label>
                <p className="text-gray-900">{product.category}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Price</label>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(product.price)}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-600">Stock Level</label>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold text-gray-900">{product.stock} units</p>
                <span className={`text-sm font-medium ${getStockStatus(product.stock).color}`}>
                  {getStockStatus(product.stock).text}
                </span>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-600">Status</label>
              <div className="flex items-center gap-2 mt-1">
                {getStatusIcon(product.status)}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                  {product.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <div className="flex gap-3">
                <button className="btn-primary flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Product
                </button>
                <button className="btn-secondary">
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
        <button className="btn-primary">
          Add New Product
        </button>
      </div>

      {/* Filters */}
      <div className="glass-card">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="out_of_stock">Out of Stock</option>
          </select>
          
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <button className="btn-secondary flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Advanced Filters
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card hover:shadow-md transition-shadow">
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1">
                  {getStatusIcon(product.status)}
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-600">SKU: {product.sku}</p>
                <p className="text-sm text-gray-600">Category: {product.category}</p>
                <p className="text-lg font-bold text-gray-900">{formatCurrency(product.price)}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Stock: {product.stock}</p>
                  <p className={`text-xs font-medium ${getStockStatus(product.stock).color}`}>
                    {getStockStatus(product.stock).text}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                  {product.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>
              
              <div className="flex gap-2 pt-3 border-t border-gray-200">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 btn-secondary flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Products</h3>
          <p className="text-3xl font-bold text-primary-600">{mockProducts.length}</p>
        </div>
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Products</h3>
          <p className="text-3xl font-bold text-green-600">
            {mockProducts.filter(p => p.status === 'active').length}
          </p>
        </div>
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Low Stock</h3>
          <p className="text-3xl font-bold text-yellow-600">
            {mockProducts.filter(p => p.stock < 10 && p.stock > 0).length}
          </p>
        </div>
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Out of Stock</h3>
          <p className="text-3xl font-bold text-red-600">
            {mockProducts.filter(p => p.stock === 0).length}
          </p>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products; 