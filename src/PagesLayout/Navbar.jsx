import { ArrowBigRight, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="px-custom py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <h1 className="text-4xl font-bold">
              Ford
              <span className="text-transparent bg-gradient-to-r from-red-500 to-blue-950 bg-clip-text">
                X
              </span>
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex gap-10 items-center">
            <ul className="flex sm:gap-5 lg:gap-10 items-center">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.link}
                    className="text-blue-950 md:text-sm lg:text-lg hover:text-blue-700"
                  >
                    {item.name}
                  </Link>
                </li>
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
              <div className="fixed inset-0 bg-white z-50 flex flex-col p-8">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setOpen(false)}
                    className="cursor-pointer text-blue-950"
                  >
                    <X size={32} />
                  </button>
                </div>

                {/* Links */}
                <ul className="flex flex-col gap-6 text-left">
                  {navLinks.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.link}
                        onClick={() => setOpen(false)}
                        className="text-blue-950 text-xl font-medium hover:text-blue-700"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-10">
                  <button className="flex gap-3 items-center bg-blue-950 text-amber-50 px-6 py-3 rounded-[40px] text-lg">
                    Get Started{" "}
                    <span className="bg-white text-blue-950 p-1 rounded-full">
                      <ArrowBigRight />
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setOpen(true)}
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
