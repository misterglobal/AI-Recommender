export type UserInput = {
    businessName: string;
    email: string;
    industry: 'Restaurant' | 'E-commerce' | 'Other';
    businessSize: '1-10' | '11-50' | '51+';
    annualRevenue: number;
    customerDemographics: string;
};

export type Recommendation = {
    id: number;
    title: string;
    description: string;
};