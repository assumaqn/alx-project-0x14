import React from "react";
import Link from "next/link";
import LayoutButton from "./Button";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          MovieApp
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/movies" className="hover:text-gray-300">
            Movies
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <LayoutButton label="Sign in" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
