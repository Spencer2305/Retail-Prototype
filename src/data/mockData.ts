import { ChatConversation, Product, Order, AnalyticsData, VisitorAnalytics, ProductInsights, TeamMember, TeamChatChannel, TeamChatMessage, Report, ReportTemplate, SentimentAnalysis, PredictiveAnalytic, AutomatedInsight, ProductRecommendation, ChatbotConfiguration, AIWorkflow, AIAnalyticsConfig } from '../types';

export const mockChatConversations: ChatConversation[] = [
  {
    id: '1',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.johnson@email.com',
    status: 'resolved',
    createdAt: new Date('2024-01-15T10:30:00'),
    lastActivity: new Date('2024-01-15T15:20:00'),
    messages: [
      {
        id: '1',
        sender: 'user',
        message: 'Hi, I need help with my recent order #ORD-2024-001',
        timestamp: new Date('2024-01-15T10:30:00'),
        orderNumber: 'ORD-2024-001'
      },
      {
        id: '2',
        sender: 'bot',
        message: 'Hello Sarah! I can help you with order #ORD-2024-001. Let me pull up the details for you.',
        timestamp: new Date('2024-01-15T10:31:00'),
        orderNumber: 'ORD-2024-001'
      },
      {
        id: '3',
        sender: 'bot',
        message: 'I can see your order contains 2x Premium Wireless Headphones (SKU: PWH-001) for £299.99 each. The order is currently being processed and will ship within 2-3 business days. Is there something specific you need help with?',
        timestamp: new Date('2024-01-15T10:32:00'),
        orderNumber: 'ORD-2024-001',
        productId: 'PWH-001'
      },
      {
        id: '4',
        sender: 'user',
        message: 'I need to change the shipping address. Can you help with that?',
        timestamp: new Date('2024-01-15T14:45:00')
      },
      {
        id: '5',
        sender: 'bot',
        message: 'I can definitely help you update the shipping address for order #ORD-2024-001. Since the order is still in processing status, we can make this change. What is the new shipping address you\'d like to use?',
        timestamp: new Date('2024-01-15T14:46:00'),
        orderNumber: 'ORD-2024-001'
      },
      {
        id: '6',
        sender: 'user',
        message: 'Please change it to: 789 New Street, Birmingham, B1 2AA, UK',
        timestamp: new Date('2024-01-15T14:48:00')
      },
      {
        id: '7',
        sender: 'bot',
        message: 'Perfect! I\'ve successfully updated your shipping address to: 789 New Street, Birmingham, B1 2AA, UK. Your order #ORD-2024-001 will be shipped to this new address. You\'ll receive a tracking number via email once the order ships. Is there anything else I can help you with?',
        timestamp: new Date('2024-01-15T14:50:00'),
        orderNumber: 'ORD-2024-001'
      },
      {
        id: '8',
        sender: 'user',
        message: 'That\'s perfect, thank you so much for your help!',
        timestamp: new Date('2024-01-15T15:20:00')
      },
      {
        id: '9',
        sender: 'bot',
        message: 'You\'re very welcome, Sarah! Your order is all set with the new address. Have a wonderful day!',
        timestamp: new Date('2024-01-15T15:20:00')
      }
    ]
  },
  {
    id: '2',
    customerName: 'Michael Chen',
    customerEmail: 'michael.chen@email.com',
    status: 'resolved',
    createdAt: new Date('2024-01-14T09:15:00'),
    lastActivity: new Date('2024-01-14T16:45:00'),
    messages: [
      {
        id: '10',
        sender: 'user',
        message: 'Is product SKU: SLT-003 compatible with my existing setup?',
        timestamp: new Date('2024-01-14T09:15:00'),
        productId: 'SLT-003'
      },
      {
        id: '11',
        sender: 'bot',
        message: 'The Smart Laptop Stand (SKU: SLT-003) is compatible with laptops from 11" to 17". It supports up to 15kg weight and has adjustable height from 15cm to 45cm. What laptop model are you planning to use it with?',
        timestamp: new Date('2024-01-14T09:16:00'),
        productId: 'SLT-003'
      },
      {
        id: '12',
        sender: 'user',
        message: 'Perfect! I have a 15" MacBook Pro. I\'ll place an order.',
        timestamp: new Date('2024-01-14T11:20:00')
      },
      {
        id: '13',
        sender: 'bot',
        message: 'Excellent choice! The Smart Laptop Stand will work perfectly with your 15" MacBook Pro. You can place your order through our website or I can help you with that right now.',
        timestamp: new Date('2024-01-14T11:21:00')
      },
      {
        id: '14',
        sender: 'user',
        message: 'I just placed the order. My order number is #ORD-2024-012. When will it ship?',
        timestamp: new Date('2024-01-14T15:30:00'),
        orderNumber: 'ORD-2024-012'
      },
      {
        id: '15',
        sender: 'bot',
        message: 'Thank you for your order #ORD-2024-012! I can see your Smart Laptop Stand (SKU: SLT-003) order for £89.99. Your order is currently being processed and will ship within 1-2 business days. You\'ll receive tracking information via email once it ships.',
        timestamp: new Date('2024-01-14T15:32:00'),
        orderNumber: 'ORD-2024-012',
        productId: 'SLT-003'
      },
      {
        id: '16',
        sender: 'user',
        message: 'Great! What shipping method will be used?',
        timestamp: new Date('2024-01-14T16:40:00')
      },
      {
        id: '17',
        sender: 'bot',
        message: 'Your order #ORD-2024-012 will be shipped via Royal Mail 48 Hour Tracked service. You\'ll receive a tracking number that allows you to monitor the delivery progress. Estimated delivery is 2-3 working days from dispatch.',
        timestamp: new Date('2024-01-14T16:42:00'),
        orderNumber: 'ORD-2024-012'
      },
      {
        id: '18',
        sender: 'user',
        message: 'Perfect, thank you for all the information!',
        timestamp: new Date('2024-01-14T16:45:00')
      },
      {
        id: '19',
        sender: 'bot',
        message: 'You\'re welcome, Michael! Enjoy your new laptop stand. If you need any help with setup once it arrives, feel free to reach out!',
        timestamp: new Date('2024-01-14T16:45:00')
      }
    ]
  },
  {
    id: '3',
    customerName: 'Emma Williams',
    customerEmail: 'emma.williams@email.com',
    status: 'resolved',
    createdAt: new Date('2024-01-16T16:20:00'),
    lastActivity: new Date('2024-01-16T17:15:00'),
    messages: [
      {
        id: '20',
        sender: 'user',
        message: 'I received order #ORD-2024-015 but one item is missing',
        timestamp: new Date('2024-01-16T16:20:00'),
        orderNumber: 'ORD-2024-015'
      },
      {
        id: '21',
        sender: 'bot',
        message: 'I\'m sorry to hear about the missing item from order #ORD-2024-015. Let me check the details. Your order included: 1x Ergonomic Office Chair (SKU: EOC-002) and 1x Desk Organizer Set (SKU: DOS-001). Which item is missing?',
        timestamp: new Date('2024-01-16T16:22:00'),
        orderNumber: 'ORD-2024-015'
      },
      {
        id: '22',
        sender: 'user',
        message: 'The Desk Organizer Set is missing from the package',
        timestamp: new Date('2024-01-16T16:25:00'),
        productId: 'DOS-001'
      },
      {
        id: '23',
        sender: 'bot',
        message: 'I apologize for this inconvenience, Emma. I can see that the Desk Organizer Set (SKU: DOS-001) was indeed part of your order #ORD-2024-015. Let me arrange for the missing item to be sent to you immediately.',
        timestamp: new Date('2024-01-16T16:27:00'),
        orderNumber: 'ORD-2024-015',
        productId: 'DOS-001'
      },
      {
        id: '24',
        sender: 'user',
        message: 'Thank you! How long will it take to arrive?',
        timestamp: new Date('2024-01-16T16:30:00')
      },
      {
        id: '25',
        sender: 'bot',
        message: 'I\'ve arranged for express shipping of your Desk Organizer Set at no additional cost. It will be dispatched today and should arrive within 24-48 hours. You\'ll receive a separate tracking number for this shipment via email within the next hour.',
        timestamp: new Date('2024-01-16T16:32:00'),
        productId: 'DOS-001'
      },
      {
        id: '26',
        sender: 'user',
        message: 'That\'s excellent service! Will I be charged for the replacement?',
        timestamp: new Date('2024-01-16T16:35:00')
      },
      {
        id: '27',
        sender: 'bot',
        message: 'Absolutely not! This replacement is completely free of charge. We take full responsibility for the missing item. As an apology for the inconvenience, I\'ve also applied a £10 credit to your account for future purchases.',
        timestamp: new Date('2024-01-16T16:37:00')
      },
      {
        id: '28',
        sender: 'user',
        message: 'Wow, that\'s amazing customer service! Thank you so much.',
        timestamp: new Date('2024-01-16T17:10:00')
      },
      {
        id: '29',
        sender: 'bot',
        message: 'You\'re very welcome, Emma! We value your business and want to ensure you\'re completely satisfied. Your replacement Desk Organizer Set is on its way, and you should receive the tracking details shortly. Is there anything else I can help you with today?',
        timestamp: new Date('2024-01-16T17:12:00'),
        productId: 'DOS-001'
      },
      {
        id: '30',
        sender: 'user',
        message: 'No, that\'s everything. Thank you for resolving this so quickly!',
        timestamp: new Date('2024-01-16T17:15:00')
      },
      {
        id: '31',
        sender: 'bot',
        message: 'Perfect! Thank you for your patience, Emma. Have a wonderful day!',
        timestamp: new Date('2024-01-16T17:15:00')
      }
    ]
  },
  {
    id: '4',
    customerName: 'James Thompson',
    customerEmail: 'james.thompson@email.com',
    status: 'resolved',
    createdAt: new Date('2024-01-13T11:00:00'),
    lastActivity: new Date('2024-01-13T14:30:00'),
    messages: [
      {
        id: '32',
        sender: 'user',
        message: 'Hi, I placed order #ORD-2024-008 yesterday. Where is my package?',
        timestamp: new Date('2024-01-13T11:00:00'),
        orderNumber: 'ORD-2024-008'
      },
      {
        id: '33',
        sender: 'bot',
        message: 'Hello James! Let me check the status of your order #ORD-2024-008 for you.',
        timestamp: new Date('2024-01-13T11:01:00'),
        orderNumber: 'ORD-2024-008'
      },
      {
        id: '34',
        sender: 'bot',
        message: 'Great news! Your order #ORD-2024-008 containing 1x Ultra HD Monitor 27" (SKU: UHM-005) has been shipped! Your tracking number is: TRK789456123. The package is currently in transit and should arrive tomorrow.',
        timestamp: new Date('2024-01-13T11:02:00'),
        orderNumber: 'ORD-2024-008',
        productId: 'UHM-005'
      },
      {
        id: '35',
        sender: 'user',
        message: 'Excellent! Can you tell me exactly where it is right now?',
        timestamp: new Date('2024-01-13T13:15:00')
      },
      {
        id: '36',
        sender: 'bot',
        message: 'Let me check the latest tracking information for you... Your package with tracking number TRK789456123 is currently at the Manchester sorting facility and is scheduled for delivery tomorrow between 9 AM and 1 PM. You can track it in real-time using the tracking number on our website.',
        timestamp: new Date('2024-01-13T13:17:00')
      },
      {
        id: '37',
        sender: 'user',
        message: 'Perfect! Will someone need to be home to sign for it?',
        timestamp: new Date('2024-01-13T14:25:00')
      },
      {
        id: '38',
        sender: 'bot',
        message: 'Yes, since this is a high-value item (Ultra HD Monitor 27"), a signature will be required upon delivery. If you\'re not available, the courier will leave a card and you can arrange redelivery or collection from the local depot.',
        timestamp: new Date('2024-01-13T14:27:00'),
        productId: 'UHM-005'
      },
      {
        id: '39',
        sender: 'user',
        message: 'Great, I\'ll make sure to be home. Thanks for the help!',
        timestamp: new Date('2024-01-13T14:30:00')
      },
      {
        id: '40',
        sender: 'bot',
        message: 'You\'re welcome, James! Enjoy your new monitor. If you have any issues with setup or need any assistance, don\'t hesitate to contact us!',
        timestamp: new Date('2024-01-13T14:30:00')
      }
    ]
  },
  {
    id: '5',
    customerName: 'Lisa Rodriguez',
    customerEmail: 'lisa.rodriguez@email.com',
    status: 'resolved',
    createdAt: new Date('2024-01-12T14:20:00'),
    lastActivity: new Date('2024-01-12T15:45:00'),
    messages: [
      {
        id: '41',
        sender: 'user',
        message: 'I want to return an item from order #ORD-2024-005',
        timestamp: new Date('2024-01-12T14:20:00'),
        orderNumber: 'ORD-2024-005'
      },
      {
        id: '42',
        sender: 'bot',
        message: 'I can help you with the return for order #ORD-2024-005. Let me pull up your order details. I can see you purchased 1x Mechanical Gaming Keyboard (SKU: MSK-004). May I ask what the reason for the return is?',
        timestamp: new Date('2024-01-12T14:22:00'),
        orderNumber: 'ORD-2024-005',
        productId: 'MSK-004'
      },
      {
        id: '43',
        sender: 'user',
        message: 'The keyboard is too loud for my office environment. I need something quieter.',
        timestamp: new Date('2024-01-12T14:25:00')
      },
      {
        id: '44',
        sender: 'bot',
        message: 'I completely understand! The Mechanical Gaming Keyboard (SKU: MSK-004) does have tactile switches which can be quite audible. I can process a return for you. Since it\'s within our 30-day return window, you\'ll receive a full refund of £159.99.',
        timestamp: new Date('2024-01-12T14:27:00'),
        productId: 'MSK-004'
      },
      {
        id: '45',
        sender: 'user',
        message: 'That sounds good. How do I send it back?',
        timestamp: new Date('2024-01-12T14:30:00')
      },
      {
        id: '46',
        sender: 'bot',
        message: 'I\'ll email you a prepaid return label within the next 10 minutes. Simply package the keyboard in its original box (if available), attach the label, and drop it off at any Royal Mail post office. Once we receive it, your refund will be processed within 3-5 business days.',
        timestamp: new Date('2024-01-12T14:32:00')
      },
      {
        id: '47',
        sender: 'user',
        message: 'Perfect! Can you also recommend a quieter keyboard?',
        timestamp: new Date('2024-01-12T15:40:00')
      },
      {
        id: '48',
        sender: 'bot',
        message: 'Absolutely! For office use, I\'d recommend our Silent Pro Keyboard (SKU: SPK-006) with membrane switches - it\'s virtually silent and perfect for professional environments. It\'s £89.99 and has excellent reviews for office use.',
        timestamp: new Date('2024-01-12T15:42:00'),
        productId: 'SPK-006'
      },
      {
        id: '49',
        sender: 'user',
        message: 'That sounds perfect! I\'ll order that one once I return this keyboard.',
        timestamp: new Date('2024-01-12T15:45:00')
      },
      {
        id: '50',
        sender: 'bot',
        message: 'Excellent choice, Lisa! Your return label is being prepared and will be in your inbox shortly. Thank you for choosing us, and I\'m confident you\'ll love the Silent Pro Keyboard!',
        timestamp: new Date('2024-01-12T15:45:00'),
        productId: 'SPK-006'
      }
    ]
  }
];

export const mockProducts: Product[] = [
  {
    id: 'PWH-001',
    name: 'Premium Wireless Headphones',
    sku: 'PWH-001',
    price: 299.99,
    stock: 45,
    category: 'Electronics',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop'
  },
  {
    id: 'SLT-003',
    name: 'Smart Laptop Stand',
    sku: 'SLT-003',
    price: 89.99,
    stock: 23,
    category: 'Accessories',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop'
  },
  {
    id: 'EOC-002',
    name: 'Ergonomic Office Chair',
    sku: 'EOC-002',
    price: 449.99,
    stock: 12,
    category: 'Furniture',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop'
  },
  {
    id: 'DOS-001',
    name: 'Desk Organizer Set',
    sku: 'DOS-001',
    price: 34.99,
    stock: 67,
    category: 'Office Supplies',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=300&h=300&fit=crop'
  },
  {
    id: 'MSK-004',
    name: 'Mechanical Gaming Keyboard',
    sku: 'MSK-004',
    price: 159.99,
    stock: 0,
    category: 'Electronics',
    status: 'out_of_stock',
    imageUrl: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop'
  },
  {
    id: 'UHM-005',
    name: 'Ultra HD Monitor 27"',
    sku: 'UHM-005',
    price: 599.99,
    stock: 8,
    category: 'Electronics',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop'
  },
  {
    id: 'SPK-006',
    name: 'Silent Pro Keyboard',
    sku: 'SPK-006',
    price: 89.99,
    stock: 34,
    category: 'Electronics',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop'
  }
];

export const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-2024-001',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.johnson@email.com',
    products: [
      {
        product: mockProducts[0],
        quantity: 2,
        price: 299.99
      }
    ],
    total: 599.98,
    status: 'processing',
    createdAt: new Date('2024-01-15T08:30:00'),
    shippingAddress: '789 New Street, Birmingham, B1 2AA, UK'
  },
  {
    id: '2',
    orderNumber: 'ORD-2024-015',
    customerName: 'Emma Williams',
    customerEmail: 'emma.williams@email.com',
    products: [
      {
        product: mockProducts[2],
        quantity: 1,
        price: 449.99
      },
      {
        product: mockProducts[3],
        quantity: 1,
        price: 34.99
      }
    ],
    total: 484.98,
    status: 'delivered',
    createdAt: new Date('2024-01-14T14:20:00'),
    shippingAddress: '456 Oak Ave, Manchester, UK'
  },
  {
    id: '3',
    orderNumber: 'ORD-2024-012',
    customerName: 'Michael Chen',
    customerEmail: 'michael.chen@email.com',
    products: [
      {
        product: mockProducts[1],
        quantity: 1,
        price: 89.99
      }
    ],
    total: 89.99,
    status: 'shipped',
    createdAt: new Date('2024-01-14T15:30:00'),
    shippingAddress: '123 Tech Street, London, E1 6AN, UK'
  },
  {
    id: '4',
    orderNumber: 'ORD-2024-008',
    customerName: 'James Thompson',
    customerEmail: 'james.thompson@email.com',
    products: [
      {
        product: mockProducts[5],
        quantity: 1,
        price: 599.99
      }
    ],
    total: 599.99,
    status: 'delivered',
    createdAt: new Date('2024-01-12T16:45:00'),
    shippingAddress: '789 Monitor Lane, Manchester, M1 1AA, UK'
  },
  {
    id: '5',
    orderNumber: 'ORD-2024-005',
    customerName: 'Lisa Rodriguez',
    customerEmail: 'lisa.rodriguez@email.com',
    products: [
      {
        product: mockProducts[4],
        quantity: 1,
        price: 159.99
      }
    ],
    total: 159.99,
    status: 'cancelled',
    createdAt: new Date('2024-01-11T10:15:00'),
    shippingAddress: '456 Quiet Office, Bristol, BS1 2AB, UK'
  }
];

export const mockAnalyticsData: AnalyticsData = {
  revenue: {
    daily: [
      { date: '2024-01-10', amount: 12450 },
      { date: '2024-01-11', amount: 15230 },
      { date: '2024-01-12', amount: 18900 },
      { date: '2024-01-13', amount: 14560 },
      { date: '2024-01-14', amount: 22100 },
      { date: '2024-01-15', amount: 19800 },
      { date: '2024-01-16', amount: 16750 }
    ],
    monthly: [
      { month: 'Sep', amount: 285000 },
      { month: 'Oct', amount: 320000 },
      { month: 'Nov', amount: 410000 },
      { month: 'Dec', amount: 520000 },
      { month: 'Jan', amount: 380000 }
    ]
  },
  orders: {
    total: 1247,
    pending: 23,
    completed: 1180,
    cancelled: 44
  },
  customers: {
    total: 8934,
    new: 234,
    returning: 1013
  },
  topProducts: [
    {
      product: mockProducts[0],
      sales: 156,
      revenue: 46794
    },
    {
      product: mockProducts[5],
      sales: 89,
      revenue: 53399
    },
    {
      product: mockProducts[2],
      sales: 67,
      revenue: 30149
    },
    {
      product: mockProducts[1],
      sales: 134,
      revenue: 12059
    }
  ]
};

// New mock data for additional features
export const mockVisitorAnalytics: VisitorAnalytics = {
  uniqueVisitors: {
    daily: [
      { date: '2024-01-10', visitors: 2847, uniqueIPs: 2654 },
      { date: '2024-01-11', visitors: 3156, uniqueIPs: 2943 },
      { date: '2024-01-12', visitors: 2934, uniqueIPs: 2721 },
      { date: '2024-01-13', visitors: 3421, uniqueIPs: 3187 },
      { date: '2024-01-14', visitors: 3789, uniqueIPs: 3542 },
      { date: '2024-01-15', visitors: 4123, uniqueIPs: 3876 },
      { date: '2024-01-16', visitors: 3654, uniqueIPs: 3421 }
    ],
    hourly: [
      { hour: '00:00', visitors: 145 },
      { hour: '01:00', visitors: 98 },
      { hour: '02:00', visitors: 76 },
      { hour: '03:00', visitors: 54 },
      { hour: '04:00', visitors: 43 },
      { hour: '05:00', visitors: 67 },
      { hour: '06:00', visitors: 123 },
      { hour: '07:00', visitors: 189 },
      { hour: '08:00', visitors: 267 },
      { hour: '09:00', visitors: 345 },
      { hour: '10:00', visitors: 423 },
      { hour: '11:00', visitors: 456 },
      { hour: '12:00', visitors: 512 },
      { hour: '13:00', visitors: 489 },
      { hour: '14:00', visitors: 534 },
      { hour: '15:00', visitors: 567 },
      { hour: '16:00', visitors: 543 },
      { hour: '17:00', visitors: 456 },
      { hour: '18:00', visitors: 398 },
      { hour: '19:00', visitors: 334 },
      { hour: '20:00', visitors: 289 },
      { hour: '21:00', visitors: 234 },
      { hour: '22:00', visitors: 198 },
      { hour: '23:00', visitors: 167 }
    ]
  },
  topPages: [
    { page: '/products', views: 15432, uniqueVisitors: 12876, avgTimeOnPage: 245 },
    { page: '/products/premium-wireless-headphones', views: 8934, uniqueVisitors: 7654, avgTimeOnPage: 312 },
    { page: '/', views: 12456, uniqueVisitors: 11234, avgTimeOnPage: 156 },
    { page: '/products/ultra-hd-monitor-27', views: 6789, uniqueVisitors: 5432, avgTimeOnPage: 287 },
    { page: '/cart', views: 4567, uniqueVisitors: 3456, avgTimeOnPage: 198 },
    { page: '/checkout', views: 2345, uniqueVisitors: 2123, avgTimeOnPage: 423 },
    { page: '/products/ergonomic-office-chair', views: 3456, uniqueVisitors: 2987, avgTimeOnPage: 267 }
  ],
  geographicData: [
    { country: 'United Kingdom', visitors: 12456, percentage: 45.2 },
    { country: 'United States', visitors: 6789, percentage: 24.6 },
    { country: 'Germany', visitors: 2345, percentage: 8.5 },
    { country: 'France', visitors: 1876, percentage: 6.8 },
    { country: 'Canada', visitors: 1234, percentage: 4.5 },
    { country: 'Australia', visitors: 987, percentage: 3.6 },
    { country: 'Netherlands', visitors: 654, percentage: 2.4 },
    { country: 'Others', visitors: 1234, percentage: 4.4 }
  ],
  deviceTypes: [
    { device: 'Desktop', visitors: 14567, percentage: 52.8 },
    { device: 'Mobile', visitors: 9876, percentage: 35.8 },
    { device: 'Tablet', visitors: 3145, percentage: 11.4 }
  ],
  totalUniqueIPs: 23456,
  totalPageViews: 67890,
  bounceRate: 34.5,
  avgSessionDuration: 267
};

export const mockProductInsights: ProductInsights = {
  productViews: [
    {
      product: mockProducts[0], // Premium Wireless Headphones
      views: 8934,
      clicks: 2456,
      conversionRate: 12.4,
      addToCartRate: 18.7,
      wishlistAdds: 567
    },
    {
      product: mockProducts[5], // Ultra HD Monitor 27"
      views: 6789,
      clicks: 1876,
      conversionRate: 15.2,
      addToCartRate: 22.3,
      wishlistAdds: 432
    },
    {
      product: mockProducts[2], // Ergonomic Office Chair
      views: 5432,
      clicks: 1543,
      conversionRate: 9.8,
      addToCartRate: 16.4,
      wishlistAdds: 298
    },
    {
      product: mockProducts[1], // Smart Laptop Stand
      views: 4321,
      clicks: 1234,
      conversionRate: 18.6,
      addToCartRate: 25.1,
      wishlistAdds: 234
    },
    {
      product: mockProducts[4], // Mechanical Gaming Keyboard
      views: 3456,
      clicks: 987,
      conversionRate: 8.2,
      addToCartRate: 14.5,
      wishlistAdds: 189
    },
    {
      product: mockProducts[3], // Desk Organizer Set
      views: 2876,
      clicks: 876,
      conversionRate: 21.3,
      addToCartRate: 28.7,
      wishlistAdds: 145
    }
  ],
  searchTerms: [
    { term: 'wireless headphones', searches: 2456, resultsClicked: 1876 },
    { term: '4k monitor', searches: 1876, resultsClicked: 1432 },
    { term: 'office chair', searches: 1543, resultsClicked: 1234 },
    { term: 'laptop stand', searches: 1234, resultsClicked: 987 },
    { term: 'gaming keyboard', searches: 987, resultsClicked: 765 },
    { term: 'desk organizer', searches: 765, resultsClicked: 654 },
    { term: 'ergonomic', searches: 654, resultsClicked: 543 },
    { term: 'bluetooth', searches: 543, resultsClicked: 432 }
  ],
  categoryPerformance: [
    { category: 'Electronics', views: 23456, sales: 2876, conversionRate: 12.3 },
    { category: 'Furniture', views: 8765, sales: 987, conversionRate: 11.2 },
    { category: 'Accessories', views: 6543, sales: 1234, conversionRate: 18.9 },
    { category: 'Office Supplies', views: 4321, sales: 876, conversionRate: 20.3 }
  ],
  abandonedCarts: [
    { product: mockProducts[0], abandonedCount: 234, recoveryRate: 23.5 },
    { product: mockProducts[5], abandonedCount: 187, recoveryRate: 18.7 },
    { product: mockProducts[2], abandonedCount: 156, recoveryRate: 15.4 },
    { product: mockProducts[1], abandonedCount: 98, recoveryRate: 32.1 },
    { product: mockProducts[4], abandonedCount: 76, recoveryRate: 12.8 }
  ]
};

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@company.com',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    status: 'online',
    lastSeen: new Date()
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    role: 'Marketing Director',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    status: 'online',
    lastSeen: new Date()
  },
  {
    id: '3',
    name: 'Mike Rodriguez',
    email: 'mike.rodriguez@company.com',
    role: 'Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    status: 'away',
    lastSeen: new Date(Date.now() - 15 * 60 * 1000) // 15 minutes ago
  },
  {
    id: '4',
    name: 'Emma Wilson',
    email: 'emma.wilson@company.com',
    role: 'Customer Support Lead',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    status: 'online',
    lastSeen: new Date()
  },
  {
    id: '5',
    name: 'David Kim',
    email: 'david.kim@company.com',
    role: 'Analytics Specialist',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
    status: 'offline',
    lastSeen: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
  }
];

export const mockTeamChat: TeamChatChannel[] = [
  {
    id: '1',
    name: 'general',
    description: 'General team discussions',
    type: 'general',
    isPrivate: false,
    createdAt: new Date('2024-01-01'),
    lastActivity: new Date(),
    unreadCount: 3,
    members: mockTeamMembers,
    messages: [
      {
        id: '1',
        content: 'Good morning team! Ready for another productive day?',
        author: mockTeamMembers[0],
        timestamp: new Date('2024-03-15T09:00:00'),
        mentions: [mockTeamMembers[0].id],
        reactions: [{ emoji: '👋', count: 3, users: [mockTeamMembers[1].id, mockTeamMembers[2].id, mockTeamMembers[3].id] }]
      },
      {
        id: '2',
        content: '@sarah.johnson Can you check the latest analytics report? The conversion rates look promising.',
        author: mockTeamMembers[1],
        timestamp: new Date('2024-03-15T09:15:00'),
        mentions: [mockTeamMembers[0].id],
        reactions: [{ emoji: '📊', count: 2, users: [mockTeamMembers[0].id, mockTeamMembers[4].id] }]
      }
    ]
  },
  {
    id: '2',
    name: 'support',
    description: 'Customer support coordination',
    type: 'support',
    isPrivate: false,
    createdAt: new Date('2024-01-01'),
    lastActivity: new Date(),
    unreadCount: 1,
    members: mockTeamMembers.slice(0, 3),
    messages: [
      {
        id: '1',
        content: 'New high-priority ticket from Emma Williams - missing item issue',
        author: mockTeamMembers[1],
        timestamp: new Date('2024-03-15T11:30:00'),
        mentions: [mockTeamMembers[0].id],
        reactions: []
      }
    ]
  }
];

export const mockReportTemplates: ReportTemplate[] = [
  {
    id: '1',
    name: 'Daily Sales Summary',
    type: 'sales',
    description: 'Comprehensive daily sales report with revenue, orders, and top products',
    isBuiltIn: true,
    createdAt: new Date('2024-01-01'),
    defaultParameters: {
      dateRange: {
        start: new Date(),
        end: new Date(),
        preset: 'today'
      },
      metrics: ['revenue', 'orders', 'conversion_rate', 'avg_order_value'],
      format: 'pdf',
      includeCharts: true,
      includeSummary: true
    }
  },
  {
    id: '2',
    name: 'Weekly Analytics Report',
    type: 'analytics',
    description: 'Weekly performance analytics including visitor data and engagement metrics',
    isBuiltIn: true,
    createdAt: new Date('2024-01-01'),
    defaultParameters: {
      dateRange: {
        start: new Date(),
        end: new Date(),
        preset: 'last7days'
      },
      metrics: ['page_views', 'unique_visitors', 'bounce_rate', 'session_duration'],
      format: 'excel',
      includeCharts: true,
      includeSummary: true
    }
  },
  {
    id: '3',
    name: 'Inventory Status Report',
    type: 'inventory',
    description: 'Current inventory levels, low stock alerts, and reorder recommendations',
    isBuiltIn: true,
    createdAt: new Date('2024-01-01'),
    defaultParameters: {
      dateRange: {
        start: new Date(),
        end: new Date(),
        preset: 'today'
      },
      metrics: ['stock_levels', 'low_stock_items', 'out_of_stock', 'reorder_points'],
      format: 'excel',
      includeCharts: false,
      includeSummary: true
    }
  },
  {
    id: '4',
    name: 'Customer Insights Report',
    type: 'customer',
    description: 'Customer behavior analysis, segmentation, and lifetime value metrics',
    isBuiltIn: true,
    createdAt: new Date('2024-01-01'),
    defaultParameters: {
      dateRange: {
        start: new Date(),
        end: new Date(),
        preset: 'last30days'
      },
      metrics: ['customer_acquisition', 'retention_rate', 'lifetime_value', 'segment_analysis'],
      format: 'pdf',
      includeCharts: true,
      includeSummary: true
    }
  },
  {
    id: '5',
    name: 'Financial Performance Report',
    type: 'financial',
    description: 'Comprehensive financial analysis including profit margins and cost analysis',
    isBuiltIn: true,
    createdAt: new Date('2024-01-01'),
    defaultParameters: {
      dateRange: {
        start: new Date(),
        end: new Date(),
        preset: 'thisMonth'
      },
      metrics: ['gross_revenue', 'net_profit', 'profit_margins', 'cost_analysis', 'tax_summary'],
      format: 'excel',
      includeCharts: true,
      includeSummary: true
    }
  },
  {
    id: '6',
    name: 'Product Performance Analysis',
    type: 'custom',
    description: 'Custom report analyzing product performance with detailed metrics',
    isBuiltIn: false,
    createdBy: 'Alex Johnson',
    createdAt: new Date('2024-01-15'),
    defaultParameters: {
      dateRange: {
        start: new Date(),
        end: new Date(),
        preset: 'last30days'
      },
      metrics: ['product_views', 'conversion_rates', 'revenue_per_product', 'cart_abandonment'],
      format: 'pdf',
      includeCharts: true,
      includeSummary: true
    }
  }
];

export const mockReports: Report[] = [
  {
    id: '1',
    name: 'Daily Sales Summary - Jan 16, 2024',
    type: 'sales',
    description: 'Daily sales report for January 16, 2024',
    createdAt: new Date('2024-01-16T09:00:00'),
    createdBy: 'Sarah Chen',
    lastGenerated: new Date('2024-01-16T09:15:00'),
    status: 'completed',
    fileUrl: '/reports/daily-sales-2024-01-16.pdf',
    fileSize: 2.4,
    parameters: {
      dateRange: {
        start: new Date('2024-01-16'),
        end: new Date('2024-01-16'),
        preset: 'today'
      },
      filters: {},
      metrics: ['revenue', 'orders', 'conversion_rate', 'avg_order_value'],
      format: 'pdf',
      includeCharts: true,
      includeSummary: true
    },
    schedule: {
      frequency: 'daily',
      time: '09:00',
      recipients: ['sarah.chen@company.com', 'alex.johnson@company.com'],
      isActive: true
    }
  },
  {
    id: '2',
    name: 'Weekly Analytics Report - Week 2',
    type: 'analytics',
    description: 'Weekly analytics report for week ending January 14, 2024',
    createdAt: new Date('2024-01-15T08:00:00'),
    createdBy: 'David Kim',
    lastGenerated: new Date('2024-01-15T08:30:00'),
    status: 'completed',
    fileUrl: '/reports/weekly-analytics-week2-2024.xlsx',
    fileSize: 5.7,
    parameters: {
      dateRange: {
        start: new Date('2024-01-08'),
        end: new Date('2024-01-14'),
        preset: 'last7days'
      },
      filters: {},
      metrics: ['page_views', 'unique_visitors', 'bounce_rate', 'session_duration'],
      format: 'excel',
      includeCharts: true,
      includeSummary: true
    },
    schedule: {
      frequency: 'weekly',
      dayOfWeek: 1, // Monday
      time: '08:00',
      recipients: ['david.kim@company.com', 'sarah.chen@company.com'],
      isActive: true
    }
  },
  {
    id: '3',
    name: 'Inventory Status Report - Current',
    type: 'inventory',
    description: 'Current inventory status and low stock alerts',
    createdAt: new Date('2024-01-16T07:00:00'),
    createdBy: 'Emma Wilson',
    lastGenerated: new Date('2024-01-16T07:15:00'),
    status: 'completed',
    fileUrl: '/reports/inventory-status-2024-01-16.xlsx',
    fileSize: 1.8,
    parameters: {
      dateRange: {
        start: new Date('2024-01-16'),
        end: new Date('2024-01-16'),
        preset: 'today'
      },
      filters: {
        categories: ['Electronics', 'Furniture']
      },
      metrics: ['stock_levels', 'low_stock_items', 'out_of_stock', 'reorder_points'],
      format: 'excel',
      includeCharts: false,
      includeSummary: true
    }
  },
  {
    id: '4',
    name: 'Customer Insights - December 2023',
    type: 'customer',
    description: 'Monthly customer behavior analysis for December 2023',
    createdAt: new Date('2024-01-01T10:00:00'),
    createdBy: 'Alex Johnson',
    lastGenerated: new Date('2024-01-01T10:45:00'),
    status: 'completed',
    fileUrl: '/reports/customer-insights-dec-2023.pdf',
    fileSize: 8.2,
    parameters: {
      dateRange: {
        start: new Date('2023-12-01'),
        end: new Date('2023-12-31'),
        preset: 'lastMonth'
      },
      filters: {},
      metrics: ['customer_acquisition', 'retention_rate', 'lifetime_value', 'segment_analysis'],
      format: 'pdf',
      includeCharts: true,
      includeSummary: true
    }
  },
  {
    id: '5',
    name: 'Financial Performance - Q4 2023',
    type: 'financial',
    description: 'Quarterly financial performance report for Q4 2023',
    createdAt: new Date('2024-01-05T14:00:00'),
    createdBy: 'Sarah Chen',
    status: 'scheduled',
    parameters: {
      dateRange: {
        start: new Date('2023-10-01'),
        end: new Date('2023-12-31'),
        preset: 'custom'
      },
      filters: {},
      metrics: ['gross_revenue', 'net_profit', 'profit_margins', 'cost_analysis', 'tax_summary'],
      format: 'excel',
      includeCharts: true,
      includeSummary: true
    },
    schedule: {
      frequency: 'quarterly',
      time: '14:00',
      recipients: ['sarah.chen@company.com', 'alex.johnson@company.com', 'finance@company.com'],
      isActive: true
    }
  },
  {
    id: '6',
    name: 'Product Performance Analysis - Failed',
    type: 'custom',
    description: 'Custom product performance analysis',
    createdAt: new Date('2024-01-15T16:00:00'),
    createdBy: 'Mike Rodriguez',
    status: 'failed',
    parameters: {
      dateRange: {
        start: new Date('2024-01-01'),
        end: new Date('2024-01-15'),
        preset: 'custom'
      },
      filters: {
        products: ['PWH-001', 'SLT-003', 'EOC-002']
      },
      metrics: ['product_views', 'conversion_rates', 'revenue_per_product', 'cart_abandonment'],
      format: 'pdf',
      includeCharts: true,
      includeSummary: true
    }
  }
];

// AI-Powered Features Mock Data
export const mockSentimentAnalysis: SentimentAnalysis[] = [
  {
    chatId: '1',
    customerName: 'Sarah Johnson',
    overallSentiment: 'positive',
    sentimentScore: 0.7,
    emotions: {
      joy: 0.6,
      anger: 0.1,
      fear: 0.05,
      sadness: 0.05,
      surprise: 0.2
    },
    keyTopics: ['order tracking', 'address change', 'customer service'],
    urgencyLevel: 'medium',
    aiSummary: 'Customer is satisfied with service but needs urgent address change for order #ORD-2024-001. Positive sentiment maintained throughout interaction.',
    recommendedActions: [
      'Process address change immediately',
      'Confirm new delivery details',
      'Send tracking update'
    ]
  },
  {
    chatId: '2',
    customerName: 'Michael Chen',
    overallSentiment: 'neutral',
    sentimentScore: 0.2,
    emotions: {
      joy: 0.2,
      anger: 0.1,
      fear: 0.3,
      sadness: 0.1,
      surprise: 0.3
    },
    keyTopics: ['product compatibility', 'technical support', 'order inquiry'],
    urgencyLevel: 'low',
    aiSummary: 'Technical inquiry about product compatibility. Customer is methodical and detail-oriented. No urgency detected.',
    recommendedActions: [
      'Provide detailed technical documentation',
      'Offer compatibility guide',
      'Schedule follow-up if needed'
    ]
  },
  {
    chatId: '3',
    customerName: 'Emma Williams',
    overallSentiment: 'negative',
    sentimentScore: -0.4,
    emotions: {
      joy: 0.1,
      anger: 0.5,
      fear: 0.2,
      sadness: 0.2,
      surprise: 0.0
    },
    keyTopics: ['missing item', 'order fulfillment', 'compensation'],
    urgencyLevel: 'high',
    aiSummary: 'Customer frustrated with missing item from order. Anger levels high initially but decreased after resolution offered.',
    recommendedActions: [
      'Issue immediate replacement',
      'Provide compensation',
      'Escalate to senior support',
      'Send personalized apology'
    ]
  }
];

export const mockPredictiveAnalytics: PredictiveAnalytic[] = [
  {
    id: '1',
    type: 'sales_forecast',
    title: 'Q2 Revenue Forecast',
    prediction: '£847,000 expected revenue with 15% growth',
    confidence: 87,
    timeframe: 'Next 3 months',
    impact: 'high',
    data: {
      currentRevenue: 736000,
      projectedRevenue: 847000,
      growthRate: 15.1,
      factors: ['seasonal trends', 'new product launches', 'marketing campaigns']
    },
    createdAt: new Date('2024-03-15T10:00:00')
  },
  {
    id: '2',
    type: 'inventory_alert',
    title: 'Stock Depletion Warning',
    prediction: 'Professional Audio Mixer will be out of stock in 8 days',
    confidence: 94,
    timeframe: '8 days',
    impact: 'medium',
    data: {
      productSku: 'AUDIO-MIX-2024',
      currentStock: 12,
      dailyAverage: 1.5,
      daysRemaining: 8
    },
    createdAt: new Date('2024-03-15T11:00:00')
  },
  {
    id: '3',
    type: 'customer_churn',
    title: 'High-Value Customer Risk',
    prediction: '23% chance of losing customer segment in next 30 days',
    confidence: 76,
    timeframe: '30 days',
    impact: 'high',
    data: {
      riskCustomers: 47,
      potentialRevenueLoss: 125000,
      riskFactors: ['decreased engagement', 'support tickets', 'competitor activity']
    },
    createdAt: new Date('2024-03-15T12:00:00')
  },
  {
    id: '4',
    type: 'price_optimization',
    title: 'Dynamic Pricing Opportunity',
    prediction: '12% revenue increase with strategic price adjustments',
    confidence: 82,
    timeframe: 'Immediate',
    impact: 'medium',
    data: {
      affectedProducts: 8,
      revenueIncrease: 87400,
      averagePriceChange: 3.5
    },
    createdAt: new Date('2024-03-15T13:00:00')
  }
];

export const mockAutomatedInsights: AutomatedInsight[] = [
  {
    id: '1',
    category: 'opportunity',
    title: 'Cross-Selling Opportunity Detected',
    description: 'AI analysis shows strong correlation between camera and tripod purchases',
    insight: 'Customers who buy Professional DSLR Camera have a 67% likelihood of purchasing a tripod within 30 days',
    recommendation: 'Create a bundle offer or display tripods prominently on camera product pages',
    confidence: 89,
    priority: 'high',
    potentialImpact: '£43,000 additional monthly revenue',
    dataSource: 'Purchase behavior analysis',
    createdAt: new Date('2024-03-15T09:30:00')
  },
  {
    id: '2',
    category: 'performance',
    title: 'Peak Traffic Pattern Identified',
    description: 'Website traffic peaks consistently on Tuesday afternoons',
    insight: 'Traffic increases by 34% on Tuesdays between 2-4 PM, with highest conversion rates',
    recommendation: 'Schedule promotional campaigns and product launches for Tuesday afternoons',
    confidence: 92,
    priority: 'medium',
    potentialImpact: '18% increase in campaign effectiveness',
    dataSource: 'Web analytics and conversion data',
    createdAt: new Date('2024-03-15T10:15:00')
  },
  {
    id: '3',
    category: 'risk',
    title: 'Customer Service Bottleneck Alert',
    description: 'Response time degradation in support chat',
    insight: 'Average response time increased by 45% over the past week, correlating with customer satisfaction drop',
    recommendation: 'Increase support staff during peak hours or implement AI-powered first response',
    confidence: 78,
    priority: 'high',
    potentialImpact: 'Prevent 15% customer satisfaction decline',
    dataSource: 'Support metrics and sentiment analysis',
    createdAt: new Date('2024-03-15T11:45:00')
  },
  {
    id: '4',
    category: 'trend',
    title: 'Emerging Product Category Trend',
    description: 'Growing interest in wireless audio accessories',
    insight: 'Search volume for wireless accessories increased 127% in the past month',
    recommendation: 'Expand wireless product inventory and create dedicated category landing page',
    confidence: 85,
    priority: 'medium',
    potentialImpact: 'Capture growing market segment worth £78,000',
    dataSource: 'Search analytics and market research',
    createdAt: new Date('2024-03-15T14:20:00')
  }
];

export const mockProductRecommendations: ProductRecommendation[] = [
  {
    id: '1',
    type: 'cross_sell',
    primaryProduct: mockProducts[0], // Professional DSLR Camera
    recommendedProducts: [mockProducts[1], mockProducts[2]], // Wireless Audio System, Smart Home Hub
    reason: 'Customers who purchase professional cameras often need audio equipment for video production',
    confidence: 84,
    expectedRevenue: 1250,
    customerSegment: 'Professional Content Creators'
  },
  {
    id: '2',
    type: 'upsell',
    primaryProduct: mockProducts[3], // Gaming Laptop Pro
    recommendedProducts: [mockProducts[0]], // Professional DSLR Camera
    reason: 'Gaming laptop users show high interest in content creation tools and streaming equipment',
    confidence: 76,
    expectedRevenue: 2100,
    customerSegment: 'Gaming Enthusiasts'
  },
  {
    id: '3',
    type: 'bundle',
    primaryProduct: mockProducts[2], // Smart Home Hub
    recommendedProducts: [mockProducts[4], mockProducts[5]], // Fitness Tracker Pro, Tablet Air
    reason: 'Smart home enthusiasts prefer integrated ecosystem solutions',
    confidence: 91,
    expectedRevenue: 890,
    customerSegment: 'Tech-Savvy Homeowners'
  }
];

// AI Control Center Mock Data
export const mockChatbotConfiguration: ChatbotConfiguration = {
  id: '1',
  name: 'Premium Support Assistant',
  isActive: true,
  welcomeMessage: 'Welcome to our premium product line! I\'m here to help you find the perfect high-end solution for your needs. How can I assist you today?',
  fallbackMessage: 'I\'m not sure I understand that request. Let me connect you with a human specialist who can better assist you with our premium products.',
  responseDelay: 1500,
  personality: 'professional',
  autoGreeting: true,
  proactiveMessages: true,
  workingHours: {
    enabled: true,
    start: '09:00',
    end: '18:00',
    timezone: 'Europe/London',
    offHoursMessage: 'Thank you for your interest in our premium products. Our support team is currently offline. We\'ll respond to your message within 2 hours during business hours (9 AM - 6 PM GMT).'
  },
  triggers: [
    {
      id: '1',
      name: 'High-Value Product Interest',
      isActive: true,
      type: 'time_on_page',
      conditions: {
        value: 60,
        operator: 'greater_than',
        pages: ['/products/premium-wireless-headphones', '/products/ultra-hd-monitor-27']
      },
      action: {
        type: 'offer_help',
        message: 'I see you\'re interested in our premium products! Would you like a personalized consultation or have any questions about specifications?',
        delay: 2000
      },
      priority: 1
    },
    {
      id: '2',
      name: 'Cart Abandonment Prevention',
      isActive: true,
      type: 'cart_abandonment',
      conditions: {
        value: 30,
        operator: 'greater_than'
      },
      action: {
        type: 'show_discount',
        message: 'Still thinking about your purchase? I can offer you an exclusive 5% discount on your premium items if you complete your order today!',
        delay: 1000
      },
      priority: 2
    }
  ],
  automatedResponses: [
    {
      id: '1',
      name: 'Order Status Inquiry',
      isActive: true,
      keywords: ['order status', 'where is my order', 'tracking', 'shipped'],
      intent: 'order_status',
      response: 'I\'d be happy to help you track your order! Could you please provide your order number (it starts with #ORD-) so I can give you the most up-to-date information?',
      confidence: 95,
      followUpActions: ['extract_order_number', 'provide_tracking_info'],
      escalateToHuman: false
    },
    {
      id: '2',
      name: 'Premium Product Information',
      isActive: true,
      keywords: ['specs', 'specifications', 'features', 'details', 'premium'],
      intent: 'product_info',
      response: 'Our premium products are designed for professionals and enthusiasts who demand the highest quality. Which specific product would you like detailed information about?',
      confidence: 88,
      followUpActions: ['show_product_details', 'offer_comparison'],
      escalateToHuman: false
    }
  ]
};

export const mockAIWorkflows: AIWorkflow[] = [
  {
    id: '1',
    name: 'Premium Customer Onboarding',
    description: 'Automated workflow for high-value customers making their first purchase',
    isActive: true,
    type: 'customer_onboarding',
    triggers: ['first_purchase_over_500'],
    actions: [
      {
        id: '1',
        type: 'send_email',
        parameters: {
          template: 'premium_welcome',
          subject: 'Welcome to Our Premium Collection',
          personalizeProducts: true
        },
        delay: 3600000, // 1 hour
        conditions: { orderValue: { min: 500 } }
      },
      {
        id: '2',
        type: 'create_ticket',
        parameters: {
          priority: 'high',
          category: 'premium_customer',
          assignTo: 'premium_support_team'
        },
        delay: 86400000, // 24 hours
        conditions: { followUpNeeded: true }
      }
    ],
    schedule: {
      frequency: 'immediate'
    }
  },
  {
    id: '2',
    name: 'Abandoned Cart Recovery',
    description: 'Multi-step workflow to recover abandoned high-value carts',
    isActive: true,
    type: 'abandoned_cart',
    triggers: ['cart_abandoned_30_minutes'],
    actions: [
      {
        id: '1',
        type: 'send_notification',
        parameters: {
          type: 'push',
          message: 'Your premium items are waiting! Complete your purchase with free shipping.',
          includeDiscount: false
        },
        delay: 1800000, // 30 minutes
        conditions: { cartValue: { min: 200 } }
      },
      {
        id: '2',
        type: 'send_email',
        parameters: {
          template: 'cart_recovery_discount',
          discountPercent: 5,
          expiryHours: 24
        },
        delay: 86400000, // 24 hours
        conditions: { cartValue: { min: 500 } }
      }
    ]
  }
];

export const mockAIAnalyticsConfigs: AIAnalyticsConfig[] = [
  {
    id: '1',
    name: 'Customer Sentiment Monitoring',
    isActive: true,
    type: 'sentiment_monitoring',
    frequency: 'real_time',
    thresholds: {
      negativeSentimentAlert: -0.3,
      urgencyLevelCritical: 0.8,
      volumeAlert: 50
    },
    notifications: {
      email: true,
      dashboard: true,
      slack: true
    },
    recipients: ['support@company.com', 'manager@company.com']
  },
  {
    id: '2',
    name: 'High-Value Customer Churn Prediction',
    isActive: true,
    type: 'churn_prediction',
    frequency: 'daily',
    thresholds: {
      churnProbability: 0.7,
      customerValue: 1000,
      daysSinceLastPurchase: 90
    },
    notifications: {
      email: true,
      dashboard: true,
      slack: false
    },
    recipients: ['sales@company.com', 'retention@company.com']
  },
  {
    id: '3',
    name: 'Premium Product Sales Forecasting',
    isActive: true,
    type: 'sales_forecasting',
    frequency: 'weekly',
    thresholds: {
      forecastAccuracy: 0.85,
      revenueVariance: 0.15,
      stockoutRisk: 0.2
    },
    notifications: {
      email: true,
      dashboard: true,
      slack: true
    },
    recipients: ['inventory@company.com', 'finance@company.com']
  }
]; 