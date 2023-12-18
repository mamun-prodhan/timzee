import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_1.webp";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUser, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import bdFlag from "../../assets/bangladesh.png";
const MenuBar = () => {
  let [open, setOpen] = useState(false);
  let navLinks = (
    <>
      <li className="md:ml-4 text-lg md:my-0 my-7">
        <NavLink
          to="/"
          className="text-[#9E9FA3] font-semibold uppercase hover:text-[#C69C6F] duration-300 cursor-pointer"
        >
          Home
        </NavLink>
      </li>
      <li className="md:ml-2 text-xl md:my-0 mb-7">
        <NavLink
          to="donation-request"
          className="text-[#9E9FA3] font-semibold uppercase hover:text-[#C69C6F] duration-300 flex items-center gap-0.5 cursor-pointer"
        >
          Shop
          <RiArrowDropDownLine />
        </NavLink>
      </li>
      <li className="md:ml-2 text-xl md:my-0 mb-7">
        <NavLink
          to="/blogs"
          className="text-[#9E9FA3] font-semibold uppercase hover:text-[#C69C6F] duration-300 flex items-center gap-0.5 cursor-pointer"
        >
          Pages
          <RiArrowDropDownLine />
        </NavLink>
      </li>
      <li className="md:ml-2 text-xl md:my-0 mb-7">
        <NavLink
          to="/fundings"
          className="text-[#9E9FA3] font-semibold uppercase hover:text-[#C69C6F] duration-300 cursor-pointer"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-md w-full ">
      <div className="bg-[#0E1D55] md:flex items-center justify-between py-4 md:px-10 px-7  ">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <img className="" src={logo} alt="" />
        </div>
        <ul className="md:flex md:items-center gap-5 hidden">{navLinks}</ul>
        <div className="pb-12 md:pb-0 hidden md:block">
          <div className="flex gap-5 items-center">
            <FaUser className="text-[#9E9FA3] font-semibold uppercase hover:text-[#C69C6F] duration-300 text-lg cursor-pointer" />
            <FaBagShopping className="text-[#9E9FA3] font-semibold uppercase hover:text-[#C69C6F] duration-300 text-lg cursor-pointer" />
            <FaSearch className="text-[#9E9FA3] font-semibold uppercase hover:text-[#C69C6F] duration-300 text-lg cursor-pointer" />
            <div className="flex items-center gap-0.5 text-[#9E9FA3] font-semibold uppercase hover:text-[#C69C6F] duration-300 text-lg cursor-pointer">
              <span>BD</span>
              <img src={bdFlag} alt="" />
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        {/* for mobile responsive */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <AiOutlineMenu></AiOutlineMenu>
          )}
        </div>
        <div
          className={`z-[1000] md:hidden absolute bg-red-100 left-0 w-full pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 opacity-100" : "top-[-490px]"
          } opacity-0`}
        >
          <ul className="md:flex md:items-center gap-5">{navLinks}</ul>
          <div className="pb-12 md:pb-0 flex items-center gap-5">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>

            <button>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
