import Link from "next/link";


const NavBar = () => {
  return (
    <div className="navbar bg-base-200">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl capitalize">clean simple</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img className="w-10 h-10" src="https://attitudematterz.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-06-28-at-1.11.36-PM-modified.png" alt="logo"/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link href='/dashboard'>Dashboard</Link></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default NavBar;
