import React, { useState } from 'react'
import "./Navigation.css";
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogin, AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

const LOGIN = '/login', REGISTER = '/register';


const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => { setDropdownOpen(!dropdownOpen) }

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const closeSidebar = () => setShowSidebar(false);



  return (
    <div  className={` ${showSidebar ? "hidden" : "flex"} xl:flex lg:flex md:hidden sm:hidden flex-col justify-between p-4 w-[4%] hover:w-[15%] h-[100vh] fixed `}
      id="navigation-container"
      style={{ zIndex: 999, backgroundColor:'black' }}
    >
      <div className="flex flex-col justify-center space-y-4">
        <Link to="/" className='flex items-center transition-transform hover: translate-x-2 '>
          <AiOutlineHome size={26} className='mr-2 mt-[3rem] text-white' />
          <span className='hidden nav-item-name mt-[3rem] text-white'>
            HOME</span>
        </Link>

        <Link to="/shop" className='flex items-center transition-transform hover: translate-x-2 '>
          <AiOutlineShopping size={26} className='mr-2 mt-[3rem] text-white' />
          <span className='hidden nav-item-name mt-[3rem] text-white'>
            SHOPPING</span>
        </Link>
        <Link to="/cart" className='flex items-center transition-transform hover: translate-x-2 '>
          <AiOutlineShoppingCart size={26} className='mr-2 mt-[3rem] text-white' />
          <span className='hidden nav-item-name mt-[3rem] text-white'>
            CART</span>
        </Link>

        <Link to="/favorite" className='flex items-center transition-transform hover: translate-x-2 '>
          <FaRegHeart size={26} className='mr-2 mt-[3rem] text-white' />
          <span className='hidden nav-item-name mt-[3rem] text-white'>
            FAVORITE</span>
        </Link>
      </div>
    <ul>
      <li>
      <Link to={LOGIN} className='flex items-center transition-transform hover: translate-x-2 '>
          <AiOutlineLogin size={26} className='mr-2 mt-[3rem] text-white' />
          <span className='hidden nav-item-name mt-[3rem] text-white'>
            LOGIN</span>
        </Link>
      </li>
      <li>
      <Link to={REGISTER} className='flex items-center transition-transform hover: translate-x-2 '>
          <AiOutlineLogin size={26} className='mr-2 mt-[3rem] text-white' />
          <span className='hidden nav-item-name mt-[3rem] text-white'>
            REGISTER</span>
        </Link>
      </li>
    </ul>
    </div>
  )
}

export default Navigation