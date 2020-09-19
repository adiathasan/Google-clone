import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar className="home__headerAvatar" />
        </div>
      </div>
      <div className="home__body">
        <img
          className="home__logo"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
      </div>
      <Search />
    </div>
  );
}

export default Home;
