const express = require('express');
const cors = require('cors');
const path = require('path');
const chatbotHandler = require('./api/chatbot.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.post('/api/chat', (req, res) => {
  chatbotHandler(req, res);
});

app.get('/api/chat', (req, res) => {
  chatbotHandler(req, res);
});

app.options('/api/chat', (req, res) => {
  chatbotHandler(req, res);
});

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🤖 DecodeLabs Chatbot server is running on http://localhost:${PORT}`);
  console.log(`Open your browser and navigate to http://localhost:${PORT}`);
});
