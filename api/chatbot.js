const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Knowledge Base
const responses = {
  "hello": "Hello! I am your rule-based AI assistant. How can I help you today?",
  "hi": "Hi there! Ready to explore some logic-based AI concepts?",
  "how are you": "I'm functioning within normal parameters, thank you for asking!",
  "what is ai": "Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems.",
  "who created you": "I was created as part of the DecodeLabs Industrial Training program.",
  "tell me a joke": "Why did the computer show up late to work? It had a hard drive!",
  "weather": "I don't have real-time sensors, but it's always sunny in the world of logic!",
  "help": "You can greet me, ask about AI, or just say 'bye' to exit. I'm here to demonstrate rule-based control flow."
};

// API endpoint for chatbot
app.post('/api/chat', (req, res) => {
  const userInput = req.body.message || '';
  const cleanInput = userInput.toLowerCase().trim();

  // Check for exit commands
  if (['exit', 'quit', 'bye'].includes(cleanInput)) {
    return res.json({ response: "Goodbye! Have a great day!" });
  }

  // Look up response
  const botResponse = responses[cleanInput] || "I am sorry, I don't have a rule for that yet. Can you try asking something else?";
  res.json({ response: botResponse });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'DecodeLabs Chatbot is running' });
});

// Serve a simple HTML interface
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DecodeLabs Rule-Based AI Chatbot</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; }
        .container { width: 100%; max-width: 600px; background: white; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); overflow: hidden; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 24px; text-align: center; }
        .header h1 { font-size: 24px; margin-bottom: 4px; }
        .header p { opacity: 0.9; font-size: 14px; }
        .chat-box { height: 400px; overflow-y: auto; padding: 20px; background: #f7f7f7; }
        .message { margin-bottom: 16px; display: flex; }
        .message.bot { justify-content: flex-start; }
        .message.user { justify-content: flex-end; }
        .message-bubble { max-width: 70%; padding: 12px 16px; border-radius: 12px; font-size: 14px; line-height: 1.4; }
        .bot .message-bubble { background: #e0e0e0; color: #333; border-radius: 12px 12px 12px 0; }
        .user .message-bubble { background: #667eea; color: white; border-radius: 12px 12px 0 12px; }
        .input-area { padding: 16px; border-top: 1px solid #e0e0e0; display: flex; gap: 8px; }
        input { flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; }
        button { padding: 12px 24px; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
        button:hover { background: #5568d3; }
        .welcome { color: #666; font-style: italic; text-align: center; padding: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🤖 DecodeLabs Chatbot</h1>
          <p>Rule-Based AI Assistant</p>
        </div>
        <div class="chat-box" id="chatBox">
          <div class="message bot">
            <div class="message-bubble">Welcome! Try saying "hello", "what is ai", or "help"</div>
          </div>
        </div>
        <div class="input-area">
          <input type="text" id="userInput" placeholder="Type your message..." />
          <button onclick="sendMessage()">Send</button>
        </div>
      </div>
      <script>
        async function sendMessage() {
          const input = document.getElementById('userInput');
          const message = input.value.trim();
          if (!message) return;

          // Add user message
          addMessage(message, 'user');
          input.value = '';

          // Get bot response
          try {
            const res = await fetch('/api/chat', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ message })
            });
            const data = await res.json();
            addMessage(data.response, 'bot');
          } catch (err) {
            addMessage('Error connecting to server', 'bot');
          }
        }

        function addMessage(text, sender) {
          const chatBox = document.getElementById('chatBox');
          const msgDiv = document.createElement('div');
          msgDiv.className = 'message ' + sender;
          msgDiv.innerHTML = '<div class="message-bubble">' + text + '</div>';
          chatBox.appendChild(msgDiv);
          chatBox.scrollTop = chatBox.scrollHeight;
        }

        document.getElementById('userInput').addEventListener('keypress', (e) => {
          if (e.key === 'Enter') sendMessage();
        });
      </script>
    </body>
    </html>
  `);
});

module.exports = app;
});
