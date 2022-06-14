import { data } from "../datasets/data.js";

export const getPost = (req, res) => {
    res.json(data.filter(data => data.username === req.user.name));
}