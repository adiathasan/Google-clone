import React, { useState, useEffect, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "../css/search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { searchContext } from "../data/searchContext";

function Search({ hidden = false }) {
  const { dispatch } = useContext(searchContext);
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("bad move");
    } else {
      dispatch({
        type: "KEYWORD_ADDED",
        keyword: input,
      });
      history.push("/search");
    }
  };
  useEffect(() => {
    console.log(input);
  });
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hidden ? (
        <div className="search__btns">
          <Button onClick={search} type="submit">
            Google Search
          </Button>
          <Button>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__btnsHidden">
          <Button onClick={search} type="submit">
            Google Search
          </Button>
          <Button>I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
