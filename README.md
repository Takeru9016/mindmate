# Mindmate - A ChatGPT Clone

## Description
**Mindmate** is an AI-based chatbot that simulates conversations like ChatGPT. It leverages **Next.js** for the frontend, **OpenAI API** for AI-driven responses, **TailwindCSS** for the responsive design, and **Firebase** for real-time backend and authentication. This project demonstrates integrating OpenAI into a full-stack application with user authentication and secure data management.

## Features
- OpenAI-powered chatbot with AI-based responses.
- Firebase authentication and user management.
- Real-time messaging.
- Responsive design using TailwindCSS.
- User-friendly interface for chatting with the AI bot.

## Tech Stack
- **Frontend**: Next.js, TailwindCSS
- **Backend**: Firebase (for real-time database and authentication)
- **AI Integration**: OpenAI API
- **Deployment**: Vercel

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/mindmate.git
    cd mindmate
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file and add your OpenAI API key and Firebase credentials:
    ```env
    NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
    NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

5. **Access the app** at `http://localhost:3000`.

## Usage
Once the app is running:
- Sign in using your Firebase credentials.
- Start a conversation with the AI chatbot.
- The chatbot responds with AI-driven answers in real-time.

## Future Improvements
- Adding conversation history storage.
- Multi-language support.
- Advanced AI personalization.
