import { NavLink } from 'react-router-dom';
import 'flowbite';
import { AiOutlineMenu, AiOutlineHome, AiOutlineCalendar, AiOutlineShop, AiOutlineUsergroupAdd, AiOutlineSetting } from "react-icons/ai"

function Sidebar() {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <AiOutlineMenu size={25} />
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineHome size={25} />
                <span className="ml-3">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="bookings"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineCalendar size={25} />
                <span className="flex-1 ml-3 whitespace-nowrap">Bookings</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="cabins"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineShop size={25} />ّ
                <span className="flex-1 ml-3 whitespace-nowrap">Cabins</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="users"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineUsergroupAdd size={25} />
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineSetting size={25} />
                <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
