import express from "express";
import { database } from "../../db";

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const business = await database("business_card_main");

    res.status(200).json({
      business,
    });
  } catch (err) {
    console.log(err);

    res.status(200).json({
      business: [],
    });
  }
});

router.get("/one/:id", async (req, res) => {
  try {
    const [main = [], services = []] = await Promise.all([
      database("business_card_main").where({
        id: req.params.id,
      }),
      database("business_card_service").where({
        business_id: req.params.id,
      }),
    ]);

    if (main.length) {
      const business = main[0];

      business.services = services;

      res.status(200).json(business);
    } else {
      res
        .status(404)
        .json({ error: true, code: 404, message: "Запись не найдена" });
    }
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: true,
      code: 500,
      message: "Произошла техническая ошибка",
    });
  }
});

export const business = router;
