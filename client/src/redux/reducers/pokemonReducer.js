import { ActionTypes } from "../constants/action-types";
const intialState = {
  pokemon: [],
};

export const pokemonReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POKEMON:
      return { ...state, pokemon: payload };
    default:
      return state;
  }
};
