import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Header />
      <div className="p-2 content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
