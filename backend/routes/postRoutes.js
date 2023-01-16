const express = require("express");
const postRouter = express.Router()


const {
  addPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} = require("../controllers/postController")

router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
   });
postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.post("/", addPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

module.exports = postRouter
