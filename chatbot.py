def chatbot():
    """
    A simple rule-based AI chatbot that responds to predefined user inputs.
    Following the requirements from Artificial Intelligence Project 1 (Industrial Training Kit).
    """
    # Knowledge Base: Dictionary with 5+ intents
    responses = {
        "hello": "Hello! I am your rule-based AI assistant. How can I help you today?",
        "hi": "Hi there! Ready to explore some logic-based AI concepts?",
        "how are you": "I'm functioning within normal parameters, thank you for asking!",
        "what is ai": "Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems.",
        "who created you": "I was created as part of the DecodeLabs Industrial Training program.",
        "tell me a joke": "Why did the computer show up late to work? It had a hard drive!",
        "weather": "I don't have real-time sensors, but it's always sunny in the world of logic!",
        "help": "You can greet me, ask about AI, or just say 'bye' to exit. I'm here to demonstrate rule-based control flow."
    }

    print("--- Rule-Based AI Chatbot Initialized ---")
    print("Type 'exit', 'quit', or 'bye' to end the conversation.\n")

    # Input Loop: Continuous 'while' cycle
    while True:
        # Phase 1: Input & Sanitization
        raw_input = input("You: ")
        
        # Sanitization: Handle case & whitespace
        clean_input = raw_input.lower().strip()

        # Exit Strategy: Clean break command
        if clean_input in ['exit', 'quit', 'bye']:
            print("Chatbot: Goodbye! Have a great day!")
            break

        # Phase 2 & 3: Process & Output
        # Using the .get() method for atomic lookup and fallback
        reply = responses.get(clean_input, "Chatbot: I am sorry, I don't have a rule for that yet. Can you try asking something else?")
        
        # If the reply doesn't already start with "Chatbot:", add it
        if not reply.startswith("Chatbot:"):
            reply = f"Chatbot: {reply}"
            
        print(reply)

if __name__ == "__main__":
    chatbot()
