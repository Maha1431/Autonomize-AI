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
exports.fetchGitHubUser = exports.fetchFollowing = exports.fetchFollowers = void 0;
const GITHUB_API_BASE_URL = process.env.GITHUB_API_BASE_URL;
const fetchFollowers = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${GITHUB_API_BASE_URL}/users/${username}/followers`);
        if (!response.ok) {
            throw new Error(`Failed to fetch followers for ${username}`);
        }
        const followers = yield response.json();
        return followers.map((follower) => follower.login);
    }
    catch (error) {
        console.error("Error fetching followers from GitHub API", error);
        throw error;
    }
});
exports.fetchFollowers = fetchFollowers;
const fetchFollowing = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${GITHUB_API_BASE_URL}/users/${username}/following`);
        if (!response.ok) {
            throw new Error(`Failed to fetch following for ${username}`);
        }
        const following = yield response.json();
        return following.map((following) => following.login);
    }
    catch (error) {
        console.error("Error fetching following from GitHub API", error);
        throw error;
    }
});
exports.fetchFollowing = fetchFollowing;
const fetchGitHubUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${GITHUB_API_BASE_URL}/users/${username}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch user ${username}`);
        }
        return yield response.json();
    }
    catch (error) {
        console.error("Error fetching from GitHub API", error);
        throw error;
    }
});
exports.fetchGitHubUser = fetchGitHubUser;
