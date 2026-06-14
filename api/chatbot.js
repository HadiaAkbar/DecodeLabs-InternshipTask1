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

module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const userInput = req.body.message || '';
    const cleanInput = userInput.toLowerCase().trim();

    if (['exit', 'quit', 'bye'].includes(cleanInput)) {
      return res.json({ response: "Goodbye! Have a great day!" });
    }

    const botResponse = responses[cleanInput] || "I am sorry, I don't have a rule for that yet. Can you try asking something else?";
    return res.json({ response: botResponse });
  }

  if (req.method === 'GET') {
    return res.json({ status: 'ok', message: 'DecodeLabs Chatbot API is running' });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
