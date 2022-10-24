const axios = require("axios");
const { baseURL } = require("../utils/utils");
const queryPokemon = async (searchTerm) => {
  try {
    const r = await axios.get(baseURL + "/pokemon/" + searchTerm);
    const about = {
      name: r.data.name,
      id: r.data.id,
      weight: r.data.weight,
      height: r.data.height,
    };
    const stats = r.data.stats;
    const moves = r.data.moves.map((e) => {
      const moveName = e.move.name
        .replaceAll("-", " ")
        .split(" ")
        .map((c) => {
          return c.charAt(0).toUpperCase() + c.substring(1);
        })
        .join(" ");
      return {
        level: e.version_group_details[0].level_learned_at,
        moveName: moveName,
        learnedMethod: e.version_group_details[0].move_learn_method.name,
      };
    });
    return { about: about, stats: stats, moves: moves };
  } catch (e) {
    console.log(e);
    return new Error(e);
  }
};

module.exports = { queryPokemon };
