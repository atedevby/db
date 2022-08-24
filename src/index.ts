import express from "express";
import cors from "cors";
import { news } from "./controllers/news";
import { business } from "./controllers/business";
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/news", news);
app.use("/business", business);

app.use("*", (request, response) => {
    response.status(404).json({
        error: true,
        message: "Роут не найден",
    });
});

app.listen(port, () => console.log(`Running on port http://localhost:${port}`));