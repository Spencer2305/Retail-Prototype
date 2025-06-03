# Ecommerce Dashboard

A professional, enterprise-grade ecommerce dashboard built with React, TypeScript, and Tailwind CSS. This dashboard is designed for high-value products and provides comprehensive management capabilities for chat support, analytics, products, and orders.

## Features

### 🤖 Chat Bot Management
- **Real-time conversation tracking** with customers
- **Intelligent order and product extraction** from chat messages
- **Advanced search and filtering** across conversations
- **Status management** (active, resolved, pending)
- **Order number and SKU detection** in messages
- **Professional chat interface** with timestamps and user identification

### 📊 Analytics Dashboard
- **Revenue tracking** with daily and monthly trends
- **Interactive charts** using Recharts library
- **Key performance indicators** with trend analysis
- **Order status distribution** with pie charts
- **Top-selling products** analysis
- **Customer insights** and retention metrics
- **Real-time data visualization**

### 📦 Product Management
- **Comprehensive product catalog** with images
- **Advanced filtering** by status, category, and search terms
- **Stock level monitoring** with low stock alerts
- **Product detail modals** with full information
- **Status indicators** (active, inactive, out of stock)
- **Category-based organization**
- **Professional product cards** with actions

### 🛒 Order Management
- **Complete order tracking** system
- **Customer information** management
- **Order status workflow** (pending → processing → shipped → delivered)
- **Detailed order views** with product breakdowns
- **Search and filter** capabilities
- **Order summary statistics**
- **Professional table interface**

## Technology Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Professional charting library
- **Lucide React** - Beautiful icon library
- **Responsive Design** - Mobile-first approach

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/          # React components
│   ├── ChatBot.tsx     # Chat management interface
│   ├── Analytics.tsx   # Analytics dashboard
│   ├── Products.tsx    # Product management
│   └── Orders.tsx      # Order management
├── data/               # Mock data and types
│   └── mockData.ts     # Sample data for demonstration
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Key Features for High-Value Products

### Professional Design
- **Clean, modern interface** suitable for enterprise use
- **Consistent branding** with customizable color scheme
- **Professional typography** and spacing
- **Responsive layout** for all device sizes

### Advanced Chat Bot
- **Order number extraction** from customer messages
- **Product SKU identification** in conversations
- **Intelligent conversation categorization**
- **Professional support interface**

### Comprehensive Analytics
- **Revenue tracking** with multiple time periods
- **Performance metrics** with trend indicators
- **Customer behavior analysis**
- **Product performance insights**

### Robust Product Management
- **Multi-category support**
- **Stock level monitoring**
- **Status management**
- **Professional product presentation**

### Complete Order Workflow
- **Full order lifecycle** management
- **Customer information** tracking
- **Product breakdown** in orders
- **Status progression** tracking

## Customization

### Colors and Branding
The dashboard uses a customizable color scheme defined in `tailwind.config.js`. You can easily modify:
- Primary colors
- Brand colors
- Status indicators
- Chart colors

### Data Integration
Replace the mock data in `src/data/mockData.ts` with real API calls to your backend services.

### Additional Features
The modular architecture makes it easy to add new features:
- Customer management
- Inventory tracking
- Reporting modules
- Integration with external services

## Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the build folder** to your hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is designed for professional ecommerce use and is suitable for high-value product management.

## Support

For technical support or customization requests, please contact the development team.

---

**Built for professional ecommerce management with enterprise-grade features and design.** 