import express from "express";
import likeAndUnlikePost from "../controllers/post/likeanddislike.js";
import deletePost from "../controllers/post/deletepost.js";
import createPost from "../controllers/post/post.js";
import isAuthenticated from "../middelware/auth.js";
import router from "./user.js";
import getPostOfFollowing from "../controllers/post/postofFollowing.js";
import updateCaption from "../controllers/post/updateCaption.js";
import commentOnPost, {
  deleteCommnet,
} from "../controllers/post/addComment.js";
const route = express.Router();

route.post("/post/upload", isAuthenticated, createPost);
router.get("/post/:id", isAuthenticated, likeAndUnlikePost);
router.put("/post/:id", isAuthenticated, updateCaption);
router.delete("/post/:id", isAuthenticated, deletePost);
router.get("/posts", isAuthenticated, getPostOfFollowing);
router.put("/post/comment/:id", isAuthenticated, commentOnPost);
router.delete("/post/comment/:id", isAuthenticated, deleteCommnet);

export default route;
