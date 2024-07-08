"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, lowercase: true },
    location: { type: String, },
    blog: { type: String, },
    bio: { type: String, },
    public_repos: { type: Number, },
    public_gists: { type: Number, },
    followers: { type: Number, },
    following: { type: Number, },
    created_at: { type: Date, },
    updated_at: { type: Date, },
    friends: [{ type: String, }],
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });
const User = mongoose_1.models.User || (0, mongoose_1.model)("User", userSchema);
exports.default = User;
