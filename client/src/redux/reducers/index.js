import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemonReducer";
const reducers = combineReducers({
  pokemon: pokemonReducer,
});
export default reducers;
