import { Router } from "express";

import validateData from "../Middleware/validateData";

import { userSchema } from "../validations/validation";

import {
  getUserAndSave,
  findMutualFollowers,
  updateUser,
  deleteUser,
  searchUsers,
  sortUsers
} from "../controllers/user.Controller";



const router = Router();

router.get('/search', searchUsers);

router.get('/sorted', sortUsers);

router.get('/:username', validateData(userSchema), getUserAndSave);

router.get('/:username/friends', validateData(userSchema), findMutualFollowers);

router.patch('/:username', updateUser);

router.delete('/:username', deleteUser);


export default router;