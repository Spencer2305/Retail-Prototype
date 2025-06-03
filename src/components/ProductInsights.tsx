import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Eye, MousePointer, ShoppingCart, Heart, Search, TrendingUp, Package, Filter } from 'lucide-react';
import { mockProductInsights } from '../data/mockData';

const ProductInsights: React.FC = () => {
  const { productViews, searchTerms, categoryPerformance, abandonedCarts } = mockProductInsights;
  const [selectedMetric, setSelectedMetric] = useState<'views' | 'clicks' | 'conversion'>('views');

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-GB').format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const getMetricData = () => {
    switch (selectedMetric) {
      case 'views':
        return productViews.map(item => ({ 
          ...item, 
          value: item.views, 
          label: 'Views',
          productName: item.product.name,
          productSku: item.product.sku
        }));
      case 'clicks':
        return productViews.map(item => ({ 
          ...item, 
          value: item.clicks, 
          label: 'Clicks',
          productName: item.product.name,
          productSku: item.product.sku
        }));
      case 'conversion':
        return productViews.map(item => ({ 
          ...item, 
          value: item.conversionRate, 
          label: 'Conversion Rate (%)',
          productName: item.product.name,
          productSku: item.product.sku
        }));
      default:
        return productViews.map(item => ({ 
          ...item, 
          value: item.views, 
          label: 'Views',
          productName: item.product.name,
          productSku: item.product.sku
        }));
    }
  };

  const getMetricLabel = () => {
    switch (selectedMetric) {
      case 'views': return 'Views';
      case 'clicks': return 'Clicks';
      case 'conversion': return 'Conversion Rate (%)';
      default: return 'Views';
    }
  };

  const StatCard: React.FC<{
    title: string;
    value: string;
    subtitle?: string;
    icon: React.ReactNode;
    color: string;
    trend?: number;
  }> = ({ title, value, subtitle, icon, color, trend }) => (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          {trend && (
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm font-medium text-green-600">+{trend}%</span>
              <span className="text-sm text-gray-500 ml-1">vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{data.productName}</p>
          <p className="text-sm text-gray-500">SKU: {data.productSku}</p>
          <p className="text-sm text-blue-600">
            {getMetricLabel()}: {selectedMetric === 'conversion' ? formatPercentage(data.value) : formatNumber(data.value)}
          </p>
        </div>
      );
    }
    return null;
  };

  const totalViews = productViews.reduce((sum, item) => sum + item.views, 0);
  const totalClicks = productViews.reduce((sum, item) => sum + item.clicks, 0);
  const avgConversionRate = productViews.reduce((sum, item) => sum + item.conversionRate, 0) / productViews.length;
  const totalWishlistAdds = productViews.reduce((sum, item) => sum + item.wishlistAdds, 0);

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Product Views"
          value={formatNumber(totalViews)}
          subtitle="All products"
          icon={<Eye className="w-6 h-6 text-white" />}
          color="bg-blue-500"
          trend={18.5}
        />
        <StatCard
          title="Total Clicks"
          value={formatNumber(totalClicks)}
          subtitle="Product interactions"
          icon={<MousePointer className="w-6 h-6 text-white" />}
          color="bg-green-500"
          trend={12.3}
        />
        <StatCard
          title="Avg Conversion Rate"
          value={formatPercentage(avgConversionRate)}
          subtitle="Views to purchases"
          icon={<ShoppingCart className="w-6 h-6 text-white" />}
          color="bg-purple-500"
          trend={8.7}
        />
        <StatCard
          title="Wishlist Adds"
          value={formatNumber(totalWishlistAdds)}
          subtitle="Saved for later"
          icon={<Heart className="w-6 h-6 text-white" />}
          color="bg-pink-500"
          trend={25.4}
        />
      </div>

      {/* Product Performance Chart */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Product Performance</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedMetric('views')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                selectedMetric === 'views' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Views
            </button>
            <button
              onClick={() => setSelectedMetric('clicks')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                selectedMetric === 'clicks' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Clicks
            </button>
            <button
              onClick={() => setSelectedMetric('conversion')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                selectedMetric === 'conversion' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Conversion
            </button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={getMetricData()} layout="horizontal" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis 
              type="category" 
              dataKey="productName"
              width={150}
              tick={{ fontSize: 12 }}
              interval={0}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Search Terms */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Search Terms</h3>
          <div className="space-y-3">
            {searchTerms.map((term, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg">
                    <Search className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">"{term.term}"</p>
                    <p className="text-sm text-gray-500">
                      {formatNumber(term.searches)} searches
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{formatNumber(term.resultsClicked)}</p>
                  <p className="text-sm text-gray-500">clicks</p>
                  <div className="w-16 bg-gray-200 rounded-full h-1 mt-1">
                    <div 
                      className="bg-blue-500 h-1 rounded-full" 
                      style={{ width: `${Math.min((term.resultsClicked / term.searches) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Performance */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryPerformance}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="views"
                label={({ category, conversionRate }) => `${category}: ${conversionRate}%`}
              >
                {categoryPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number, name: string) => [
                  name === 'views' ? formatNumber(value) : formatPercentage(value),
                  name === 'views' ? 'Views' : name === 'sales' ? 'Sales' : 'Conversion Rate'
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {categoryPerformance.map((category, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm font-medium text-gray-900">{category.category}</span>
                </div>
                <p className="text-xs text-gray-500">{formatNumber(category.views)} views</p>
                <p className="text-xs text-gray-500">{formatPercentage(category.conversionRate)} conversion</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Product Table */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Product Analytics</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Product</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Views</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Clicks</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">CTR</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Conversion Rate</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Add to Cart Rate</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Wishlist</th>
              </tr>
            </thead>
            <tbody>
              {productViews.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      {item.product.imageUrl && (
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          className="w-10 h-10 object-cover rounded"
                        />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{item.product.name}</p>
                        <p className="text-sm text-gray-500">SKU: {item.product.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">{formatNumber(item.views)}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">{formatNumber(item.clicks)}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">{formatPercentage((item.clicks / item.views) * 100)}</p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <span className="text-gray-900 mr-2">{formatPercentage(item.conversionRate)}</span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${Math.min(item.conversionRate * 4, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">{formatPercentage(item.addToCartRate)}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">{formatNumber(item.wishlistAdds)}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Abandoned Carts */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cart Abandonment Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {abandonedCarts.map((item, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                {item.product.imageUrl && (
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                )}
                <div>
                  <p className="font-medium text-gray-900">{item.product.name}</p>
                  <p className="text-sm text-gray-500">SKU: {item.product.sku}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Abandoned:</span>
                  <span className="text-sm font-medium text-red-600">{formatNumber(item.abandonedCount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Recovery Rate:</span>
                  <span className="text-sm font-medium text-green-600">{formatPercentage(item.recoveryRate)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${item.recoveryRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInsights; 