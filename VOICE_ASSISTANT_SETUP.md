# Voice Assistant Setup Instructions

## ElevenLabs Conversational AI Integration

This portfolio now includes an AI voice assistant powered by ElevenLabs Conversational AI. Follow these steps to complete the setup:

### 1. Create ElevenLabs Account
1. Sign up at [ElevenLabs](https://elevenlabs.io/sign-up)
2. Navigate to the [Conversational AI dashboard](https://elevenlabs.io/app/conversational-ai)

### 2. Create Your AI Agent
1. Click "Create Agent" in the ElevenLabs dashboard
2. Configure your agent with these recommended settings:

**Agent Personality:**
```
You are Cascade, an advanced AI assistant representing Yash Rai's portfolio. You are:

- Friendly, knowledgeable, and enthusiastic about Yash's professional work
- An expert on Yash's background as an Ex-SDE Intern at Clarity
- Knowledgeable about his expertise in GCP, SQL, Python, ETL, Data Pipelines, ADF, and Big Data
- Professional yet approachable in tone
- Helpful in guiding visitors through understanding Yash's capabilities and projects

Your role is to help visitors learn about Yash's skills, experience, and portfolio projects. You can discuss his technical background, answer questions about his work, and provide insights into his capabilities as a data engineer and big data enthusiast.
```

**System Instructions:**
- Set the voice to a professional, clear voice
- Enable real-time conversation
- Set response time to fast for better user experience

### 3. Get Your Agent ID
1. After creating the agent, copy the Agent ID from the dashboard
2. Replace `YOUR_AGENT_ID_HERE` in `components/VoiceAssistant.tsx` with your actual Agent ID

### 4. Environment Variables (Optional for Private Agents)
If you want to make your agent private and add authentication:

1. Create a `.env.local` file in your project root:
```env
ELEVENLABS_API_KEY=your-api-key-here
NEXT_PUBLIC_AGENT_ID=your-agent-id-here
```

2. Update the VoiceAssistant component to use signed URLs for authentication

### 5. Test the Integration
1. Run `npm run dev` to start your development server
2. Click the purple microphone button in the bottom-right corner
3. Allow microphone permissions when prompted
4. Start a voice conversation with your AI assistant

## Features Included

- **Floating Action Button:** Purple gradient microphone button with hover animations
- **Modal Interface:** Beautiful modal with status indicators and controls
- **Real-time Status:** Shows connection status and speaking/listening states
- **Cool Animations:** Smooth transitions, pulse effects, and rotation animations
- **Responsive Design:** Works across all screen sizes
- **Theme Support:** Automatically adapts to light/dark mode

## Troubleshooting

- **"Failed to start conversation":** Check that your Agent ID is correct and the agent is active
- **Microphone permission denied:** Browsers require HTTPS for microphone access in production
- **No response from agent:** Verify your agent is properly configured and has a system prompt

## Customization

You can customize the assistant's appearance and behavior by modifying:
- `ASSISTANT_CONTEXT` object in `components/VoiceAssistant.tsx`
- Animation configurations using Framer Motion
- Styling using Tailwind CSS classes
