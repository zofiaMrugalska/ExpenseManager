import Context from "../Context";
import { Link } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { FiMenu, FiSun } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useState, useContext, useRef, useEffect } from "react";

const Navbar = () => {
  const { mode, toggleMode } = useContext(Context);

  const [isIconMenuOrClose, setIsIconMenuOrClose] = useState(true);

  const menuRef = useRef(null);

  const toggleIconsMenu = () => {
    setIsIconMenuOrClose(!isIconMenuOrClose);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsIconMenuOrClose(true);
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <section>
      <nav className=" font-K2D flex items-end justify-between ">
        <h1 className=" text-2xl sm:text-4xl font-bold">ExpenseManager</h1>
        <ul className=" hidden md:flex items-center gap-8 text-xl">
          <Link to={"/"} className=" font-semibold hover:scale-110 hover:text-green-600">
            Home
          </Link>
          <Link to={"/expenses"} className=" font-semibold hover:scale-110 hover:text-green-600">
            Expenses
          </Link>
          {mode === "light" ? (
            <FaRegMoon
              onClick={toggleMode}
              size={18}
              className="cursor-pointer hover:scale-125  hover:text-green-600"
            />
          ) : (
            <FiSun
              onClick={toggleMode}
              size={24}
              className="cursor-pointer hover:scale-125  hover:text-green-600"
            />
          )}
        </ul>

        {isIconMenuOrClose ? (
          <FiMenu
            onClick={toggleIconsMenu}
            size={30}
            className="relative cursor-pointer md:hidden z-50"
          />
        ) : (
          <RxCross2
            onClick={toggleIconsMenu}
            size={30}
            className="relative cursor-pointer md:hidden z-50 text-white"
          />
        )}
      </nav>

      <aside
        ref={menuRef}
        className={
          isIconMenuOrClose
            ? "hidden"
            : "fixed right-0 top-0 w-[30%] h-full text-white bg-black opacity-90 md:hidden "
        }
      >
        <ul
          className="flex flex-col justify-center items-center py-8 mt-10
          gap-6 text-xl "
        >
          <Link to={"/"} className=" font-semibold hover:scale-110 hover:text-green-600">
            Home
          </Link>
          <Link
            to={"/expenses"}
            className=" block font-semibold hover:scale-110 hover:text-green-600"
          >
            Expenses
          </Link>

          {mode === "light" ? (
            <FaRegMoon
              onClick={toggleMode}
              size={18}
              className="cursor-pointer hover:scale-125  hover:text-green-600"
            />
          ) : (
            <FiSun
              onClick={toggleMode}
              size={24}
              className="cursor-pointer hover:scale-125  hover:text-green-600"
            />
          )}
        </ul>
      </aside>
    </section>
  );
};
export default Navbar;
