"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [searchTxt, setTxt] = useState("");

  const router = useRouter();

  const handlechange = (e) => {
    setTxt(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (searchTxt) {
      router.push(`/movies/search?query=${searchTxt}`);
      setTxt("");
    }
  };
  return (
    <form className="search" action="submit" onSubmit={handlesubmit}>
      <div className="inp">
        <input
          onChange={handlechange}
          value={searchTxt}
          type="text"
          placeholder="search here....."
        />
      </div>
      <button type="submit" className="click-btn">
        <IoSearch className="icon1" />
      </button>
    </form>
  );
};

export default SearchBar;
