import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar ">
        <Link href="/">Home</Link>
        <Link href="/service">Service</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      </div>
    </>
  );
}

export default Navbar;
