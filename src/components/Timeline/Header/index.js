import React, { useState, useEffect } from "react";
import ProfileImage from "components/ProfileImage";
import TimelineCover from "components/Timeline/Cover";
import "./styles.scss";

function Header({ data }) {
  const { profileImagePath = null, coverImagePath = null, name = "" } = data;
  return (
    <div className="headerWrapper">
      <div className="cover">
        <TimelineCover src={coverImagePath} />
      </div>
      <div className="subHeader">
        <div className="profileImageWrapper">
          <ProfileImage size="x9" src={profileImagePath} />
        </div>
        <div className="infoWrapper">
          <span className="name">{name}</span>
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  data: {
    profileImagePath: null,
    coverImagePath: null,
    name: ""
  }
};

export default Header;
