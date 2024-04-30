import React from "react";
import Link from "next/link";

const Navbar = () => {
  // Array of navigation links
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/avatar", text: "Avatar Sim" },
    { href: "/avatar-v2", text: "Chat v1" },
    { href: "/avatar-v3", text: "Chat v2" },
  ];

  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          {/* Logo/Home Link */}
          <Link href="/" className="btn btn-ghost text-xl">
            EEG Data Reader
          </Link>
        </div>
        <div className="flex-none">
          {/* Render navigation buttons */}
          {navLinks.map((link, index) => (
            <button className="btn btn-ghost" key={index}>
              <Link href={link.href}>
                <div className="flex p-2 gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  {link.text}
                </div>
              </Link>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
