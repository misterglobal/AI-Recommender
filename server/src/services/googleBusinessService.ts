Sure, here's the contents for the file: /business-ai-recommendations/business-ai-recommendations/server/src/services/googleBusinessService.ts

import axios from 'axios';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_BUSINESS_API_URL = 'https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews';

export const getGoogleBusinessReviews = async (accountId: string, locationId: string) => {
    try {
        const response = await axios.get(GOOGLE_BUSINESS_API_URL.replace('{accountId}', accountId).replace('{locationId}', locationId), {
            headers: {
                'Authorization': `Bearer ${GOOGLE_API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Google Business reviews:', error);
        throw new Error('Failed to fetch Google Business reviews');
    }
};