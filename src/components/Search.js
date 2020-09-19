import React, { useState, useEffect, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "../css/search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { searchContext } from "../data/searchContext";
import { Link } from "react-router-dom";
import RoomIcon from "@material-ui/icons/Room";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ImageIcon from "@material-ui/icons/Image";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Search({ hidden = false }) {
  const { dispatch } = useContext(searchContext);
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    if (input === "") {
      console.warn("Input not Given");
    } else {
      dispatch({
        type: "KEYWORD_ADDED",
        keyword: input,
      });
      history.push("/search");
    }
  };
  return (
    <form className="search">
      <div className={`search__input ${hidden && " hidden"}`}>
        <SearchIcon />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {hidden && (
        <div className="search__options">
          <div className="search__optionsRight">
            <div className="search__option active">
              <SearchIcon />
              <Link to="/search">All</Link>
            </div>
            <div className="search__option">
              <RoomIcon />
              <Link to="/maps">Maps</Link>
            </div>
            <div className="search__option">
              <VideoLibraryIcon />
              <Link to="/videos">Videos</Link>
            </div>
            <div className="search__option">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="search__option">
              <InsertCommentIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="search__option">
              <MoreVertIcon />
              <Link to="/more">More</Link>
            </div>
          </div>
          <div className="search__optionsLeft">
            <div className="search__option">
              <Link to="/settings">Settings</Link>
            </div>
            <div className="search__option">
              <Link to="/tools">Tools</Link>
            </div>
          </div>
        </div>
      )}
      <div className={!hidden ? "search__btns" : "search__btnsHidden"}>
        <Button onClick={search} type="submit">
          Google Search
        </Button>
        <Button>
          <a
            style={{
              textDecoration: "none",
              color: " #6d6969 ",
            }}
            href="https://www.google.com/doodles/"
          >
            I'm Feeling Lucky
          </a>
        </Button>
      </div>
    </form>
  );
}

export default Search;
