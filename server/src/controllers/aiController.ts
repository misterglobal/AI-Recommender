import { Request, Response } from 'express';
import { BusinessInput, AIRecommendationRequest } from '../types';
import { generateRecommendations } from '../services/openaiService';

export const getAIRecommendations = async (req: Request, res: Response) => {
    try {
        const input: AIRecommendationRequest = {
            businessType: req.body.businessType,
            size: req.body.size,
            revenue: req.body.revenue,
            demographics: req.body.demographics
        };
        const recommendations = await generateRecommendations(input);
        res.status(200).json(recommendations);
    } catch (error) {
        console.error('Error generating AI recommendations:', error);
        res.status(500).json({ message: 'Failed to generate recommendations' });
    }
};

export const generateAIRecommendations = async (input: BusinessInput) => {
    const aiRequest: AIRecommendationRequest = {
        businessType: input.industry,
        size: input.businessSize,
        revenue: input.annualRevenue,
        demographics: input.customerDemographics
    };
    return await generateRecommendations(aiRequest);
};