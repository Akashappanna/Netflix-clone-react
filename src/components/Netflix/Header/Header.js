import React, { useEffect, useState } from "react";
import logo from "../../../assests/NetFlixLogo.png";
import { FaSearch, FaBell } from "react-icons/fa";
import profile from "../../../assests/NetflixAvatar.png";
import {Link} from 'react-router-dom';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [checkIcon,setCheckIcon]=useState(false)

  const changeBg = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBg);

    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  const checkProfileHandler=()=>{
    setCheckIcon(prevState => !prevState);
  }

  return (
    <div
      className={`flex flex-row justify-between items-center px-4 py-2 w-full m-auto fixed z-10 ${
        isVisible && "bg-black"
      }`}
    >
      <div className="flex flex-row justify-start items-center w-3/5">
        <img src={logo} alt="logo" className="w-20 md:w-30 lg:w-40 " />
        {/* <span className="block">Home</span>
        <span className="block">TV Shows</span>
        <span className="block">Movies</span>
        <span className="block">News & Popular</span>
        <span className="block">My List</span> */}
      </div>

      <div className="flex flex-row justify-end items-center mr-6">
        <FaSearch className="w-10 fill-white" />
        <FaBell className="w-10 fill-white" />
        {/* <img src={profile} alt="logo" className="w-1/6" onClick={checkProfileHandler}/> */}
        <div className="relative inline-block text-left w-1/6">
          <img src={profile} alt="logo"  onClick={checkProfileHandler}/>
          {checkIcon && <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div className="py-1" role="none">
              <Link to='/' className="text-gray-700 block px-4 py-2 hover:bg-black hover:text-white text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</Link>
              <Link to='/' className="text-gray-700 block px-4 py-2 text-sm hover:bg-black hover:text-white" role="menuitem" tabindex="-1" id="menu-item-1">Support</Link>
              <Link to='/' className="text-gray-700 block px-4 py-2 text-sm hover:bg-black hover:text-white" role="menuitem" tabindex="-1" id="menu-item-2">License</Link>
              <Link to='/'>
                <button type="submit" className="text-gray-700 block w-full hover:bg-black hover:text-white text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
                  Sign out
                  </button>
              </Link>
            </div>
          </div>}
        </div>
      </div>
      {/* src="blob:https://www.netflix.com/d34809d8-69b8-497c-a528-3a4d31fc4461" */}
      {/* <div className="absolute">
        <video autoPlay loop muted>
          <source
            src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfOAKSgbvbm6v7lMesW-zGWctI1FXhCLnkYBckPNSr_RHBnRz4yXcVxf8gJ4uH5UCxO-ZjA6BSfw1dmKUSYl-3T0FCpce1spmzt3.jpg?r=7f5"
            type="video/mp4"
          />
        </video>
      </div> */}
      </div>

  );
};

export default Header;
