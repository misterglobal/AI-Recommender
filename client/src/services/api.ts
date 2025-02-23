Sure, here's the contents for the file: /business-ai-recommendations/business-ai-recommendations/client/src/services/api.ts

import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const submitUserInput = async (userInput) => {
    try {
        const response = await axios.post(`${API_URL}/submit`, userInput);
        return response.data;
    } catch (error) {
        throw new Error('Error submitting user input: ' + error.message);
    }
};

export const fetchRecommendations = async () => {
    try {
        const response = await axios.get(`${API_URL}/recommendations`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching recommendations: ' + error.message);
    }
};