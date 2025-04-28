import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIsSideBarOpen } from "../Redux/appSlice";
import { Link } from "react-router-dom";
import { SEARCH_API } from "../Utils/constants";
import { addSearchCache } from "../Redux/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store)=> store.searchStore)
  

  
  useEffect(()=> {
    const timer = setTimeout(() => {
      if(searchCache[searchText]) {
        setSearchSuggestion(searchCache[searchText]);
      }
      else {
        fetchSearchData()
      }

    }, 150);

    return ()=> clearTimeout(timer);

  },[searchText])

  const fetchSearchData = async() => {
    const response = await fetch(SEARCH_API(searchText));
    const data = await response.json();
    
    setSearchSuggestion(data[1])
    dispatch(addSearchCache({
      [searchText] : data[1]
    }))
  }

  const toggleSideBar = () => {
    dispatch(addIsSideBarOpen());
  };

  return (
    <div className="shadow-lg">
      <div className="grid grid-flow-col grid-cols-12 content-center items-center  min-h-16 justify-between w-[98%] mx-auto">
        <div className="flex items-center col-span-1">
          <span className="text-2xl cursor-pointer" onClick={toggleSideBar}>
            =
          </span>
          <Link to={"/"}>
            <img
              src="/youtube-logo.svg"
              className="w-32 h-10"
              alt="vtube logo"
            />
          </Link>
        </div>

        <div className="col-span-10">
          
          <div className="flex justify-center relative">
          <input
            type="text"
            className="border border-neutral-500  focus:border-neutral-900 transition-all duration-200 ease-in-out focus:shadow py-2 focus:outline-none rounded-l-full pl-6 pr-2 w-[40%]"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            onFocus={()=> setShowSuggestion(true)}
            onBlur={()=> setShowSuggestion(false)}

          />
          <button className="bg-neutral-500 text-white px-4 rounded-r-full">
            Search
          </button>

          </div>
          <div className="absolute w-[50%] mt-2 flex justify-center">
            {showSuggestion && searchSuggestion && <ul className="bg-white px-20 rounded-xl border border-neutral-300">
              {searchSuggestion.map((item)=> <li key={item}>{item}</li>)}
            </ul>}
          </div>
        </div>

        <div className="col-span-1">
          <img
            src="https://purepng.com/public/uploads/large/purepng.com-user-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596134a4bio.png"
            className="w-10"
            alt="user icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
