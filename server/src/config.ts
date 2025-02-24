const dotenv = require('dotenv');

dotenv.config();

export const config = {
    port: process.env.PORT || 3001,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_API_URL: process.env.OPENAI_API_URL || 'https://api.openai.com/v1/chat/completions',
    HUNTER_API_KEY: process.env.HUNTER_API_KEY,
    CRUNCHBASE_API_KEY: process.env.CRUNCHBASE_API_KEY
};