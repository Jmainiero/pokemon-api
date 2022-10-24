const express = require("express");
const router = express.Router();
const { queryPokemon } = require("../services/services");

router.get("/queryPokemon", async (req, res, next) => {
  try {
    const { query } = req.query;
    console.log(`Request Query: ${query}`);
    if (!query) return next(new Error("Invalid Query. Please Try Again"));

    const r = await queryPokemon(query.toLowerCase());
    res.json({ data: r }).status(204);
  } catch (e) {
    return next(new Error(e));
  }
});

module.exports = router;
