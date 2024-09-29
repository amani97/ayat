import { NavLink } from "react-router-dom";
import  Offers  from "../assets/ic_offers.svg"
import chart from "../assets/chart.svg"
import doctor from "../assets/doctor.svg";
import drug from "../assets/drug.svg";
import drugs from "../assets/drugs.svg"
import home from "../assets/home.svg";
import instat from "../assets/instat.svg";
import myInstat from "../assets/my-instat.svg";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <aside className="w-64 h-screen rounded-2xl bg-gray-50 shadow-lg flex flex-col">
      {/* User Info */}
      <div className="p-4 flex justify-between items-center">
        <img
          src={user?.image}
          alt="User"
          className="w-16 h-16 rounded-full mb-2"
        />
        <h2 className="text-lg font-semibold">{user?.username}</h2>
        <img src={chart} alt="chart" />
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow">
        <ul className="space-y-4 ml-4 py-1">
          <li>
            <NavLink to="#" className="flex items-center space-x-2 active py-2">
              <img src={home} />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="Institutions" className="flex items-center space-x-2 ">
              <img src={myInstat} alt="r" />
              <span>My Institutions</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="Institutions" className="flex items-center space-x-2 ">
              <img src={instat} alt="r" />
              <span>Institutions</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="drug" className="flex items-center space-x-2 ">
              <img src={drug} alt="r" />
              <span>Drugs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="doctor" className="flex items-center space-x-2 ">
              <img src={doctor} alt="r" />
              <span>Doctor Online</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="drugs" className="flex items-center space-x-2 ">
              <img src={drugs} alt="r" />
              <span>Search Drugs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="Offers" className="flex items-center space-x-2 ">
              <img src={Offers} />
              <span>Offers</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
