import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex justify-center items-center mt-8 mb-3">
      <ul className="flex gap-10 px-3 items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-[#fd9300] hover:text-[#4b5563] transition-colors duration-300 text-xl"
                : "font-medium text-[#4b5563] hover:text-[#fd9300] transition-colors duration-300 text-xl"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Income"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-[#fd9300] hover:text-[#4b5563] transition-colors duration-300 text-xl"
                : "font-medium text-[#4b5563] hover:text-[#fd9300] transition-colors duration-300 text-xl"
            }
          >
            Income
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Expense"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-[#fd9300] hover:text-[#4b5563] transition-colors duration-300 text-xl"
                : "font-medium text-[#4b5563] hover:text-[#fd9300] transition-colors duration-300 text-xl"
            }
          >
            Expense
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
