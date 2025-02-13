import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyAHtoZ8f1U-tx-IOLC_x8bNEJEFvFg9kvA');



export async function getAIResponse(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    
    // Enhanced prompt with more context and safety parameters
    const fullPrompt = `You are a friendly and helpful Valentine's Day assistant named Cupid. Your goal is to provide romantic, creative, and thoughtful suggestions while maintaining a positive and supportive tone.

Context: You're helping users with Valentine's Day related questions, gift ideas, date planning, and relationship advice.

User's question: ${prompt}

Please provide a detailed response that is:
- Helpful and specific
- Romantic and creative
- Written in a friendly tone
- Formatted in markdown
- Includes emojis where appropriate

If suggesting gifts or dates, include:
- At least 3 specific suggestions
- Estimated price ranges or time commitments
- Why each suggestion is special`;

    const result = await model.generateContent(fullPrompt);
    
    if (!result.response.text()) {
      throw new Error('No response generated');
    }
    

    return result.response.text();
  } catch (error) {
    console.error('Error getting AI response:', error);
    return ` Here are some general suggestions:

## Gift Ideas 🎁
- A personalized photo album
- A romantic dinner experience
- A custom playlist or love letter

## Date Ideas 💝
- Stargazing picnic
- Cooking class together
- Art gallery visit

Would you like to try asking your question in a different way?`;
  }
}