export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  message: string;
  timestamp: Date;
  orderNumber?: string;
  productId?: string;
}

export interface ChatConversation {
  id: string;
  customerName: string;
  customerEmail: string;
  status: 'active' | 'resolved' | 'pending';
  messages: ChatMessage[];
  createdAt: Date;
  lastActivity: Date;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
  status: 'active' | 'inactive' | 'out_of_stock';
  imageUrl?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  products: Array<{
    product: Product;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  shippingAddress: string;
}

export interface AnalyticsData {
  revenue: {
    daily: Array<{ date: string; amount: number }>;
    monthly: Array<{ month: string; amount: number }>;
  };
  orders: {
    total: number;
    pending: number;
    completed: number;
    cancelled: number;
  };
  customers: {
    total: number;
    new: number;
    returning: number;
  };
  topProducts: Array<{
    product: Product;
    sales: number;
    revenue: number;
  }>;
}

// New interfaces for additional features
export interface VisitorAnalytics {
  uniqueVisitors: {
    daily: Array<{ date: string; visitors: number; uniqueIPs: number }>;
    hourly: Array<{ hour: string; visitors: number }>;
  };
  topPages: Array<{
    page: string;
    views: number;
    uniqueVisitors: number;
    avgTimeOnPage: number;
  }>;
  geographicData: Array<{
    country: string;
    visitors: number;
    percentage: number;
  }>;
  deviceTypes: Array<{
    device: string;
    visitors: number;
    percentage: number;
  }>;
  totalUniqueIPs: number;
  totalPageViews: number;
  bounceRate: number;
  avgSessionDuration: number;
}

export interface ProductInsights {
  productViews: Array<{
    product: Product;
    views: number;
    clicks: number;
    conversionRate: number;
    addToCartRate: number;
    wishlistAdds: number;
  }>;
  searchTerms: Array<{
    term: string;
    searches: number;
    resultsClicked: number;
  }>;
  categoryPerformance: Array<{
    category: string;
    views: number;
    sales: number;
    conversionRate: number;
  }>;
  abandonedCarts: Array<{
    product: Product;
    abandonedCount: number;
    recoveryRate: number;
  }>;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  status: 'online' | 'away' | 'offline';
  lastSeen: Date;
}

export interface TeamChatMessage {
  id: string;
  content: string;
  author: TeamMember;
  timestamp: Date;
  mentions: string[];
  reactions: {
    emoji: string;
    count: number;
    users: string[];
  }[];
}

export interface TeamChatChannel {
  id: string;
  name: string;
  description: string;
  type: 'general' | 'support' | 'development' | 'marketing';
  messages: TeamChatMessage[];
  members: TeamMember[];
  isPrivate: boolean;
  createdAt: Date;
  lastActivity: Date;
  unreadCount: number;
}

export interface DashboardTab {
  id: string;
  name: string;
  icon: string;
  component: React.ComponentType;
}

// Reports interfaces
export interface Report {
  id: string;
  name: string;
  type: 'sales' | 'analytics' | 'inventory' | 'customer' | 'financial' | 'custom';
  description: string;
  createdAt: Date;
  createdBy: string;
  lastGenerated?: Date;
  status: 'draft' | 'scheduled' | 'completed' | 'failed';
  fileUrl?: string;
  fileSize?: number;
  parameters: ReportParameters;
  schedule?: ReportSchedule;
}

export interface ReportParameters {
  dateRange: {
    start: Date;
    end: Date;
    preset?: 'today' | 'yesterday' | 'last7days' | 'last30days' | 'thisMonth' | 'lastMonth' | 'thisYear' | 'custom';
  };
  filters: {
    products?: string[];
    categories?: string[];
    customers?: string[];
    orderStatus?: string[];
    regions?: string[];
  };
  metrics: string[];
  format: 'pdf' | 'excel' | 'csv' | 'json';
  includeCharts: boolean;
  includeSummary: boolean;
}

export interface ReportSchedule {
  frequency: 'once' | 'daily' | 'weekly' | 'monthly' | 'quarterly';
  dayOfWeek?: number; // 0-6 for weekly
  dayOfMonth?: number; // 1-31 for monthly
  time: string; // HH:MM format
  recipients: string[];
  isActive: boolean;
}

export interface ReportTemplate {
  id: string;
  name: string;
  type: 'sales' | 'analytics' | 'inventory' | 'customer' | 'financial' | 'custom';
  description: string;
  defaultParameters: Partial<ReportParameters>;
  isBuiltIn: boolean;
  createdBy?: string;
  createdAt: Date;
}

// AI-Powered Features
export interface SentimentAnalysis {
  chatId: string;
  customerName: string;
  overallSentiment: 'positive' | 'neutral' | 'negative';
  sentimentScore: number; // -1 to 1
  emotions: {
    joy: number;
    anger: number;
    fear: number;
    sadness: number;
    surprise: number;
  };
  keyTopics: string[];
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  aiSummary: string;
  recommendedActions: string[];
}

export interface PredictiveAnalytic {
  id: string;
  type: 'sales_forecast' | 'inventory_alert' | 'customer_churn' | 'price_optimization';
  title: string;
  prediction: string;
  confidence: number; // 0-100
  timeframe: string;
  impact: 'low' | 'medium' | 'high';
  data: any;
  createdAt: Date;
}

export interface AutomatedInsight {
  id: string;
  category: 'performance' | 'opportunity' | 'risk' | 'trend';
  title: string;
  description: string;
  insight: string;
  recommendation: string;
  confidence: number;
  priority: 'low' | 'medium' | 'high';
  potentialImpact: string;
  dataSource: string;
  createdAt: Date;
}

export interface ProductRecommendation {
  id: string;
  type: 'cross_sell' | 'upsell' | 'bundle' | 'replacement';
  primaryProduct: Product;
  recommendedProducts: Product[];
  reason: string;
  confidence: number;
  expectedRevenue: number;
  customerSegment: string;
}

// AI Control Center Interfaces
export interface ChatbotConfiguration {
  id: string;
  name: string;
  isActive: boolean;
  welcomeMessage: string;
  fallbackMessage: string;
  responseDelay: number; // milliseconds
  personality: 'professional' | 'friendly' | 'casual' | 'formal';
  autoGreeting: boolean;
  proactiveMessages: boolean;
  workingHours: {
    enabled: boolean;
    start: string; // HH:MM format
    end: string; // HH:MM format
    timezone: string;
    offHoursMessage: string;
  };
  triggers: ChatbotTrigger[];
  automatedResponses: AutomatedResponse[];
}

export interface ChatbotTrigger {
  id: string;
  name: string;
  isActive: boolean;
  type: 'time_on_page' | 'page_visit' | 'exit_intent' | 'scroll_depth' | 'idle_time' | 'cart_abandonment';
  conditions: {
    value: number;
    operator: 'greater_than' | 'less_than' | 'equals';
    pages?: string[];
    products?: string[];
  };
  action: {
    type: 'show_message' | 'offer_help' | 'show_discount' | 'recommend_product';
    message: string;
    delay: number;
  };
  priority: number;
}

export interface AutomatedResponse {
  id: string;
  name: string;
  isActive: boolean;
  keywords: string[];
  intent: 'order_status' | 'product_info' | 'shipping' | 'returns' | 'pricing' | 'support' | 'general';
  response: string;
  confidence: number;
  followUpActions: string[];
  escalateToHuman: boolean;
}

export interface AIWorkflow {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  type: 'customer_onboarding' | 'order_follow_up' | 'abandoned_cart' | 'product_recommendation' | 'support_routing';
  triggers: string[];
  actions: AIWorkflowAction[];
  schedule?: {
    frequency: 'immediate' | 'hourly' | 'daily' | 'weekly';
    time?: string;
  };
}

export interface AIWorkflowAction {
  id: string;
  type: 'send_email' | 'create_ticket' | 'update_customer' | 'send_notification' | 'recommend_products';
  parameters: Record<string, any>;
  delay: number;
  conditions?: Record<string, any>;
}

export interface AIAnalyticsConfig {
  id: string;
  name: string;
  isActive: boolean;
  type: 'sentiment_monitoring' | 'churn_prediction' | 'sales_forecasting' | 'inventory_optimization';
  frequency: 'real_time' | 'hourly' | 'daily' | 'weekly';
  thresholds: Record<string, number>;
  notifications: {
    email: boolean;
    dashboard: boolean;
    slack: boolean;
  };
  recipients: string[];
} 