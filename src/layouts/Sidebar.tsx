import { BsCalendar4Event } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { LiaIdBadgeSolid } from "react-icons/lia";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";

type MenuItem = {
  href: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColorClass: string;
};

const menuItems: MenuItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    Icon: LuLayoutDashboard,
    iconColorClass: "text-purple-500",
  },
  {
    href: "/events",
    label: "Events",
    Icon: BsCalendar4Event,
    iconColorClass: "text-blue-500",
  },
  {
    href: "/speakers",
    label: "Speakers",
    Icon: LiaIdBadgeSolid,
    iconColorClass: "text-purple-500",
  },
  {
    href: "/sponsors",
    label: "Sponsors",
    Icon: GrUserManager,
    iconColorClass: "text-blue-500",
  },
  {
    href: "/delegates",
    label: "Delegates",
    Icon: HiOutlineUsers,
    iconColorClass: "text-purple-500",
  },
  {
    href: "/users",
    label: "Users",
    Icon: FiUsers,
    iconColorClass: "text-blue-500",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      {/* <div className="p-4 text-2xl font-bold">EVENT</div> */}
      <img src="/main-logo.png" alt="logo" className="h-10 w-auto" />
      <nav className="flex-1 px-2 space-y-1">
        {menuItems.map(({ href, label, Icon, iconColorClass }) => (
          <a
            key={href}
            href={href}
            className="group flex items-center px-2 py-2 text-sm font-medium rounded hover:bg-gray-100"
          >
            <Icon className={`h-5 w-5 mr-3 ${iconColorClass}`} />
            {label}
          </a>
        ))}
        <a
          href="#"
          className="group flex items-center px-2 py-2 text-sm font-medium rounded hover:bg-gray-100"
        >
          <RiLogoutCircleLine className="h-5 w-5 mr-3 text-purple-500" />
          Logout
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
