const axios = require("axios");
const { baseURL } = require("../utils/utils");
const queryPokemon = async (searchTerm) => {
  try {
    const r = await axios.get(baseURL + "pokemon/" + searchTerm);
    const speciesInfo = await querySpecies(r.data.species.url); //Returns Gender Percentages & Species information
    const about = {
      name: r.data.name,
      weight: `${r.data.weight / 10} kg`,
      height: `${r.data.height / 10} m`,
      species: speciesInfo.species,
    };
    const stats = r.data.stats;
    //Default Sprites
    const images = r.data.sprites.front_default;
    const types = r.data.types.map((e) => {
      return e.type.name;
    });
    //Includes Standard & Hidden abilities
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
      id: r.data.id,
      stats: stats,
      moves: moves,
      img: images,
      abilities: abilities,
      types: types,
      gender: speciesInfo.gender,
      eggGroups: speciesInfo.eggGroups,
      hatchRate: speciesInfo.hatch_rate,
    };
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

const querySpecies = async (url) => {
  try {
    const r = await axios.get(url);
    console.log(r.data);
    return {
      species: r.data.genera
        .filter((e) => {
          if (e.language.name === "en") return e;
        })[0]
        .genus.replace("Pokémon", ""),
      gender: {
        //Gender percentages are out broken in to 8 parts : 100 /8 = 12.5, gender_rate is the number of parts to make a pokemon female.
        female: r.data.gender_rate * 12.5,
        male: 100 - r.data.gender_rate * 12.5,
        genderless: r.data.gender_rate === -1 ? true : false,
      },
      eggGroups: r.data.egg_groups.map((e) => {
        return e.name.charAt(0).toUpperCase() + e.name.substring(1);
      }),
      hatch_rate: 255 * (r.data.hatch_counter + 1), //hatch_rate is equal to 255 * (hatch_counter + 1), where 255 is default steps
    };
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

module.exports = { queryPokemon };
