import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Brain, TrendingUp, AlertTriangle, Lightbulb, Target, Zap, Heart, MessageSquare, ShoppingCart, Users, DollarSign, Clock } from 'lucide-react';
import { 
  mockSentimentAnalysis, 
  mockPredictiveAnalytics, 
  mockAutomatedInsights, 
  mockProductRecommendations 
} from '../data/mockData';

const AIInsights: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'sentiment' | 'predictions' | 'insights' | 'recommendations'>('sentiment');

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-100';
      case 'negative': return 'text-red-600 bg-red-100';
      case 'neutral': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 85) return 'text-green-600 bg-green-100';
    if (confidence >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-orange-600 bg-orange-100';
  };

  const TabButton: React.FC<{ 
    id: string; 
    label: string; 
    icon: React.ReactNode; 
    isActive: boolean; 
    onClick: () => void; 
  }> = ({ id, label, icon, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
        isActive ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  const SentimentAnalysisView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mockSentimentAnalysis.map((analysis, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">{analysis.customerName}</h3>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(analysis.overallSentiment)}`}>
                  {analysis.overallSentiment}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(analysis.urgencyLevel)}`}>
                  {analysis.urgencyLevel}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Sentiment Score</span>
                <span className="text-sm font-medium text-gray-900">{analysis.sentimentScore.toFixed(2)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    analysis.sentimentScore > 0.3 ? 'bg-green-500' : 
                    analysis.sentimentScore < -0.3 ? 'bg-red-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: `${Math.abs(analysis.sentimentScore) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Emotion Analysis</h4>
              <ResponsiveContainer width="100%" height={120}>
                <RadarChart data={[
                  { emotion: 'Joy', value: analysis.emotions.joy * 100 },
                  { emotion: 'Anger', value: analysis.emotions.anger * 100 },
                  { emotion: 'Fear', value: analysis.emotions.fear * 100 },
                  { emotion: 'Sadness', value: analysis.emotions.sadness * 100 },
                  { emotion: 'Surprise', value: analysis.emotions.surprise * 100 }
                ]}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="emotion" tick={{ fontSize: 10 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
                  <Radar name="Emotions" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Key Topics</h4>
              <div className="flex flex-wrap gap-1">
                {analysis.keyTopics.map((topic, topicIndex) => (
                  <span key={topicIndex} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">AI Summary</h4>
              <p className="text-sm text-gray-600">{analysis.aiSummary}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Recommended Actions</h4>
              <ul className="space-y-1">
                {analysis.recommendedActions.map((action, actionIndex) => (
                  <li key={actionIndex} className="text-xs text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const PredictiveAnalyticsView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockPredictiveAnalytics.map((prediction, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-purple-100 rounded-lg">
                  {prediction.type === 'sales_forecast' && <TrendingUp className="w-5 h-5 text-purple-600" />}
                  {prediction.type === 'inventory_alert' && <AlertTriangle className="w-5 h-5 text-purple-600" />}
                  {prediction.type === 'customer_churn' && <Users className="w-5 h-5 text-purple-600" />}
                  {prediction.type === 'price_optimization' && <DollarSign className="w-5 h-5 text-purple-600" />}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{prediction.title}</h3>
                  <p className="text-sm text-gray-500">{prediction.timeframe}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(prediction.confidence)}`}>
                  {prediction.confidence}% confidence
                </span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-lg font-medium text-gray-900 mb-2">{prediction.prediction}</p>
              <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                prediction.impact === 'high' ? 'bg-red-100 text-red-700' :
                prediction.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
                {prediction.impact} impact
              </span>
            </div>

            {prediction.type === 'sales_forecast' && (
              <div className="grid grid-cols-2 gap-4 p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-xs text-gray-600">Current Revenue</p>
                  <p className="font-semibold text-gray-900">{formatCurrency(prediction.data.currentRevenue)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Projected Revenue</p>
                  <p className="font-semibold text-green-600">{formatCurrency(prediction.data.projectedRevenue)}</p>
                </div>
              </div>
            )}

            {prediction.type === 'inventory_alert' && (
              <div className="p-3 bg-red-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">Current Stock</p>
                    <p className="font-semibold text-red-600">{prediction.data.currentStock} units</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Days Remaining</p>
                    <p className="font-semibold text-red-600">{prediction.data.daysRemaining} days</p>
                  </div>
                </div>
              </div>
            )}

            {prediction.type === 'customer_churn' && (
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">At-Risk Customers</p>
                    <p className="font-semibold text-orange-600">{prediction.data.riskCustomers}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Potential Loss</p>
                    <p className="font-semibold text-orange-600">{formatCurrency(prediction.data.potentialRevenueLoss)}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const AutomatedInsightsView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {mockAutomatedInsights.map((insight, index) => (
          <div key={index} className="card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  insight.category === 'opportunity' ? 'bg-green-100' :
                  insight.category === 'performance' ? 'bg-blue-100' :
                  insight.category === 'risk' ? 'bg-red-100' :
                  'bg-purple-100'
                }`}>
                  {insight.category === 'opportunity' && <Target className="w-5 h-5 text-green-600" />}
                  {insight.category === 'performance' && <TrendingUp className="w-5 h-5 text-blue-600" />}
                  {insight.category === 'risk' && <AlertTriangle className="w-5 h-5 text-red-600" />}
                  {insight.category === 'trend' && <Zap className="w-5 h-5 text-purple-600" />}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  insight.priority === 'high' ? 'bg-red-100 text-red-700' :
                  insight.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {insight.priority} priority
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(insight.confidence)}`}>
                  {insight.confidence}% confidence
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-2">AI Insight</h4>
                <p className="text-sm text-gray-600">{insight.insight}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Recommendation</h4>
                <p className="text-sm text-gray-600">{insight.recommendation}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className="text-gray-500">Impact: <span className="font-medium text-gray-900">{insight.potentialImpact}</span></span>
                <span className="text-gray-500">Source: <span className="font-medium text-gray-900">{insight.dataSource}</span></span>
              </div>
              <span className="text-gray-500">{insight.createdAt.toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProductRecommendationsView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockProductRecommendations.map((recommendation, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  {recommendation.type === 'cross_sell' && <ShoppingCart className="w-5 h-5 text-indigo-600" />}
                  {recommendation.type === 'upsell' && <TrendingUp className="w-5 h-5 text-indigo-600" />}
                  {recommendation.type === 'bundle' && <Target className="w-5 h-5 text-indigo-600" />}
                  {recommendation.type === 'replacement' && <Zap className="w-5 h-5 text-indigo-600" />}
                </div>
                <span className="text-sm font-medium text-gray-900 capitalize">{recommendation.type.replace('_', ' ')}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(recommendation.confidence)}`}>
                {recommendation.confidence}% match
              </span>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Primary Product</h4>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                {recommendation.primaryProduct.imageUrl && (
                  <img
                    src={recommendation.primaryProduct.imageUrl}
                    alt={recommendation.primaryProduct.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                )}
                <div>
                  <p className="font-medium text-gray-900">{recommendation.primaryProduct.name}</p>
                  <p className="text-sm text-gray-500">{formatCurrency(recommendation.primaryProduct.price)}</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Recommended Products</h4>
              <div className="space-y-2">
                {recommendation.recommendedProducts.map((product, productIndex) => (
                  <div key={productIndex} className="flex items-center space-x-3 p-2 border border-gray-200 rounded-lg">
                    {product.imageUrl && (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded"
                      />
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      <p className="text-xs text-gray-500">{formatCurrency(product.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4 p-3 bg-green-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Expected Revenue</span>
                <span className="font-semibold text-green-600">{formatCurrency(recommendation.expectedRevenue)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Target Segment</span>
                <span className="text-sm font-medium text-gray-900">{recommendation.customerSegment}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">AI Reasoning</h4>
              <p className="text-sm text-gray-600">{recommendation.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI-Powered Insights</h1>
            <p className="text-gray-600">Advanced analytics and intelligent recommendations</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 p-1 bg-gray-100 rounded-lg">
        <TabButton
          id="sentiment"
          label="Sentiment Analysis"
          icon={<MessageSquare className="w-4 h-4" />}
          isActive={selectedTab === 'sentiment'}
          onClick={() => setSelectedTab('sentiment')}
        />
        <TabButton
          id="predictions"
          label="Predictive Analytics"
          icon={<TrendingUp className="w-4 h-4" />}
          isActive={selectedTab === 'predictions'}
          onClick={() => setSelectedTab('predictions')}
        />
        <TabButton
          id="insights"
          label="Automated Insights"
          icon={<Lightbulb className="w-4 h-4" />}
          isActive={selectedTab === 'insights'}
          onClick={() => setSelectedTab('insights')}
        />
        <TabButton
          id="recommendations"
          label="Product Recommendations"
          icon={<Target className="w-4 h-4" />}
          isActive={selectedTab === 'recommendations'}
          onClick={() => setSelectedTab('recommendations')}
        />
      </div>

      {/* Tab Content */}
      {selectedTab === 'sentiment' && <SentimentAnalysisView />}
      {selectedTab === 'predictions' && <PredictiveAnalyticsView />}
      {selectedTab === 'insights' && <AutomatedInsightsView />}
      {selectedTab === 'recommendations' && <ProductRecommendationsView />}
    </div>
  );
};

export default AIInsights; 