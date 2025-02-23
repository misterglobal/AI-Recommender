Sure, here's the contents for the file: /business-ai-recommendations/business-ai-recommendations/server/src/controllers/aiController.ts

import { Request, Response } from 'express';
import { generateRecommendations } from '../services/openaiService';

export const getAIRecommendations = async (req: Request, res: Response) => {
    try {
        const { businessType, size, revenue, demographics } = req.body;
        const recommendations = await generateRecommendations(businessType, size, revenue, demographics);
        res.status(200).json(recommendations);
    } catch (error) {
        console.error('Error generating AI recommendations:', error);
        res.status(500).json({ message: 'Failed to generate recommendations' });
    }
};