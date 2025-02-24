import axios from 'axios';
import { CrunchbaseData } from '../types';

const CRUNCHBASE_API_URL = 'https://api.crunchbase.com/v3.1/';
const API_KEY = process.env.CRUNCHBASE_API_KEY;

export const getFundingData = async (companyName: string): Promise<CrunchbaseData | null> => {
    try {
        const response = await axios.get(`${CRUNCHBASE_API_URL}organizations/${companyName}?user_key=${API_KEY}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data from Crunchbase:', error);
        return null;
    }
};