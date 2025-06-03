import React from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Globe, Monitor, Smartphone, Tablet, Clock, TrendingUp, Eye } from 'lucide-react';
import { mockVisitorAnalytics } from '../data/mockData';

const VisitorAnalytics: React.FC = () => {
  const { uniqueVisitors, topPages, geographicData, deviceTypes, totalUniqueIPs, totalPageViews, bounceRate, avgSessionDuration } = mockVisitorAnalytics;

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-GB').format(value);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const getDeviceIcon = (device: string) => {
    switch (device.toLowerCase()) {
      case 'desktop': return <Monitor className="w-5 h-5" />;
      case 'mobile': return <Smartphone className="w-5 h-5" />;
      case 'tablet': return <Tablet className="w-5 h-5" />;
      default: return <Monitor className="w-5 h-5" />;
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
              <span className="text-sm text-gray-500 ml-1">vs last week</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Unique IPs"
          value={formatNumber(totalUniqueIPs)}
          subtitle="Last 7 days"
          icon={<Globe className="w-6 h-6 text-white" />}
          color="bg-blue-500"
          trend={12.5}
        />
        <StatCard
          title="Total Page Views"
          value={formatNumber(totalPageViews)}
          subtitle="All pages"
          icon={<Eye className="w-6 h-6 text-white" />}
          color="bg-green-500"
          trend={8.3}
        />
        <StatCard
          title="Bounce Rate"
          value={`${bounceRate}%`}
          subtitle="Single page visits"
          icon={<Users className="w-6 h-6 text-white" />}
          color="bg-orange-500"
        />
        <StatCard
          title="Avg Session Duration"
          value={formatTime(avgSessionDuration)}
          subtitle="Time on site"
          icon={<Clock className="w-6 h-6 text-white" />}
          color="bg-purple-500"
          trend={15.7}
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Unique Visitors */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Unique Visitors & IPs</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={uniqueVisitors.daily}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
              />
              <YAxis />
              <Tooltip 
                formatter={(value: number, name: string) => [formatNumber(value), name === 'visitors' ? 'Total Visitors' : 'Unique IPs']}
                labelFormatter={(label) => new Date(label).toLocaleDateString('en-GB')}
              />
              <Area 
                type="monotone" 
                dataKey="visitors" 
                stackId="1"
                stroke="#3b82f6" 
                fill="#3b82f6" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="uniqueIPs" 
                stackId="2"
                stroke="#10b981" 
                fill="#10b981" 
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Hourly Traffic Pattern */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Hourly Traffic Pattern</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={uniqueVisitors.hourly}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip formatter={(value: number) => [formatNumber(value), 'Visitors']} />
              <Line 
                type="monotone" 
                dataKey="visitors" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Geographic Distribution */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Geographic Distribution</h3>
          <div className="flex items-center justify-center mb-4">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={geographicData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="visitors"
                  label={({ country, percentage }) => `${country}: ${percentage}%`}
                >
                  {geographicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [formatNumber(value), 'Visitors']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {geographicData.slice(0, 5).map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm text-gray-700">{item.country}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-gray-900">{formatNumber(item.visitors)}</span>
                  <span className="text-xs text-gray-500 ml-1">({item.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Types */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Types</h3>
          <div className="space-y-4">
            {deviceTypes.map((device, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg">
                    {getDeviceIcon(device.device)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{device.device}</p>
                    <p className="text-sm text-gray-500">{device.percentage}% of traffic</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{formatNumber(device.visitors)}</p>
                  <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-primary-600 h-2 rounded-full" 
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Pages Table */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Page</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Total Views</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Unique Visitors</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Avg Time on Page</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {topPages.map((page, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <p className="font-medium text-gray-900">{page.page}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">{formatNumber(page.views)}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">{formatNumber(page.uniqueVisitors)}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">{formatTime(page.avgTimeOnPage)}</p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${Math.min((page.avgTimeOnPage / 400) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        {page.avgTimeOnPage > 300 ? 'High' : page.avgTimeOnPage > 180 ? 'Medium' : 'Low'}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VisitorAnalytics; 