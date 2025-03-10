"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRecommendations = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
const generateRecommendations = (input) => __awaiter(void 0, void 0, void 0, function* () {
    if (!config_1.config.OPENAI_API_URL) {
        throw new Error('OpenAI API URL not configured');
    }
    try {
        const response = yield axios_1.default.post(config_1.config.OPENAI_API_URL, {
            model: "gpt-4",
            messages: [
                {
                    role: "user",
                    content: `Based on the following user input, generate 10 tailored AI use cases: ${JSON.stringify(input)}`
                }
            ],
            max_tokens: 150,
            temperature: 0.7,
        }, {
            headers: {
                'Authorization': `Bearer ${config_1.config.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data.choices[0].message.content.split('\n').filter(Boolean);
    }
    catch (error) {
        console.error('Error generating recommendations:', error);
        throw new Error('Failed to generate recommendations');
    }
});
exports.generateRecommendations = generateRecommendations;
