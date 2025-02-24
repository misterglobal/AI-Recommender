"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const businessController_1 = require("../controllers/businessController");
const router = (0, express_1.Router)();
router.post('/submit', businessController_1.businessController.processUserInput);
exports.default = router;
