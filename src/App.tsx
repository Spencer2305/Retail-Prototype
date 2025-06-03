import React, { useState } from 'react';
import { Menu, X, MessageSquare, BarChart3, Package, ShoppingCart, Users, Globe, MousePointer, MessageCircle, FileText, Settings, Brain } from 'lucide-react';
import ChatBot from './components/ChatBot';
import Analytics from './components/Analytics';
import Products from './components/Products';
import Orders from './components/Orders';
import VisitorAnalytics from './components/VisitorAnalytics';
import ProductInsights from './components/ProductInsights';
import TeamChat from './components/TeamChat';
import Reports from './components/Reports';
import AIControlCenter from './components/AIControlCenter';
import AIInsights from './components/AIInsights';

function App() {
  const [activeTab, setActiveTab] = useState('ai-control');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { id: 'ai-control', name: 'AI Control Center', icon: Settings, component: AIControlCenter },
    { id: 'ai-insights', name: 'AI Insights', icon: Brain, component: AIInsights },
    { id: 'chatbot', name: 'Chat Bot', icon: MessageSquare, component: ChatBot },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, component: Analytics },
    { id: 'visitor-analytics', name: 'Visitor Analytics', icon: Globe, component: VisitorAnalytics },
    { id: 'product-insights', name: 'Product Insights', icon: MousePointer, component: ProductInsights },
    { id: 'products', name: 'Products', icon: Package, component: Products },
    { id: 'orders', name: 'Orders', icon: ShoppingCart, component: Orders },
    { id: 'reports', name: 'Reports', icon: FileText, component: Reports },
    { id: 'team-chat', name: 'Team Chat', icon: MessageCircle, component: TeamChat },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || AIControlCenter;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
              >
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <div className="flex-shrink-0 flex items-center ml-4 lg:ml-0">
                <h1 className="text-2xl font-bold text-gray-900">Premium Product Dashboard</h1>
                <span className="ml-3 px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                  £50,000+ Product Line
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">5 online</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex flex-col h-full pt-16 lg:pt-0">
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-4 py-6 space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isAIControl = tab.id === 'ai-control';
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? isAIControl
                            ? 'bg-purple-100 text-purple-800 border-r-4 border-purple-600 shadow-md'
                            : 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                          : isAIControl
                            ? 'text-purple-600 hover:bg-purple-50 hover:text-purple-800 font-semibold'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {tab.name}
                      {isAIControl && (
                        <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1 font-bold">
                          NEW
                        </span>
                      )}
                      {tab.id === 'team-chat' && (
                        <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                          4
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden" 
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto">
              {/* Tab Header */}
              <div className="mb-6">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8 overflow-x-auto">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      const isAIControl = tab.id === 'ai-control';
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                            activeTab === tab.id
                              ? isAIControl
                                ? 'border-purple-500 text-purple-600 bg-purple-50'
                                : 'border-primary-500 text-primary-600'
                              : isAIControl
                                ? 'border-transparent text-purple-500 hover:text-purple-700 hover:border-purple-300 font-semibold'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <Icon className="mr-2 h-5 w-5" />
                          {tab.name}
                          {isAIControl && (
                            <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1 font-bold">
                              NEW
                            </span>
                          )}
                          {tab.id === 'team-chat' && (
                            <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                              4
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[600px]">
                <div className="p-6">
                  <ActiveComponent />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App; 