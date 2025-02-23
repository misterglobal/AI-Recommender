Sure, here's the contents for the file: /business-ai-recommendations/business-ai-recommendations/server/src/services/openaiService.ts

import axios from 'axios';

const OPENAI_API_URL = process.env.OPENAI_API_URL;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const generateRecommendations = async (userInput) => {
    try {
        const response = await axios.post(
            OPENAI_API_URL,
            {
                model: "gpt-4",
                messages: [
                    {
                        role: "user",
                        content: `Based on the following user input, generate 10 tailored AI use cases: ${JSON.stringify(userInput)}`
                    }
                ],
                max_tokens: 150,
                temperature: 0.7,
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data.choices[0].message.content.split('\n').filter(Boolean);
    } catch (error) {
        console.error('Error generating recommendations:', error);
        throw new Error('Failed to generate recommendations');
    }
};