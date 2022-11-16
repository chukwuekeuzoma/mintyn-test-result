import React from "react";
import "./SearchInput.scss";
import SearchIcon from "../../Asset/Svg/Search.svg";

interface Props {
  getValue(): string;
  text?: string;
}

function SearchInput({ getValue, text }: Props) {
  return (
    <div className="search-container">
      <img src={SearchIcon} alt="searchicon" />
      <input
        type="text"
        placeholder={`${text}`}
        onChange={getValue}
        className="search-input"
      />
    </div>
  );
}

export default SearchInput;
