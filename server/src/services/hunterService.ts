Sure, here's the contents for the file: /business-ai-recommendations/business-ai-recommendations/server/src/services/hunterService.ts

import axios from 'axios';
import { HUNTER_API_KEY } from '../config';

const HUNTER_API_URL = 'https://api.hunter.io/v2/domain-verifier';

export const verifyEmailDomain = async (domain: string) => {
    try {
        const response = await axios.get(HUNTER_API_URL, {
            params: {
                domain,
                api_key: HUNTER_API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error verifying email domain');
    }
};