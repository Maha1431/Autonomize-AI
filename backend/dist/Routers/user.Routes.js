"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateData_1 = __importDefault(require("../Middleware/validateData"));
const validation_1 = require("../validations/validation");
const user_Controller_1 = require("../controllers/user.Controller");
const router = (0, express_1.Router)();
router.get('/search', user_Controller_1.searchUsers);
router.get('/sorted', user_Controller_1.sortUsers);
router.get('/:username', (0, validateData_1.default)(validation_1.userSchema), user_Controller_1.getUserAndSave);
router.get('/:username/friends', (0, validateData_1.default)(validation_1.userSchema), user_Controller_1.findMutualFollowers);
router.patch('/:username', user_Controller_1.updateUser);
router.delete('/:username', user_Controller_1.deleteUser);
exports.default = router;
