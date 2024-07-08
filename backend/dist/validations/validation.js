"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const userSchema = joi_1.default.object({
    username: joi_1.default.string().required(),
    location: joi_1.default.string().optional(),
    blog: joi_1.default.string().optional(),
    bio: joi_1.default.string().optional(),
    public_repos: joi_1.default.number().integer().min(0).optional(),
    public_gists: joi_1.default.number().integer().min(0).optional(),
    followers: joi_1.default.number().integer().min(0).optional(),
    following: joi_1.default.number().integer().min(0).optional(),
    created_at: joi_1.default.date().optional(),
    updated_at: joi_1.default.date().optional(),
    friends: joi_1.default.array().items(joi_1.default.string()).optional(),
    isDeleted: joi_1.default.boolean().default(false).optional(),
});
exports.userSchema = userSchema;
