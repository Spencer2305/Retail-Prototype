import React, { useState } from 'react';
import { Settings, Bot, Zap, BarChart3, MessageSquare, Clock, Users, AlertTriangle, CheckCircle, XCircle, Edit, Plus, Save, RefreshCw } from 'lucide-react';
import { mockChatbotConfiguration, mockAIWorkflows, mockAIAnalyticsConfigs } from '../data/mockData';

const AIControlCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chatbot' | 'workflows' | 'analytics' | 'monitoring'>('chatbot');
  const [chatbotConfig, setChatbotConfig] = useState(mockChatbotConfiguration);
  const [isEditing, setIsEditing] = useState(false);

  const StatusBadge: React.FC<{ isActive: boolean; onClick?: () => void }> = ({ isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-colors ${
        isActive 
          ? 'bg-green-100 text-green-800 hover:bg-green-200' 
          : 'bg-red-100 text-red-800 hover:bg-red-200'
      }`}
    >
      {isActive ? <CheckCircle className="w-3 h-3 mr-1" /> : <XCircle className="w-3 h-3 mr-1" />}
      {isActive ? 'Active' : 'Inactive'}
    </button>
  );

  const TabButton: React.FC<{
    id: string;
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
  }> = ({ id, label, icon, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
        isActive ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  const ChatbotConfigurationTab = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Chatbot Configuration</h2>
          <p className="text-gray-600">Configure your AI chatbot's behavior and responses</p>
        </div>
        <div className="flex items-center space-x-3">
          <StatusBadge 
            isActive={chatbotConfig.isActive} 
            onClick={() => setChatbotConfig({...chatbotConfig, isActive: !chatbotConfig.isActive})}
          />
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn-secondary flex items-center space-x-2"
          >
            <Edit className="w-4 h-4" />
            <span>{isEditing ? 'Cancel' : 'Edit'}</span>
          </button>
          {isEditing && (
            <button className="btn-primary flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          )}
        </div>
      </div>

      {/* Basic Configuration */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bot Name</label>
            {isEditing ? (
              <input
                type="text"
                value={chatbotConfig.name}
                onChange={(e) => setChatbotConfig({...chatbotConfig, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            ) : (
              <p className="text-gray-900">{chatbotConfig.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Personality</label>
            {isEditing ? (
              <select
                value={chatbotConfig.personality}
                onChange={(e) => setChatbotConfig({...chatbotConfig, personality: e.target.value as any})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
              </select>
            ) : (
              <p className="text-gray-900 capitalize">{chatbotConfig.personality}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Response Delay (ms)</label>
            {isEditing ? (
              <input
                type="number"
                value={chatbotConfig.responseDelay}
                onChange={(e) => setChatbotConfig({...chatbotConfig, responseDelay: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            ) : (
              <p className="text-gray-900">{chatbotConfig.responseDelay}ms</p>
            )}
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Welcome Message</h3>
        {isEditing ? (
          <textarea
            value={chatbotConfig.welcomeMessage}
            onChange={(e) => setChatbotConfig({...chatbotConfig, welcomeMessage: e.target.value})}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        ) : (
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <p className="text-gray-700">{chatbotConfig.welcomeMessage}</p>
          </div>
        )}
      </div>

      {/* Working Hours */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Working Hours</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
            <p className="text-gray-900">{chatbotConfig.workingHours.start}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
            <p className="text-gray-900">{chatbotConfig.workingHours.end}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <p className="text-gray-900">{chatbotConfig.workingHours.timezone}</p>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Off-Hours Message</label>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">{chatbotConfig.workingHours.offHoursMessage}</p>
          </div>
        </div>
      </div>

      {/* Automated Responses */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Automated Responses</h3>
          <button className="btn-secondary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Response</span>
          </button>
        </div>
        <div className="space-y-4">
          {chatbotConfig.automatedResponses.map((response, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{response.name}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{response.confidence}% confidence</span>
                  <StatusBadge isActive={response.isActive} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Keywords</p>
                  <div className="flex flex-wrap gap-1">
                    {response.keywords.map((keyword, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Intent</p>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded capitalize">
                    {response.intent.replace('_', ' ')}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-700 mb-1">Response</p>
                <p className="text-sm text-gray-600">{response.response}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Triggers */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Proactive Triggers</h3>
          <button className="btn-secondary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Trigger</span>
          </button>
        </div>
        <div className="space-y-4">
          {chatbotConfig.triggers.map((trigger, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{trigger.name}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Priority {trigger.priority}</span>
                  <StatusBadge isActive={trigger.isActive} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Trigger Type</p>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded capitalize">
                    {trigger.type.replace('_', ' ')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Condition</p>
                  <span className="text-sm text-gray-600">
                    {trigger.conditions.operator.replace('_', ' ')} {trigger.conditions.value}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Action</p>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded capitalize">
                    {trigger.action.type.replace('_', ' ')}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-700 mb-1">Message</p>
                <p className="text-sm text-gray-600">{trigger.action.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const WorkflowsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">AI Workflows</h2>
          <p className="text-gray-600">Automate customer interactions and business processes</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create Workflow</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockAIWorkflows.map((workflow, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">{workflow.name}</h3>
              <StatusBadge isActive={workflow.isActive} />
            </div>
            <p className="text-gray-600 mb-4">{workflow.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">Type:</span>
                <span className="text-sm text-gray-600 capitalize">{workflow.type.replace('_', ' ')}</span>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-700">Actions:</span>
                <div className="mt-2 space-y-2">
                  {workflow.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-600 capitalize">{action.type.replace('_', ' ')}</span>
                      <span className="text-xs text-gray-500">
                        Delay: {Math.round(action.delay / 60000)}min
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700">Frequency:</span>
                <span className="text-sm text-gray-600 capitalize">{workflow.schedule?.frequency}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-2">
              <button className="btn-secondary flex-1">Edit</button>
              <button className="btn-primary flex-1">Test Run</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">AI Analytics Configuration</h2>
          <p className="text-gray-600">Configure automated analytics and monitoring</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Analytics</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {mockAIAnalyticsConfigs.map((config, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{config.name}</h3>
                  <p className="text-sm text-gray-500 capitalize">{config.type.replace('_', ' ')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 capitalize">{config.frequency}</span>
                <StatusBadge isActive={config.isActive} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Thresholds</h4>
                <div className="space-y-2">
                  {Object.entries(config.thresholds).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</span>
                      <span className="text-sm font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Notifications</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Email</span>
                    <div className={`w-4 h-4 rounded-full ${config.notifications.email ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Dashboard</span>
                    <div className={`w-4 h-4 rounded-full ${config.notifications.dashboard ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Slack</span>
                    <div className={`w-4 h-4 rounded-full ${config.notifications.slack ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Recipients</h4>
              <div className="flex flex-wrap gap-2">
                {config.recipients.map((recipient, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {recipient}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-2">
              <button className="btn-secondary">Configure</button>
              <button className="btn-primary">Test Alert</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MonitoringTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">AI System Monitoring</h2>
        <p className="text-gray-600">Real-time status and performance of AI systems</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Chatbot Status</p>
              <p className="text-2xl font-bold text-green-600">Online</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Bot className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Response Time</span>
              <span className="font-medium">1.2s avg</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Workflows</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Success Rate</span>
              <span className="font-medium">98.5%</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Sentiment Score</p>
              <p className="text-2xl font-bold text-yellow-600">+0.72</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <MessageSquare className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Trend</span>
              <span className="font-medium text-green-600">↑ 12%</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Alerts</p>
              <p className="text-2xl font-bold text-red-600">3</p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">High Priority</span>
              <span className="font-medium">1</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <button className="btn-secondary flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
        </div>
        <div className="space-y-3">
          {[
            { time: '2 minutes ago', message: 'Workflow "Premium Customer Onboarding" executed successfully', type: 'success' },
            { time: '5 minutes ago', message: 'High sentiment alert triggered for customer Emma Williams', type: 'warning' },
            { time: '12 minutes ago', message: 'Chatbot response time increased to 2.1s', type: 'info' },
            { time: '18 minutes ago', message: 'New automated response rule activated', type: 'success' },
            { time: '25 minutes ago', message: 'Cart abandonment workflow triggered for 3 customers', type: 'info' }
          ].map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                activity.type === 'success' ? 'bg-green-500' :
                activity.type === 'warning' ? 'bg-yellow-500' :
                'bg-blue-500'
              }`}></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI Control Center</h1>
            <p className="text-gray-600">Configure and manage your AI-powered features</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 p-1 bg-gray-100 rounded-lg">
        <TabButton
          id="chatbot"
          label="Chatbot Config"
          icon={<Bot className="w-4 h-4" />}
          isActive={activeTab === 'chatbot'}
          onClick={() => setActiveTab('chatbot')}
        />
        <TabButton
          id="workflows"
          label="AI Workflows"
          icon={<Zap className="w-4 h-4" />}
          isActive={activeTab === 'workflows'}
          onClick={() => setActiveTab('workflows')}
        />
        <TabButton
          id="analytics"
          label="Analytics Config"
          icon={<BarChart3 className="w-4 h-4" />}
          isActive={activeTab === 'analytics'}
          onClick={() => setActiveTab('analytics')}
        />
        <TabButton
          id="monitoring"
          label="Monitoring"
          icon={<Users className="w-4 h-4" />}
          isActive={activeTab === 'monitoring'}
          onClick={() => setActiveTab('monitoring')}
        />
      </div>

      {/* Tab Content */}
      {activeTab === 'chatbot' && <ChatbotConfigurationTab />}
      {activeTab === 'workflows' && <WorkflowsTab />}
      {activeTab === 'analytics' && <AnalyticsTab />}
      {activeTab === 'monitoring' && <MonitoringTab />}
    </div>
  );
};

export default AIControlCenter; 