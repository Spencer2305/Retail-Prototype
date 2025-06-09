import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, BarChart3, Package, ShoppingCart, Users, Globe, MousePointer, MessageCircle, FileText, Settings, Brain, Zap, Star } from 'lucide-react';
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
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [activeTab, setActiveTab] = useState('ai-control');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tabs = [
    { id: 'ai-control', name: 'AI Control Center', icon: Settings, component: AIControlCenter, premium: true },
    { id: 'ai-insights', name: 'AI Insights', icon: Brain, component: AIInsights, premium: true },
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
    <div className="h-screen cosmic-bg relative overflow-hidden">
      
      {/* Header */}
      <header className={`relative z-50 transition-all duration-1000 ${isLoaded ? 'slide-in-left' : 'opacity-0'}`}>
        <div className="glass-card mx-4 mt-4 rounded-2xl">
          <div className="px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-3 rounded-xl text-gray-600 dark:text-dark-textSecondary hover:text-gray-900 dark:hover:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-card focus:outline-none focus:ring-2 focus:ring-cosmic-purple transition-all duration-300 lg:hidden"
                >
                  {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
                <div className="flex-shrink-0 flex items-center ml-4 lg:ml-0">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-cosmic-purple to-cosmic-pink rounded-xl pulse-glow flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-cosmic-coral rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
                        Premium <span className="text-gradient">Nexus</span>
                      </h1>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-cosmic-gold/30 to-cosmic-mint/30 backdrop-blur-sm text-cosmic-purple text-xs font-semibold rounded-full border border-cosmic-gold/50">
                          £50,000+ Elite Suite
                        </span>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-cosmic-gold fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3 px-4 py-2 bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-dark-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-cosmic-mint rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-700 dark:text-dark-textSecondary font-medium">Live</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300 dark:bg-dark-border"></div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-600 dark:text-dark-textSecondary" />
                    <span className="text-sm text-gray-700 dark:text-dark-textSecondary font-medium">5 online</span>
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-indigo/20 backdrop-blur-sm rounded-xl border border-cosmic-purple/30">
                  <Brain className="w-4 h-4 text-cosmic-purple" />
                  <span className="text-sm text-gray-700 dark:text-dark-textSecondary font-medium">AI Active</span>
                  <div className="w-2 h-2 bg-cosmic-purple rounded-full animate-pulse"></div>
                </div>
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-6rem)] mt-4">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-80 transition-transform duration-500 ease-out lg:translate-x-0 lg:static lg:inset-0 lg:h-auto ${isLoaded ? 'slide-in-left animate-delay-200' : 'opacity-0'}`}>
          <div className="flex flex-col h-full lg:h-auto pt-20 lg:pt-0 pb-8">
            <div className="sidebar-glass mx-4 mt-4 mb-4 rounded-2xl flex-1 lg:flex-none min-h-0">
              <div className="flex-1 flex flex-col overflow-y-auto p-6">
                <div className="mb-8">
                  <h2 className="text-gray-800 dark:text-dark-text font-semibold text-lg mb-2">Navigation</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-pink rounded-full"></div>
                </div>
                <nav className="flex-1 space-y-2">
                  {tabs.map((tab, index) => {
                    const Icon = tab.icon;
                    const isPremium = tab.premium;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setSidebarOpen(false);
                        }}
                        className={`w-full nav-item flex items-center px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 group ${
                          activeTab === tab.id
                            ? isPremium
                              ? 'bg-gradient-to-r from-cosmic-purple/20 to-cosmic-indigo/20 text-cosmic-purple border border-cosmic-purple/30 shadow-lg shadow-cosmic-purple/10'
                              : 'bg-gray-100 dark:bg-dark-cardHover text-gray-900 dark:text-dark-text border border-gray-200 dark:border-dark-border'
                            : isPremium
                              ? 'text-cosmic-purple hover:bg-cosmic-purple/5 hover:text-cosmic-purple'
                              : 'text-gray-600 dark:text-dark-textSecondary hover:bg-gray-50 dark:hover:bg-dark-card hover:text-gray-900 dark:hover:text-dark-text'
                        } fade-in-up`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Icon className={`mr-4 h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${isPremium ? 'text-cosmic-purple' : 'text-gray-500'}`} />
                        <span className="flex-1 text-left">{tab.name}</span>
                        {isPremium && (
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cosmic-coral rounded-full animate-pulse"></div>
                            <span className="bg-gradient-to-r from-cosmic-coral to-cosmic-pink text-white text-xs rounded-full px-2 py-1 font-bold">
                              PRO
                            </span>
                          </div>
                        )}
                        {tab.id === 'team-chat' && (
                          <span className="bg-cosmic-coral text-white text-xs rounded-full px-2 py-1 animate-bounce-slow">
                            4
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>
                
                {/* Premium Status Card */}
                <div className="mt-4 p-3 bg-gradient-to-br from-cosmic-gold/20 to-cosmic-mint/20 backdrop-blur-sm rounded-lg border border-cosmic-gold/40 pulse-glow">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-cosmic-gold to-cosmic-mint rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-gray-800 dark:text-dark-text font-medium mb-1 text-sm">Elite Access</h3>
                    <p className="text-gray-600 dark:text-dark-textSecondary text-xs mb-2">Premium AI insights</p>
                    <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-cosmic-gold to-cosmic-mint h-1.5 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                    <p className="text-cosmic-purple text-xs mt-1 font-medium">80% used</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden" 
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main content */}
        <div className={`flex-1 flex flex-col overflow-hidden lg:ml-6 ${isLoaded ? 'slide-in-right animate-delay-400' : 'opacity-0'}`}>
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto">
              {/* Tab Header */}
              <div className="mb-8">
                <div className="glass-card-header">
                  <nav className="flex space-x-2 overflow-x-auto">
                    {tabs.map((tab, index) => {
                      const Icon = tab.icon;
                      const isPremium = tab.premium;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center py-3 px-6 font-medium text-sm whitespace-nowrap rounded-xl transition-all duration-300 group ${
                            activeTab === tab.id
                              ? isPremium
                                ? 'bg-gradient-to-r from-cosmic-purple to-cosmic-indigo text-white shadow-lg shadow-cosmic-purple/20'
                                : 'bg-gray-200 text-gray-900'
                              : isPremium
                                ? 'text-cosmic-purple hover:bg-cosmic-purple/10 hover:text-cosmic-purple'
                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          } fade-in-up`}
                          style={{ animationDelay: `${index * 0.05}s` }}
                        >
                          <Icon className={`mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${isPremium && activeTab !== tab.id ? 'text-cosmic-purple' : ''}`} />
                          {tab.name}
                          {isPremium && (
                            <div className="ml-3 flex items-center space-x-1">
                              <div className="w-2 h-2 bg-cosmic-coral rounded-full animate-pulse"></div>
                              <span className="bg-cosmic-coral text-white text-xs rounded-full px-2 py-1 font-bold">
                                PRO
                              </span>
                            </div>
                          )}
                          {tab.id === 'team-chat' && (
                            <span className="ml-3 bg-cosmic-coral text-white text-xs rounded-full px-2 py-1 animate-bounce-slow">
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
              <div className="glass-card-minimal relative fade-in-up animate-delay-500 mb-6">
                {/* Content background pattern */}
                <div className="absolute inset-0 opacity-3 pointer-events-none">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-cosmic-purple/20 to-cosmic-pink/20 rounded-full"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-cosmic-blue/20 to-cosmic-mint/20 rounded-lg transform rotate-45"></div>
                </div>
                
                <div className="relative z-10 pb-8">
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