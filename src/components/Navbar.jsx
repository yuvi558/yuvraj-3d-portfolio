import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(5,8,22,0.75)] backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo / Brand */}
        <Link
          to='/'
          className='flex items-center gap-3'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className='w-12 h-12 rounded-2xl bg-[#915EFF] flex items-center justify-center shadow-[0_0_25px_rgba(145,94,255,0.45)]'>
            <span className='text-white text-[24px] font-extrabold'>Y</span>
          </div>

          <p className='text-white text-[18px] sm:text-[20px] font-bold cursor-pointer flex items-center leading-none'>
            Yuvraj
            <span className='hidden sm:block text-[#b8b8d1] font-semibold ml-2'>
              | Portfolio
            </span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className='list-none hidden md:flex flex-row gap-8 lg:gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative ${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[17px] font-medium cursor-pointer transition-all duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a
                href={`#${nav.id}`}
                className='relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#915EFF] after:transition-all after:duration-300 hover:after:w-full'
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <button
            type='button'
            className='w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(145,94,255,0.08)] border border-white/10 backdrop-blur-sm'
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[22px] h-[22px] object-contain'
            />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[rgba(10,12,28,0.95)] backdrop-blur-xl absolute top-20 right-4 min-w-[220px] z-20 rounded-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.45)]`}
          >
            <ul className='list-none flex justify-start items-start flex-1 flex-col gap-5 w-full'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white transition-all duration-300`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
