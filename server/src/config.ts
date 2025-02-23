const dotenv = require('dotenv');

dotenv.config();

const config = {
    googleBusinessApiKey: process.env.GOOGLE_BUSINESS_API_KEY,
    crunchbaseApiKey: process.env.CRUNCHBASE_API_KEY,
    hunterApiKey: process.env.HUNTER_API_KEY,
    openaiApiKey: process.env.OPENAI_API_KEY,
    port: process.env.PORT || 5000,
};

module.exports = config;