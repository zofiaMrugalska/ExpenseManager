import Context from "../Context";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import Expenses from "./expenses/Expenses";
import Navbar from "./Navbar";

const Layout = () => {
  const { mode } = useContext(Context);
  return (
    <div
      className={` p-4 sm:p-6 sm:px-14  md:px-20 lg:px-40  xl:px-52 ${
        mode === "light" ? "bg-white text-gray-950" : " bg-[#1A1A1A] text-white"
      }`}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="*" element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Layout;
