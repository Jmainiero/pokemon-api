const axios = require("axios");
const { baseURL } = require("../utils/utils");
const queryPokemon = async (searchTerm) => {
  try {
    const r = await axios.get(baseURL + "pokemon/" + searchTerm);
    const about = {
      name: r.data.name,
      id: r.data.id,
      weight: `${r.data.weight / 10} kg`,
      height: `${r.data.height / 10} m`,
      species: await querySpecies(r.data.species.url),
    };
    const stats = r.data.stats;
    const images = r.data.sprites.front_default;
    const types = r.data.types.map((e) => {
      return e.type.name;
    });
    const abilities = r.data.abilities.map((e) => {
      return e.ability.name;
    });
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
    return {
      about: about,
      stats: stats,
      moves: moves,
      img: images,
      abilities: abilities,
      types: types,
    };
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

const querySpecies = async (url) => {
  try {
    const r = await axios.get(url);
    return r.data.genera
      .filter((e) => {
        if (e.language.name === "en") return e;
      })[0]
      .genus.replace("Pokémon", "");
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

module.exports = { queryPokemon };
