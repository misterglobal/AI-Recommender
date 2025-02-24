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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAIRecommendations = exports.getAIRecommendations = void 0;
const openaiService_1 = require("../services/openaiService");
const getAIRecommendations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const input = {
            businessType: req.body.businessType,
            size: req.body.size,
            revenue: req.body.revenue,
            demographics: req.body.demographics
        };
        const recommendations = yield (0, openaiService_1.generateRecommendations)(input);
        res.status(200).json(recommendations);
    }
    catch (error) {
        console.error('Error generating AI recommendations:', error);
        res.status(500).json({ message: 'Failed to generate recommendations' });
    }
});
exports.getAIRecommendations = getAIRecommendations;
const generateAIRecommendations = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const aiRequest = {
        businessType: input.industry,
        size: input.businessSize,
        revenue: input.annualRevenue,
        demographics: input.customerDemographics
    };
    return yield (0, openaiService_1.generateRecommendations)(aiRequest);
});
exports.generateAIRecommendations = generateAIRecommendations;
