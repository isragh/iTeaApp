import { data } from "../datasets/data.js";

export const newTea = (req, res) => {
    const person = data.filter((data) => data.username === req.user.name);
    person[0].favTea.push(req.body.newTea);
    res.json(person);
}
