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
    const [main, services] = await Promise.all([
      database("business_card_main"),
      database("business_card_service").where({
        id: req.params.id,
      }),
    ]);

    const business = main[0];
    business.services = services;

    res.status(200).json(business);
  } catch (err) {
    console.log(err);

    res.status(200).json({
      business: [],
    });
  }
});

export const business = router;
