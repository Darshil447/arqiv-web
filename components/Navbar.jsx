"use client";
import { React, useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    const [clickHamburger, setClickHamburger] = useState(false);
    const [color, setColor] = useState(false);
    const [activeItem, setActiveItem] = useState("/");

    const handleClick = () => setClickHamburger(!clickHamburger);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    useEffect(() => {
        // Determine the active route based on the current URL pathname
        setActiveItem(window.location.pathname);
    }, []);

    const handleItemClick = (path) => {
        setActiveItem(path);
        setClickHamburger(false); // Close hamburger menu after item click
    };


    return (
        <div
            className={`flex justify-between items-center fixed w-full h-20 z-20 font-ginger transition-colors duration-300 ${
                color ? "bg-white/90 backdrop-blur-sm shadow-sm border-b border-[#D3D3D3]/40" : "bg-transparent"
            }`}
        >
            <div className="pt-[10px] lg:pt-[50px] lg:pl-[153.36px] pl-[20px]">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={150}
                        height={100}
                        className="lg:w-[150px] lg:h-[100px] md:w-[150px] md:h-[100px] w-[150px] h-[100px]"
                    />
                </Link>
            </div>

            <div
                className={`${
                    clickHamburger
                        ? "flex flex-col  w-full h-auto fixed top-0 left-0 transition-all duration-300 bg-black bg-opacity-95 -z-20 pb-9 px-[20px]"
                        : "hidden lg:flex lg:justify-center lg:items-center"
                } flex lg:h-[48px] lg:pt-[48px] lg:gap-[36px] lg:mr-36 lg:text-[16px] text-[24px] pt-28 gap-[20px]`}
            >

                            </div>
            <div
                onClick={handleClick}
                className="lg:hidden pr-3 pt-[10px]"
            >
                {clickHamburger ? (
                    <FaTimes size={25} className="text-white" />
                ) : (
                    <FaBars size={25} className="text-black" />
                )}
            </div>
        </div>
    );
};

export default Navbar;
