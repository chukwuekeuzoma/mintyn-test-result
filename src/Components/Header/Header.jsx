import React, { useState } from "react";
import "./Header.scss";
import SearchInput from "../SearchInput/SearchInput.tsx";
import Bell from "../../Asset/Svg/bell-53.svg";
import Uzoma from "../../Asset/Img/Uzoma.jpg";

export default function Header() {
  const [terms, setTerms] = useState();
 

  return (
    <div className="header-main-container">
      <div className="header-main-container-one">
        <div className="trans-class">TransMonitor</div>
        <div className="SearchInput-container">
          <SearchInput
            text="Search..."
          />
        </div>
      </div>

      <div className="header-main-container-two">
        <div className="support">Support</div>
        <div className="faq">FAQ</div>
        <div className="bell-container">
          <div className="color-circle">3</div>
          <img src={Bell} alt="bell-icon" />
        </div>
        <div className="profile-name-container">
          <div>Hello</div>
          <div>Oluwaleke Ojo</div>
        </div>
        <div className="header-profile-container">
          <img src={Uzoma} alt="profile-pic" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}
