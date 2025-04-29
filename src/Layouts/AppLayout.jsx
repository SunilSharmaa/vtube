import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const AppLayout = () => {
  return (
    <div className="bg-gray-50">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
