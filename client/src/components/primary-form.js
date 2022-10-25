import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPokemon } from "../redux/actions/pokemonActions";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const Search = () => {
  let [loading, setLoading] = useState(false);
  let [redirect, setRedirect] = useState(false);
  let [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onClick = () => {
    window.alert("Button Clicked");
  };
  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let res = await axios({
        method: "get",
        url: `/queryPokemon`,
        params: {
          query: searchTerm,
        },
      });
      console.log(res);
      if (res.status === 200) {
        dispatch(setPokemon(res.data.data));
        setRedirect(true);
        console.log(res.status);
      } else {
        window.alert(res.status);
      }
    } catch (err) {
      console.log(err);
      window.alert(err);
    }
    setLoading(false);
  };

  return (
    <div className="primary-form float-child">
      <form onSubmit={handleSubmit}>
        <h1>Hello!</h1>
        <div className="custom-search">
          <input
            type="text"
            placeholder="Enter a Pokemon to Search..."
            className="custom-search-input"
            onChange={handleChange}
          />
          <button type="submit" className="custom-search-button">
            Submit
          </button>
        </div>
      </form>
      {redirect ? (
        <Navigate
          to={{
            pathname: "/search-results",
            search: `?search=${searchTerm}`,
          }}
        />
      ) : null}
    </div>
  );
};
