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
exports.getGoogleBusinessReviews = void 0;
const axios_1 = __importDefault(require("axios"));
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_BUSINESS_API_URL = 'https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews';
const getGoogleBusinessReviews = (accountId, locationId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(GOOGLE_BUSINESS_API_URL.replace('{accountId}', accountId).replace('{locationId}', locationId), {
            headers: {
                'Authorization': `Bearer ${GOOGLE_API_KEY}`
            }
        });
        return response.data;
    }
    catch (error) {
        console.error('Error fetching Google Business reviews:', error);
        throw new Error('Failed to fetch Google Business reviews');
    }
});
exports.getGoogleBusinessReviews = getGoogleBusinessReviews;
