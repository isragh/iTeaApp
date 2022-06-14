import express from "express";
import dotenv from "dotenv";
import { route } from "./routes/route.js"


dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT;


app.use(express.json());
app.use("/", route );

app.listen(PORT, () => console.log(`Application is listening to port: ${PORT}`))