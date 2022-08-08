import express from "express";
import {database} from "../../db";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const posts = await database('news');

        res.status(200).json({
            posts,
        });
    } catch (err) {
        console.log(err)

        res.status(200).json({
            posts: [],
        });
    }
});

export const news = router;