import { Link } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <section>
      <nav className=" font-K2D p-7 flex items-end justify-between ">
        <h1 className=" text-4xl font-bold">ExpenseManager</h1>
        <ul className=" hidden md:flex items-center gap-8 text-xl">
          <Link to={"/"} className=" font-semibold hover:scale-110 hover:text-green-600">
            Home
          </Link>
          <Link to={"/expenses"} className=" font-semibold hover:scale-110 hover:text-green-600">
            Expenses
          </Link>
          <FaRegMoon size={18} className="cursor-pointer hover:scale-125  hover:text-green-600" />
        </ul>

        <FiMenu size={30} className="md:hidden" />
      </nav>

      <aside className="md:hidden">
        <div className=" fixed right-0 top-0 w-[30%] h-full text-white bg-black opacity-90">
          <ul className="flex flex-col justify-center items-center py-8 mt-10 gap-6 text-xl ">
            <Link to={"/"} className=" font-semibold hover:scale-110 hover:text-green-600">
              Home
            </Link>
            <Link
              to={"/expenses"}
              className=" block font-semibold hover:scale-110 hover:text-green-600"
            >
              Expenses
            </Link>
            <FaRegMoon size={18} className="cursor-pointer hover:scale-125  hover:text-green-600" />
          </ul>
        </div>
      </aside>
    </section>
  );
};
export default Navbar;
