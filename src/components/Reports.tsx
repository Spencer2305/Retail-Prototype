import React, { useState } from 'react';
import { FileText, Download, Clock, CheckCircle, XCircle, AlertCircle, Plus, Search, DollarSign, BarChart3, Package, Users, TrendingUp, ArrowLeft, Eye, Copy, Edit, Trash2 } from 'lucide-react';
import { Report, ReportTemplate } from '../types';
import { mockReports, mockReportTemplates } from '../data/mockData';

const Reports: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reports' | 'templates' | 'generate'>('reports');
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<ReportTemplate | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'view'>('list');
  const [generatedReports, setGeneratedReports] = useState<Report[]>(mockReports);
  const [isGenerating, setIsGenerating] = useState(false);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'failed': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'scheduled': return <Clock className="w-5 h-5 text-blue-500" />;
      case 'draft': return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'sales': return <DollarSign className="w-5 h-5 text-green-600" />;
      case 'analytics': return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'inventory': return <Package className="w-5 h-5 text-purple-600" />;
      case 'customer': return <Users className="w-5 h-5 text-orange-600" />;
      case 'financial': return <TrendingUp className="w-5 h-5 text-indigo-600" />;
      case 'custom': return <FileText className="w-5 h-5 text-gray-600" />;
      default: return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatFileSize = (sizeInMB: number) => {
    return `${sizeInMB.toFixed(1)} MB`;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const filteredReports = generatedReports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || report.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleReportClick = (report: Report) => {
    setSelectedReport(report);
    setViewMode('view');
  };

  const handleBackToList = () => {
    setSelectedReport(null);
    setViewMode('list');
  };

  const generateMockReportData = (type: string, metrics: string[]) => {
    const baseData = {
      summary: {
        totalRevenue: 125430.50,
        totalOrders: 342,
        conversionRate: 3.2,
        avgOrderValue: 366.75
      },
      chartData: [
        { date: '2024-01-10', value: 12500, orders: 45 },
        { date: '2024-01-11', value: 15200, orders: 52 },
        { date: '2024-01-12', value: 18900, orders: 61 },
        { date: '2024-01-13', value: 22100, orders: 68 },
        { date: '2024-01-14', value: 19800, orders: 58 },
        { date: '2024-01-15', value: 21300, orders: 64 },
        { date: '2024-01-16', value: 15630, orders: 49 }
      ],
      topProducts: [
        { name: 'Premium Wireless Headphones', sales: 89, revenue: 26700 },
        { name: 'Ultra HD Monitor 27"', sales: 45, revenue: 22500 },
        { name: 'Ergonomic Office Chair', sales: 32, revenue: 19200 },
        { name: 'Smart Laptop Stand', sales: 67, revenue: 13400 },
        { name: 'Mechanical Gaming Keyboard', sales: 28, revenue: 8400 }
      ]
    };

    return baseData;
  };

  const ReportGenerationModal: React.FC = () => {
    const [reportName, setReportName] = useState('');
    const [reportType, setReportType] = useState<'sales' | 'analytics' | 'inventory' | 'customer' | 'financial' | 'custom'>('sales');
    const [datePreset, setDatePreset] = useState('last7days');
    const [format, setFormat] = useState<'pdf' | 'excel' | 'csv' | 'json'>('pdf');
    const [includeCharts, setIncludeCharts] = useState(true);
    const [includeSummary, setIncludeSummary] = useState(true);
    const [selectedMetrics, setSelectedMetrics] = useState<string[]>(['revenue', 'orders']);

    const availableMetrics = {
      sales: ['revenue', 'orders', 'conversion_rate', 'avg_order_value', 'refunds'],
      analytics: ['page_views', 'unique_visitors', 'bounce_rate', 'session_duration', 'conversion_funnel'],
      inventory: ['stock_levels', 'low_stock_items', 'out_of_stock', 'reorder_points', 'turnover_rate'],
      customer: ['customer_acquisition', 'retention_rate', 'lifetime_value', 'segment_analysis', 'churn_rate'],
      financial: ['gross_revenue', 'net_profit', 'profit_margins', 'cost_analysis', 'tax_summary'],
      custom: ['product_views', 'conversion_rates', 'revenue_per_product', 'cart_abandonment', 'search_terms']
    };

    const handleMetricToggle = (metric: string) => {
      setSelectedMetrics(prev => 
        prev.includes(metric) 
          ? prev.filter(m => m !== metric)
          : [...prev, metric]
      );
    };

    const handleGenerate = async () => {
      if (!reportName.trim() || selectedMetrics.length === 0) return;

      setIsGenerating(true);
      
      // Simulate report generation delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      const newReport: Report = {
        id: Date.now().toString(),
        name: reportName,
        type: reportType,
        description: `Generated ${reportType} report with ${selectedMetrics.length} metrics`,
        createdAt: new Date(),
        createdBy: 'Current User',
        lastGenerated: new Date(),
        status: 'completed',
        fileUrl: `/reports/${reportName.toLowerCase().replace(/\s+/g, '-')}.${format}`,
        fileSize: Math.random() * 5 + 1, // Random size between 1-6 MB
        parameters: {
          dateRange: {
            start: new Date(),
            end: new Date(),
            preset: datePreset as any
          },
          filters: {},
          metrics: selectedMetrics,
          format,
          includeCharts,
          includeSummary
        }
      };

      // Add the new report to the list
      setGeneratedReports(prev => [newReport, ...prev]);
      setIsGenerating(false);
      setShowGenerateModal(false);
      
      // Reset form
      setReportName('');
      setSelectedMetrics(['revenue', 'orders']);
      
      // Show the generated report
      setTimeout(() => {
        handleReportClick(newReport);
      }, 500);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Generate New Report</h3>
          </div>
          
          <div className="p-6 space-y-6">
            {/* Report Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Report Name</label>
              <input
                type="text"
                value={reportName}
                onChange={(e) => setReportName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter report name..."
              />
            </div>

            {/* Report Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value as any)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="sales">Sales Report</option>
                <option value="analytics">Analytics Report</option>
                <option value="inventory">Inventory Report</option>
                <option value="customer">Customer Report</option>
                <option value="financial">Financial Report</option>
                <option value="custom">Custom Report</option>
              </select>
            </div>

            {/* Date Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <select
                value={datePreset}
                onChange={(e) => setDatePreset(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="last7days">Last 7 Days</option>
                <option value="last30days">Last 30 Days</option>
                <option value="thisMonth">This Month</option>
                <option value="lastMonth">Last Month</option>
                <option value="thisYear">This Year</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>

            {/* Metrics Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Metrics to Include</label>
              <div className="grid grid-cols-2 gap-2">
                {availableMetrics[reportType].map((metric) => (
                  <label key={metric} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedMetrics.includes(metric)}
                      onChange={() => handleMetricToggle(metric)}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700 capitalize">
                      {metric.replace(/_/g, ' ')}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Format and Options */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value as any)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="pdf">PDF</option>
                  <option value="excel">Excel</option>
                  <option value="csv">CSV</option>
                  <option value="json">JSON</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={includeCharts}
                    onChange={(e) => setIncludeCharts(e.target.checked)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">Include Charts</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={includeSummary}
                    onChange={(e) => setIncludeSummary(e.target.checked)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">Include Summary</span>
                </label>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
            <button
              onClick={() => setShowGenerateModal(false)}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              disabled={isGenerating}
            >
              Cancel
            </button>
            <button
              onClick={handleGenerate}
              disabled={!reportName.trim() || selectedMetrics.length === 0 || isGenerating}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating...
                </>
              ) : (
                'Generate Report'
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ReportViewer: React.FC<{ report: Report }> = ({ report }) => {
    const reportData = generateMockReportData(report.type, report.parameters.metrics);

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBackToList}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{report.name}</h2>
              <p className="text-gray-600">{report.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              {getStatusIcon(report.status)}
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                {report.status}
              </span>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>

        {/* Report Metadata */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Created By</p>
              <p className="text-sm text-gray-900">{report.createdBy}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Generated</p>
              <p className="text-sm text-gray-900">
                {report.lastGenerated ? formatDate(report.lastGenerated) : 'Not generated'}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Format</p>
              <p className="text-sm text-gray-900 uppercase">{report.parameters.format}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">File Size</p>
              <p className="text-sm text-gray-900">
                {report.fileSize ? formatFileSize(report.fileSize) : 'N/A'}
              </p>
            </div>
          </div>
        </div>

        {/* Report Content */}
        <div className="space-y-6">
          {/* Summary Section */}
          {report.parameters.includeSummary && (
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Executive Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">£{reportData.summary.totalRevenue.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">{reportData.summary.totalOrders}</p>
                  <p className="text-sm text-gray-600">Total Orders</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">{reportData.summary.conversionRate}%</p>
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">£{reportData.summary.avgOrderValue}</p>
                  <p className="text-sm text-gray-600">Avg Order Value</p>
                </div>
              </div>
            </div>
          )}

          {/* Charts Section */}
          {report.parameters.includeCharts && (
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Charts</h3>
              <div className="space-y-6">
                {/* Revenue Chart */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Daily Revenue Trend</h4>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Chart visualization would appear here</p>
                      <p className="text-sm text-gray-400">Revenue trend over selected period</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Data Tables */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Products</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Product</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Sales</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.topProducts.map((product, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">{product.name}</td>
                      <td className="py-3 px-4 text-gray-600">{product.sales}</td>
                      <td className="py-3 px-4 text-gray-600">£{product.revenue.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Metrics Details */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {report.parameters.metrics.map((metric, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900 capitalize">
                    {metric.replace(/_/g, ' ')}
                  </p>
                  <p className="text-sm text-gray-600">Included in analysis</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Show report viewer if a report is selected
  if (viewMode === 'view' && selectedReport) {
    return <ReportViewer report={selectedReport} />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reports</h2>
          <p className="text-gray-600">Generate, schedule, and manage your business reports</p>
        </div>
        <button
          onClick={() => setShowGenerateModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Generate Report
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'reports', name: 'Generated Reports', count: generatedReports.length },
            { id: 'templates', name: 'Templates', count: mockReportTemplates.length },
            { id: 'generate', name: 'Quick Generate', count: null }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
              {tab.count !== null && (
                <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Reports Tab */}
      {activeTab === 'reports' && (
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="sales">Sales</option>
              <option value="analytics">Analytics</option>
              <option value="inventory">Inventory</option>
              <option value="customer">Customer</option>
              <option value="financial">Financial</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          {/* Reports List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Report</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Created</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Size</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.map((report) => (
                    <tr 
                      key={report.id} 
                      className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleReportClick(report)}
                    >
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-gray-900 hover:text-primary-600">{report.name}</p>
                          <p className="text-sm text-gray-500">{report.description}</p>
                          <p className="text-xs text-gray-400">by {report.createdBy}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          {getTypeIcon(report.type)}
                          <span className="capitalize">{report.type}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(report.status)}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                            {report.status}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-gray-900">{formatDate(report.createdAt)}</p>
                        {report.lastGenerated && (
                          <p className="text-xs text-gray-500">
                            Generated: {formatDate(report.lastGenerated)}
                          </p>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        {report.fileSize && (
                          <span className="text-sm text-gray-900">{formatFileSize(report.fileSize)}</span>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                          <button 
                            className="p-1 text-blue-600 hover:text-blue-800"
                            onClick={() => handleReportClick(report)}
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          {report.status === 'completed' && (
                            <button className="p-1 text-green-600 hover:text-green-800">
                              <Download className="w-4 h-4" />
                            </button>
                          )}
                          <button className="p-1 text-gray-600 hover:text-gray-800">
                            <Copy className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-600 hover:text-gray-800">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockReportTemplates.map((template) => (
            <div key={template.id} className="card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getTypeIcon(template.type)}
                  <div>
                    <h3 className="font-semibold text-gray-900">{template.name}</h3>
                    <p className="text-sm text-gray-500 capitalize">{template.type} Report</p>
                  </div>
                </div>
                {template.isBuiltIn && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Built-in
                  </span>
                )}
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{template.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  {template.createdBy ? `by ${template.createdBy}` : 'System Template'}
                </div>
                <button
                  onClick={() => {
                    setSelectedTemplate(template);
                    setShowGenerateModal(true);
                  }}
                  className="btn-primary text-sm"
                >
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Generate Tab */}
      {activeTab === 'generate' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { type: 'sales', title: 'Sales Report', description: 'Revenue, orders, and performance metrics', icon: DollarSign },
            { type: 'analytics', title: 'Analytics Report', description: 'Visitor data and engagement metrics', icon: BarChart3 },
            { type: 'inventory', title: 'Inventory Report', description: 'Stock levels and reorder alerts', icon: Package },
            { type: 'customer', title: 'Customer Report', description: 'Customer behavior and insights', icon: Users },
            { type: 'financial', title: 'Financial Report', description: 'Profit, margins, and financial analysis', icon: TrendingUp },
            { type: 'custom', title: 'Custom Report', description: 'Build your own custom report', icon: FileText }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.type} className="card hover:shadow-md transition-shadow cursor-pointer" onClick={() => setShowGenerateModal(true)}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">Quick Generate</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <button className="w-full btn-primary">
                  Generate Now
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Generate Modal */}
      {showGenerateModal && <ReportGenerationModal />}
    </div>
  );
};

export default Reports; 