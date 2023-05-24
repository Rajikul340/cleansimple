import Link from "next/link";


const DashboardSideBar = () => {
  return (
   
      <div className="drawer-side  ">
        <div className="text-center">
        <Link href='/dashboard' className="font-semibold text-xl "> <span className="text-blue-500">clean</span>simple </Link>
        </div>
         
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60  text-base-content">
          <li>
            <Link href='/dashboard/states'>states</Link>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    
  );
};

export default DashboardSideBar;
