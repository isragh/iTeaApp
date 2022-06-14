import express from "express";
import { authoriseToken } from "../middleware/authoriseToken.js";
import { getPost } from "../controllers/getPost.js";
import { postLogin } from "../controllers/postLogin.js";
import { newTea } from "../controllers/newTea.js";



const route = express.Router();

route.get("/post", authoriseToken, getPost);

route.post("/login", postLogin);

route.post("/newTea", authoriseToken, newTea)

export { route };