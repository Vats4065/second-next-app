import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";

function ErrorPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container text-center mt-5">
        <h1>404 Page not found</h1>
        <Link href="/">back to home</Link>
      </div>
    </>
  );
}

export default ErrorPage;
