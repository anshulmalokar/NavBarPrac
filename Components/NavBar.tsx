"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import Image from "next/image";
type Props = {};

export default function NavBar({}: Props) {
  const [navBarVisible, setNavBarVisible] = useState(false);

  const NavLinks = [
    {
      label: "Collections",
      link: "#",
    },
    {
      label: "Collections1",
      link: "#",
    },
    {
      label: "Collections2",
      link: "#",
    },
    {
      label: "Collections3",
      link: "#",
    },
    {
      label: "Collections4",
      link: "#",
    },
  ];

  return (
    <>
      <main>
        <nav className="flex justify-between items-center px-6 py-4 w-screen">
          <section className="flex items-center">
            {/* Menu */}
            <CiMenuBurger
              size={30}
              onClick={() => {
                setNavBarVisible(!navBarVisible);
              }}
            />
            {/* Logo */}
            <Link href="/">
              <span className="pl-3 text-2xl font-bold">Logo</span>
            </Link>
          </section>

          {/* mobile view */}
          {navBarVisible && (
            <>
              <div className="fixed lg:hidden top-0 right-0 left-0 bg-black/50 backdrop-blur-sm h-screen w-screen">
                <section className="w-56 bg-white h-screen flex flex-col items-center pt-10">
                  <RxCross1
                    className="text-2xl"
                    onClick={() => {
                      setNavBarVisible(!navBarVisible);
                    }}
                  />
                  {NavLinks.map((val, id) => {
                    return (
                      <div className="pt-10" key={id}>
                        <Link href={val.link}>
                          <span>{val.label}</span>
                        </Link>
                      </div>
                    );
                  })}
                </section>
              </div>
            </>
          )}

          <section className="flex items-center">
            {/* cart icon */}
            <CiShoppingCart size={30} />
            {/* Avatar image */}
            <div className="px-2">Logo</div>
          </section>
        </nav>
      </main>
      <hr />
    </>
  );
}
