"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FaSearch } from "react-icons/fa";
import { SiNike } from "react-icons/si";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-4">
      <Link href="/">
        <SiNike className="w-11 h-11" />
      </Link>
      {searchOpen && (
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring focus:border-blue-400"
        />
      )}
      <div className="flex items-center">
        <button className="mr-4" onClick={() => setSearchOpen(!searchOpen)}>
          <FaSearch />
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
