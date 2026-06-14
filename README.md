# DecodeLabs Project 1: Rule-Based AI Chatbot

## Overview

This is the **Project 1** submission for the DecodeLabs Artificial Intelligence Industrial Training Kit. It demonstrates a **rule-based chatbot** that responds to predefined user inputs using deterministic logic and control flow.

### Project Goal

Create a simple rule-based AI chatbot that responds to predefined user inputs. This project focuses on:
- **Control flow and decision-making logic** (if-else, loops)
- **Input sanitization and normalization**
- **Dictionary-based knowledge representation**
- **Fallback handling for unknown inputs**

## Architecture

The chatbot follows the **IPO Model** (Input → Process → Output):

1. **Input & Sanitization**: User input is converted to lowercase and whitespace is trimmed
2. **Process**: The cleaned input is matched against a knowledge base dictionary
3. **Output**: A response is retrieved using the `.get()` method with a fallback for unknown inputs

### Key Features

✅ **Continuous Loop**: Runs until user enters 'exit', 'quit', or 'bye'  
✅ **Input Sanitization**: Handles case sensitivity and whitespace  
✅ **Knowledge Base**: Dictionary with 15+ intents  
✅ **Fallback Response**: Default message for unknown inputs  
✅ **Exit Strategy**: Clean break command  
✅ **Deterministic Logic**: 100% rule-based, no randomness or AI generation  

## Project Requirements Met

| Requirement | Status | Implementation |
|---|---|---|
| Input Loop | ✅ | `while True:` loop with break condition |
| Sanitization | ✅ | `lower().strip()` on user input |
| Knowledge Base | ✅ | Dictionary with 15+ intents |
| Fallback | ✅ | `.get()` method with default message |
| Exit Strategy | ✅ | Checks for 'exit', 'quit', 'bye' |
| Greetings | ✅ | 'hello', 'hi', 'hey' |
| Exit Commands | ✅ | 'exit', 'quit', 'bye' |

## Usage

### Option 1: Command Line (Python)

```bash
python3 chatbot.py
```

Example interaction:
```
--- Rule-Based AI Chatbot Initialized ---
Type 'exit', 'quit', or 'bye' to end the conversation.

You: hello
Chatbot: Hello! I am your rule-based AI assistant. How can I help you today?

You: what is ai
Chatbot: Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems.

You: bye
Chatbot: Goodbye! Have a great day!
```

### Option 2: Web Interface (Node.js)

#### Installation

```bash
pnpm install
# or
npm install
```

#### Running the Server

```bash
npm start
# or
pnpm start
```

The server will start on `http://localhost:3000`

Open your browser and navigate to `http://localhost:3000` to interact with the chatbot through the web interface.

#### API Endpoint

The chatbot API is available at `POST /api/chat`

**Request:**
```json
{
  "message": "hello"
}
```

**Response:**
```json
{
  "response": "Hello! I am your rule-based AI assistant. How can I help you today?"
}
```

## Knowledge Base

The chatbot recognizes the following intents:

### Greetings
- `hello` → Friendly greeting
- `hi` → Casual greeting
- `hey` → Informal greeting

### Personal Questions
- `how are you` → Status response
- `who created you` → Creator information
- `what is your name` → Identity response

### AI & Technology Questions
- `what is ai` → AI definition
- `what is machine learning` → ML definition
- `what is deep learning` → DL definition

### Engagement
- `tell me a joke` → Joke response
- `weather` → Weather-related response
- `help` → Help/instructions

### Project-Specific
- `what is decodelabs` → DecodeLabs information
- `what is project 1` → Project 1 description

### Exit Commands
- `exit` → End conversation
- `quit` → End conversation
- `bye` → End conversation

## Project Structure

```
.
├── chatbot.py              # Python CLI version
├── server.js               # Express.js server for web interface
├── api/
│   └── chatbot.js          # Serverless API handler (Node.js)
├── public/
│   └── index.html          # Web interface frontend
├── package.json            # Node.js dependencies
├── vercel.json             # Vercel deployment configuration
├── README.md               # This file
└── TROUBLESHOOTING.md      # Troubleshooting guide
```

## Implementation Details

### Input Processing

```python
raw_input = input("You: ")
clean_input = raw_input.lower().strip()
```

### Response Lookup

```python
reply = responses.get(clean_input, "I am sorry, I don't have a rule for that yet. Can you try asking something else?")
```

### Exit Handling

```python
if clean_input in ['exit', 'quit', 'bye']:
    print("Chatbot: Goodbye! Have a great day!")
    break
```

## Design Philosophy

This chatbot demonstrates the **white-box principle** of deterministic AI systems:
- **Traceability**: Input → Logic → Output (no mystery)
- **Safety**: Zero hallucination risk (100% hard-coded)
- **Compliance**: Suitable for regulated industries (Finance, Healthcare)
- **Efficiency**: O(1) lookup time using dictionary

## Future Enhancements

Potential improvements for advanced versions:
- Semantic similarity matching (Project 2)
- Context awareness and conversation history
- Multi-turn dialogue support
- Intent confidence scoring
- Custom response templates

## Troubleshooting

If you encounter issues, please refer to `TROUBLESHOOTING.md` for detailed solutions.

### Common Issues

**Q: "Error connecting to server" when using the web interface**  
A: Ensure the Node.js server is running with `npm start`

**Q: "Cannot find module 'express'"**  
A: Run `pnpm install` or `npm install` to install dependencies

**Q: The chatbot doesn't respond to my input**  
A: The chatbot only responds to predefined intents. Try "hello", "what is ai", or "help"

## Submission Checklist

- [x] Python CLI version works correctly
- [x] Web interface responds to user input
- [x] All requirements from Project 1 specification met
- [x] Knowledge base has 15+ intents
- [x] Input sanitization implemented
- [x] Fallback response for unknown inputs
- [x] Exit commands working
- [x] Code is well-documented
- [x] README is comprehensive

## License

This project is part of the DecodeLabs Industrial Training Kit.

## Author

Created by Hadia Akbar for DecodeLabs Project 1 - Batch 2026

---

**Status**: ✅ Ready for Final Submission
