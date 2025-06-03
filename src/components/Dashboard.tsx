import React, { useState } from 'react';
import { MessageSquare, BarChart3, Package, ShoppingBag, Users, Eye, Brain, Settings } from 'lucide-react';
import ChatBot from './ChatBot';
import Analytics from './Analytics';
import Products from './Products';
import Orders from './Orders';
import VisitorAnalytics from './VisitorAnalytics';
import ProductInsights from './ProductInsights';
import AIInsights from './AIInsights';
import AIControlCenter from './AIControlCenter';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('control');

  const tabs = [
    { id: 'control', label: 'AI Control Center', icon: Settings },
    { id: 'chat', label: 'Chat Bot', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'visitors', label: 'Visitor Analytics', icon: Users },
    { id: 'insights', label: 'Product Insights', icon: Eye },
    { id: 'ai', label: 'AI Insights', icon: Brain },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'control':
        return <AIControlCenter />;
      case 'chat':
        return <ChatBot />;
      case 'analytics':
        return <Analytics />;
      case 'products':
        return <Products />;
      case 'orders':
        return <Orders />;
      case 'visitors':
        return <VisitorAnalytics />;
      case 'insights':
        return <ProductInsights />;
      case 'ai':
        return <AIInsights />;
      default:
        return <AIControlCenter />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Premium Product Dashboard</h1>
              <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                £50,000+ Product Line
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? tab.id === 'control'
                        ? 'border-purple-500 text-purple-600 bg-purple-50'
                        : 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                  {tab.id === 'control' && (
                    <span className="ml-1 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                      NEW
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Debug Info */}
      <div className="bg-yellow-100 border border-yellow-400 p-4 m-4 rounded">
        <h2 className="font-bold text-yellow-800">DEBUG INFO:</h2>
        <p className="text-yellow-700">Active Tab: {activeTab}</p>
        <p className="text-yellow-700">Total Tabs: {tabs.length}</p>
        <p className="text-yellow-700">Tab Labels: {tabs.map(t => t.label).join(' | ')}</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard; 