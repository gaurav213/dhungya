import express from "express";

import followUser from "../controllers/post/folloUser.js";
import {
  register,
  login,
  logout,
  updatePassword,
  updateprofile,
  deleteProfile,
  myProfile,
  getUserProfile,
  getAllUser,
  forgotPassword,
  resetPassword,
  getMyPosts,
  getUserPosts,
} from "../controllers/user.js";
import isAuthenticated from "../middelware/auth.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);
router.get("/logout", logout);
router.get("/follow/:id", isAuthenticated, followUser);
router.put("/update/password", isAuthenticated, updatePassword);
router.put("/update/profile", isAuthenticated, updateprofile);
router.delete("/delete/me", isAuthenticated, deleteProfile);
router.get("/me", isAuthenticated, myProfile);
router.get("/user/:id", isAuthenticated, getUserProfile);
router.get("/users", isAuthenticated, getAllUser);

router.get("/my/posts",isAuthenticated,getMyPosts)

router
  .get("/userposts/:id", isAuthenticated, getUserPosts)
  

router.post("/forgot/password", forgotPassword)

router.put("/password/reset/:token", resetPassword)
export default router;
