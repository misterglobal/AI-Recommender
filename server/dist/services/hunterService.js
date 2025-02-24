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
exports.verifyEmail = void 0;
const config_1 = require("../config");
const hunterApiKey = config_1.config.HUNTER_API_KEY;
const verifyEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (!hunterApiKey) {
        throw new Error('Hunter API key not configured');
    }
    // Implementation
    return true;
});
exports.verifyEmail = verifyEmail;
