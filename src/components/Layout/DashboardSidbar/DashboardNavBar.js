import { BiMessage } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";

const DashboardNavBar = () => {
  return (
    <div className="navbar mt-5">
      <div className="flex-1">
      
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered rounded-3xl w-80 h-10 bg-base-200"
          />
        </div>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end flex">
          <span className="bg-base-300 rounded-full p-2">
            <BiMessage size={23} />
          </span>
          <span className="bg-base-300 rounded-full p-2 mx-3">
            <GrNotification size={23} className="" />
          </span>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                className="w-10 h-10"
                src="https://attitudematterz.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-06-28-at-1.11.36-PM-modified.png"
                alt="logo"
              />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavBar;
