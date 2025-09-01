import { ArrowBigRight, Menu, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/services" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="px-custom py-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Ford
              <span className="text-transparent bg-gradient-to-r from-red-500 to-blue-950 bg-clip-text">
                X
              </span>
            </h1>
          </div>
          <div className="hidden sm:flex gap-10 items-center">
            <ul className="flex sm:gap-5 lg:gap-10 items-center">
              {navLinks.map((item, idx) => (
                <button>
                  <Link key={idx} to={item.link}>
                    <li className="text-blue-950 md:text-sm lg:text-lg hover:text-blue-700">
                      {item.name}
                    </li>
                  </Link>
                </button>
              ))}
            </ul>
            <button className="flex gap-3 items-center bg-blue-950 text-amber-50 px-4 py-2 rounded-[40px] md:text-sm lg:text-lg">
              Get Started{" "}
              <span className="bg-white text-blue-950 p-1 rounded-full">
                <ArrowBigRight />
              </span>
            </button>
          </div>

          {/* Mobile Navigation */}

          <div className="block sm:hidden">
            {open ? (
              <div className="relative">
                <button
                  onClick={() => setOpen((prev) => !prev)}
                  className="cursor-pointer text-blue-950"
                >
                  <X size={30} />
                </button>

                {/* Links */}
                <div className="bg-white shadow-md rounded-lg p-10 absolute right-7 h-screen">
                  <div className="flex flex-col md:hidden gap-10 items-left">
                    <ul className="flex flex-col gap-10 items-left">
                      {navLinks.map((item, idx) => (
                        <button onClick={() => setOpen((prev) => !prev)}>
                          <Link key={idx} to={item.link}>
                            <li className="text-blue-950 text-lg hover:text-blue-700">
                              {item.name}
                            </li>
                          </Link>
                        </button>
                      ))}
                    </ul>
                    <button className="flex gap-3 items-center bg-blue-950 text-amber-50 px-10 py-1 rounded-[40px] text-md">
                      Get Started{" "}
                      <span className="bg-white text-blue-950 p-1 rounded-full">
                        <ArrowBigRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="cursor-pointer text-blue-950"
              >
                <Menu size={30} />
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
