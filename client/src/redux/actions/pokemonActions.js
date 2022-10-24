import { ActionTypes } from "../constants/action-types";

export const setPokemon = (pokemon) => {
  return {
    type: ActionTypes.SET_POKEMON,
    payload: pokemon,
  };
};
