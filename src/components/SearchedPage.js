import React, { useContext, useEffect } from "react";
import { searchContext } from "../data/searchContext";
import useGoogle from "../hooks/useGoogle";
import Search from "./Search";
import { Link } from "react-router-dom";
import "../css/searchedPage.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

export const API_KEY = "AIzaSyBT8AA4DxrSlRg2di1nRuVW6MBG1uUTYyI";

function SearchedPage() {
  const { keyword } = useContext(searchContext);
  const { data } = useGoogle(keyword);
  const _data = data;
  useEffect(() => {
    document.title = keyword + " - Google Search";
    console.log(_data);
  });
  return (
    <div className="searchedPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt=""
          />
        </Link>
        <Search hidden />
        <div className="home__header searchedPage__icons">
          <div className="home__headerRight">
            <AppsIcon />
            <Avatar className="home__headerAvatar" />
          </div>
        </div>
      </div>
      <div className="searchPage__results">
        <p className="searchPage__resultsCount">
          About {_data?.searchInformation.formattedTotalResults} results (
          {_data?.searchInformation.searchTime} seconds)
        </p>
        {_data?.items?.map((data, i) => {
          return (
            <div key={i} className="searchPage__result">
              <a href={data.link}>{data.displayLink}</a>
              <a className="searchPage__resultsTitle" href={data.link}>
                <h2>{data.title}</h2>
              </a>
              <p className="searchPage__resultsSnippet">{data.snippet}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchedPage;
