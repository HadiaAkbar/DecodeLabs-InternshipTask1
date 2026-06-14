def chatbot():
    """
    A simple rule-based AI chatbot that responds to predefined user inputs.
    Following the requirements from Artificial Intelligence Project 1 (Industrial Training Kit).
    
    Architecture:
    - Input Loop: Continuous 'while' cycle
    - Sanitization: Handle case & whitespace
    - Knowledge Base: Dictionary with 15+ intents
    - Fallback: Default response for unknown inputs
    - Exit Strategy: Clean break command
    """
    # Knowledge Base: Dictionary with 15+ intents
    responses = {
        # Greetings
        "hello": "Hello! I am your rule-based AI assistant. How can I help you today?",
        "hi": "Hi there! Ready to explore some logic-based AI concepts?",
        "hey": "Hey! What would you like to know?",
        
        # Personal Questions
        "how are you": "I'm functioning within normal parameters, thank you for asking!",
        "who created you": "I was created as part of the DecodeLabs Industrial Training program.",
        "what is your name": "I'm the DecodeLabs Rule-Based AI Chatbot, built to demonstrate deterministic logic and control flow.",
        
        # AI & Technology Questions
        "what is ai": "Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems.",
        "what is machine learning": "Machine Learning is a subset of AI where systems learn from data and improve without being explicitly programmed.",
        "what is deep learning": "Deep Learning is a subset of Machine Learning using neural networks with multiple layers to process complex patterns.",
        
        # Engagement
        "tell me a joke": "Why did the computer show up late to work? It had a hard drive!",
        "weather": "I don't have real-time sensors, but it's always sunny in the world of logic!",
        "help": "You can greet me, ask about AI, or just say 'bye' to exit. I'm here to demonstrate rule-based control flow.",
        
        # Project-specific
        "what is decodelabs": "DecodeLabs is an Industrial Training Kit focused on teaching AI fundamentals through hands-on projects.",
        "what is project 1": "Project 1 is the Rule-Based AI Chatbot, your foundation for understanding deterministic logic and control flow in AI systems."
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
        reply = responses.get(clean_input, "I am sorry, I don't have a rule for that yet. Can you try asking something else?")
        
        # If the reply doesn't already start with "Chatbot:", add it
        if not reply.startswith("Chatbot:"):
            reply = f"Chatbot: {reply}"
            
        print(reply)

if __name__ == "__main__":
    chatbot()
