import jwt from "jsonwebtoken";

export const postLogin = (req, res) => {
    const username = req.body.username;
    const user = {
        name: username,
    };
    const accessToken = jwt.sign(user, process.env.ACCESS_SECRET);
    res.json({
        accessToken
    });
}