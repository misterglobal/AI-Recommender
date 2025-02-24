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
exports.getFundingData = void 0;
const axios_1 = __importDefault(require("axios"));
const CRUNCHBASE_API_URL = 'https://api.crunchbase.com/v3.1/';
const API_KEY = process.env.CRUNCHBASE_API_KEY;
const getFundingData = (companyName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${CRUNCHBASE_API_URL}organizations/${companyName}?user_key=${API_KEY}`);
        return response.data.data;
    }
    catch (error) {
        console.error('Error fetching data from Crunchbase:', error);
        return null;
    }
});
exports.getFundingData = getFundingData;
