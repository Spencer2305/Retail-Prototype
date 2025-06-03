# Premium Product Dashboard

A comprehensive ecommerce dashboard designed for £50,000+ product lines with advanced AI-powered features.

## 🌟 Features

- **AI Control Center** - Advanced chatbot configuration and AI workflow management
- **AI Insights** - Sentiment analysis, predictive analytics, and automated insights
- **Chat Bot** - Customer conversation management with order/product extraction
- **Analytics** - Revenue tracking with interactive charts and KPIs
- **Visitor Analytics** - Unique IP tracking and geographic distribution
- **Product Insights** - Click tracking, conversion rates, and search analytics
- **Products** - Comprehensive product catalog with filtering
- **Orders** - Complete order management system
- **Reports** - Advanced reporting with templates and scheduling
- **Team Chat** - In-team communication with @mentions

## 🚀 Live Demo

**Deployed URL:** [Will be available after Netlify deployment]

## 📱 Iframe Embedding

This dashboard is specifically configured to be iframe-friendly and can be embedded into **executasolutions.com**.

### Iframe HTML Code:
```html
<iframe 
  src="[NETLIFY_URL]" 
  width="100%" 
  height="800" 
  frameborder="0"
  style="border: none; overflow: hidden;"
  title="Premium Product Dashboard">
</iframe>
```

### Responsive Iframe (Recommended):
```html
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe 
    src="[NETLIFY_URL]"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    title="Premium Product Dashboard">
  </iframe>
</div>
```

### Auto-Resizing Iframe:
```html
<iframe 
  id="dashboard-iframe"
  src="[NETLIFY_URL]" 
  width="100%" 
  frameborder="0"
  style="border: none; overflow: hidden;"
  title="Premium Product Dashboard">
</iframe>

<script>
window.addEventListener('message', function(event) {
  if (event.data.type === 'iframe-resize') {
    const iframe = document.getElementById('dashboard-iframe');
    if (iframe) {
      iframe.style.height = event.data.height + 'px';
    }
  }
});
</script>
```

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
git clone https://github.com/Spencer2305/Retail-Prototype.git
cd Retail-Prototype
npm install
```

### Development
```bash
npm start
# Opens http://localhost:3000
```

### Build for Production
```bash
npm run build
# Creates optimized build in /build folder
```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)
1. Connect your GitHub repo to Netlify
2. Build settings are configured in `netlify.toml`
3. Auto-deploys on git push

### Option 2: Vercel
```bash
npm install -g vercel
vercel --prod
```

### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

## 🔧 Technology Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** Lucide React
- **Build:** Create React App

## 📊 Mock Data

The dashboard includes comprehensive mock data for:
- Customer conversations with extracted order numbers
- Sales analytics and revenue tracking
- Product catalog with inventory management
- Order management with status tracking
- Visitor analytics with geographic data
- AI insights and sentiment analysis

## 🔒 Security & Iframe Configuration

- Configured to allow embedding in **executasolutions.com**
- CSP headers set for secure iframe communication
- Auto-resizing iframe support with postMessage API
- Responsive design optimized for iframe display

## 📝 License

This project is private and proprietary to Executa Solutions.

## 🆘 Support

For deployment or integration support, contact: [Your Contact Information] 