import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    res.json({
        posts: []
    });
});

export const news = router;