import Link from "next/link";
import { useRouter } from "next/router";
import {AiOutlineHome,AiFillSetting} from 'react-icons/ai'
import {BiBookContent} from 'react-icons/bi'

const DashboardSideBar = () => {

     const router = useRouter()

  return (
    <div className="drawer-side  ">
      <div className="text-center md:mt-10">
        <Link href="/dashboard" className="font-semibold text-xl ">
      
          <span className="text-blue-500">clean</span>simple
        </Link>
      </div>
       <p className="ml-10 mt-5">Admin Panel</p>
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-60  text-base-content">
        <li>
          <Link href="/dashboard"className={router.pathname === '/dashboard' ? 'active-link' : ''} > <AiOutlineHome size={20}/>Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/content"className={router.pathname === '/dashboard/content' ? 'active-link' : ''} > <BiBookContent size={20}/>Content</Link>
        </li>
        <li>
          <Link href="/dashboard/setting"className={router.pathname === '/dashboard/setting' ? 'active-link' : ''} > <AiFillSetting size={20}/>Setting</Link>
        </li>
       
      </ul>
       
    </div>
  );
};

export default DashboardSideBar;
