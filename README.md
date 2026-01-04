# Log Triage Sandbox 🔍

An interactive web-based environment for experimenting with and analyzing application logs. Perfect for developers, DevOps engineers, and SREs who need to quickly triage, filter, and understand log data.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.x-61dafb.svg)
![Tailwind](https://img.shields.io/badge/tailwind-3.x-38bdf8.svg)

## ✨ Features

- 🔎 **Real-time Search** - Search across log messages, services, and trace IDs
- 🎯 **Smart Filtering** - Filter by log level (ERROR, WARN, INFO, DEBUG)
- 📅 **Date Range Selection** - Focus on specific time periods
- 📊 **Statistics Dashboard** - Visual analytics of log distribution
- 📤 **Import/Export** - Upload your own logs or export filtered results
- 🎨 **Beautiful UI** - Modern, dark-themed interface with smooth interactions
- ⚡ **Fast Performance** - Handles hundreds of logs with ease
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/log-triage-sandbox.git

# Navigate to project directory
cd log-triage-sandbox

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 📖 Usage Guide

### Basic Operations

**Searching Logs**
- Use the search bar to filter logs by any text content
- Search works across messages, services, and trace IDs
- Search is case-insensitive

**Filtering by Level**
- Click log level buttons (ERROR, WARN, INFO, DEBUG) to toggle visibility
- Multiple levels can be selected simultaneously
- Deselect all levels to see no logs

**Date Range Filtering**
- Use the date pickers to set start and end dates
- Leave blank to show all dates
- Combines with other filters

**Viewing Statistics**
- Click "View Stats" to see log distribution
- Charts show breakdown by level and service
- Top 5 services are displayed

**Importing Logs**
1. Click the "Upload" button
2. Select a `.log`, `.txt`, or `.jsonl` file
3. Supported formats:
   - JSONL (one JSON object per line)
   - Standard log format with timestamps

**Exporting Logs**
- Click "Export" to download filtered logs
- Downloads as `.jsonl` format
- Only exports currently filtered logs

### Log Detail View

Click any log entry to see detailed information:
- Full timestamp
- Complete message
- Metadata (host, PID, duration)
- Trace ID and User ID
- Service information

## 📁 Project Structure
```
log-triage-sandbox/
├── src/
│   ├── components/
│   │   └── LogTriageSandbox.jsx    # Main component
│   ├── utils/
│   │   ├── logParser.js            # Log parsing utilities
│   │   └── sampleLogs.js           # Sample data generator
│   ├── App.jsx
│   └── index.jsx
├── public/
├── docs/
│   ├── ARCHITECTURE.md
│   ├── API.md
│   └── CONTRIBUTING.md
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Log Format

The sandbox supports logs in the following JSON format:
```json
{
  "timestamp": "2026-01-04T10:30:45.123Z",
  "level": "ERROR",
  "service": "payment-service",
  "message": "Payment processing failed for transaction",
  "traceId": "trace-abc123",
  "userId": "user-456",
  "metadata": {
    "host": "server-1",
    "pid": 8432,
    "duration": 1250
  }
}
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file:
```env
REACT_APP_MAX_LOGS=10000
REACT_APP_DEFAULT_PAGE_SIZE=50
REACT_APP_ENABLE_ANALYTICS=true
```

### Customization

Modify `tailwind.config.js` to customize the theme:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6'
      }
    }
  }
}
```

## 🧪 Testing
```bash
# Run unit tests
npm test

# Run with coverage
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

## 📦 Building for Production
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI framework by [Tailwind CSS](https://tailwindcss.com/)
- Built with [React](https://reactjs.org/)

## 📧 Support

- 📫 Email: support@logtriage.dev
- 🐛 Issues: [GitHub Issues](https://github.com/mr-adonis-jimenez/log-triage-sandbox/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/mr-adonis-jimenez/log-triage-sandbox/discussions)

## 🗺️ Roadmap

- [ ] Advanced regex search
- [ ] Log correlation by trace ID
- [ ] Custom log format parsers
- [ ] Real-time log streaming
- [ ] Team collaboration features
- [ ] Integration with log aggregation services
- [ ] Machine learning anomaly detection

---

Made with ❤️ by the Log Triage community
