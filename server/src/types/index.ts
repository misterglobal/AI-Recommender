import { Request, Response } from 'express';

export interface BusinessInput {
    businessName: string;
    email: string;
    industry: string;
    businessSize: number;
    annualRevenue: number;
    customerDemographics: string[];
}

export interface AIRecommendationRequest {
    businessType: string;
    size: number;
    revenue: number;
    demographics: string[];
}

export interface CrunchbaseData {
    fundingTotal: number;
    investors: string[];
    lastFunding?: Date;
}

export interface ApiResponse {
    success: boolean;
    data?: any;
    error?: string;
}