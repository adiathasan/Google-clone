import React, { useContext, useEffect } from "react";
import { searchContext } from "../data/searchContext";
import useGoogle from "../hooks/useGoogle";
import Search from "./Search";

export const API_KEY = "AIzaSyBT8AA4DxrSlRg2di1nRuVW6MBG1uUTYyI";

function SearchedPage() {
  const { keyword } = useContext(searchContext);
  const { data } = useGoogle(keyword);
  useEffect(() => {
    document.title = keyword + " - Google Search";
    console.log(data);
  });
  return (
    <div className="searchedPage">
      <div className="searchPage__header">
        <Search hidden />
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchedPage;
