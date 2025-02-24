import axios from 'axios';
import { AIRecommendationRequest } from '../types';
import { config } from '../config';

export const generateRecommendations = async (input: AIRecommendationRequest): Promise<string[]> => {
    if (!config.OPENAI_API_URL) {
        throw new Error('OpenAI API URL not configured');
    }

    try {
        const response = await axios.post(
            config.OPENAI_API_URL,
            {
                model: "gpt-4",
                messages: [
                    {
                        role: "user",
                        content: `Based on the following user input, generate 10 tailored AI use cases: ${JSON.stringify(input)}`
                    }
                ],
                max_tokens: 150,
                temperature: 0.7,
            },
            {
                headers: {
                    'Authorization': `Bearer ${config.OPENAI_API_KEY}`,
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