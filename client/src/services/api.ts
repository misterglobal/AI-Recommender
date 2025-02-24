import axios from 'axios';
import type { AxiosError } from 'axios';
import { FormData, ApiResponse } from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const submitUserInput = async (userInput: FormData): Promise<ApiResponse> => {
    try {
        const response = await axios.post<ApiResponse>(`${API_URL}/submit`, userInput);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error('Error submitting user input: ' + error.message);
        }
        throw new Error('An unknown error occurred');
    }
};

export const fetchRecommendations = async (data: FormData): Promise<string[]> => {
    try {
        const response = await axios.post<ApiResponse>(`${API_URL}/recommendations`, data);
        return response.data.recommendations || [];
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error('Error fetching recommendations: ' + error.message);
        }
        throw new Error('An unknown error occurred');
    }
};