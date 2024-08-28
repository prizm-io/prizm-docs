import DashboardButton from "./dashboard-button";
import NavigationItem from "./navigation-item";

interface NavItem {
  name: string;
  active?: (path: string) => boolean;
}

const NavItems = [
  {
    name: "Home",
    active: (path: string) => path === "/",
  },
  {
    name: "Solution",
    active: (path: string) => path.includes("/solution"),
  },
];

export default function Navigation() {
  const currentPath = window.location.pathname;

  return (
    <div className="w-full h-24 py-[25px] border-b border-[#151934] flex-col justify-start items-center inline-flex">
      <div className="w-full max-w-[1224px] justify-between items-center inline-flex">
        <div className="h-9 px-[3px] py-0.5 justify-start items-start gap-px flex">
          <img className="w-[110.61px] h-8" src="/img/mono.png" />
        </div>
        <div className="justify-center items-center gap-[15px] flex">
          {NavItems.map((item: NavItem) => (
            <NavigationItem active={item.active(currentPath)}>
              {item.name}
            </NavigationItem>
          ))}
        </div>
        <DashboardButton>Dashboard</DashboardButton>
      </div>
    </div>
  );
}
