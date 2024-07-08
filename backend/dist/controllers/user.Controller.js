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
exports.sortUsers = exports.searchUsers = exports.deleteUser = exports.updateUser = exports.findMutualFollowers = exports.getUserAndSave = void 0;
const ApiError_1 = require("../utils/ApiError");
const ApiResponse_1 = require("../utils/ApiResponse");
const asyncHandler_1 = require("../utils/asyncHandler");
const user_Model_1 = __importDefault(require("../Models/user.Model"));
const GithubApi_1 = require("../utils/GithubApi");
const getUserAndSave = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    if (!username) {
        throw new ApiError_1.ApiError(400, "Invalid Username");
    }
    let user = yield user_Model_1.default.findOne({ username });
    if (!user) {
        const userData = yield (0, GithubApi_1.fetchGitHubUser)(username);
        user = new user_Model_1.default({
            username: userData.login,
            location: userData.location,
            blog: userData.blog,
            bio: userData.bio,
            public_repos: userData.public_repos,
            public_gists: userData.public_gists,
            followers: userData.followers,
            following: userData.following,
            created_at: userData.created_at,
            updated_at: userData.updated_at,
        });
        yield user.save();
    }
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, user, "User data fetched successfully"));
}));
exports.getUserAndSave = getUserAndSave;
const findMutualFollowers = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    if (!username) {
        throw new ApiError_1.ApiError(400, "Invalid Username");
    }
    const userData = yield (0, GithubApi_1.fetchGitHubUser)(username);
    const [followers, following] = yield Promise.all([(0, GithubApi_1.fetchFollowers)(username), (0, GithubApi_1.fetchFollowing)(username)]);
    const mutualFollowers = followers.filter(follower => following.includes(follower));
    yield user_Model_1.default.findOneAndUpdate({ username: userData.login }, { $set: { friends: mutualFollowers } }, { new: true, upsert: true });
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, { username, mutualFollowers }, "Mutual followers found"));
}));
exports.findMutualFollowers = findMutualFollowers;
const updateUser = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    if (!username) {
        throw new ApiError_1.ApiError(400, "Invalid Username");
    }
    const updatedUser = yield user_Model_1.default.findOneAndUpdate({ username }, req.body, { new: true });
    if (!updatedUser) {
        throw new ApiError_1.ApiError(404, "User not found");
    }
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, updatedUser, "User updated successfully"));
}));
exports.updateUser = updateUser;
const deleteUser = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    if (!username) {
        throw new ApiError_1.ApiError(400, "Invalid Username");
    }
    const deletedUser = yield user_Model_1.default.findOneAndDelete({ username });
    if (!deletedUser) {
        throw new ApiError_1.ApiError(404, "User not found");
    }
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, deletedUser, "User soft deleted successfully"));
}));
exports.deleteUser = deleteUser;
const searchUsers = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, location } = req.query;
    let query = {};
    if (username) {
        query = Object.assign(Object.assign({}, query), { username: { $regex: username, $options: 'i' } });
    }
    if (location) {
        query = Object.assign(Object.assign({}, query), { location: { $regex: location, $options: 'i' } });
    }
    const users = yield user_Model_1.default.find(query);
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, users, "Found the User"));
}));
exports.searchUsers = searchUsers;
const sortUsers = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sortBy } = req.query;
    let sortOptions = {};
    switch (sortBy) {
        case "public_repos":
            sortOptions = { public_repos: -1 };
            break;
        case "public_gists":
            sortOptions = { public_gists: -1 };
            break;
        case "followers":
            sortOptions = { followers: -1 };
            break;
        case "following":
            sortOptions = { following: -1 };
            break;
        case "created_at":
            sortOptions = { createdAt: -1 };
            break;
        default:
            sortOptions = { createdAt: 1 };
            break;
    }
    const users = yield user_Model_1.default.find().sort(sortOptions);
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, users, "Users sorted successfully."));
}));
exports.sortUsers = sortUsers;
