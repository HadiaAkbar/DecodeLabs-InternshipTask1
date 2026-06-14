# Rule-Based AI Chatbot - Project 1

This repository contains the implementation of **Project 1: Rule-Based AI Chatbot** for the DecodeLabs Industrial Training program.

## Project Overview

The goal of this project is to create a foundational rule-based AI system that demonstrates core programming concepts such as control flow, decision-making logic, and input sanitization. Unlike probabilistic models, this chatbot operates on deterministic rules, ensuring traceability and safety.

## Key Features

- **Continuous Input Loop**: The chatbot runs in a `while` loop, allowing for a continuous conversation until an exit command is given.
- **Input Sanitization**: All user inputs are normalized (lowercase and stripped of whitespace) to ensure robust matching.
- **Dictionary-Based Knowledge Base**: Responses are managed through a hash map (Python dictionary) for efficient $O(1)$ lookup.
- **Fallback Mechanism**: The system handles unknown inputs gracefully with a default fallback response.
- **Clean Exit Strategy**: Users can terminate the session using commands like `exit`, `quit`, or `bye`.

## Implementation Details

The project follows the **IPO (Input-Process-Output)** model:
1.  **Input**: Captures raw user text.
2.  **Process**: Sanitizes the text and matches it against a predefined dictionary of intents.
3.  **Output**: Returns the mapped response or a fallback message.

## How to Run

Ensure you have Python installed, then execute the script:

```bash
python3 chatbot.py
```

## Repository Structure

- `chatbot.py`: The main implementation of the rule-based chatbot.
- `README.md`: Project documentation and instructions.
