import axios from 'axios';
import { config } from '../config';

const hunterApiKey = config.HUNTER_API_KEY;

export const verifyEmail = async (email: string): Promise<boolean> => {
    if (!hunterApiKey) {
        throw new Error('Hunter API key not configured');
    }
    // Implementation
    return true;
};