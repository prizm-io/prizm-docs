import { useState } from "react";
import DashboardButton from "./dashboard-button";
import HamburgerButton from "./hamburger-button";
import NavigationItem from "./navigation-item";
import { NavItem, NavItems } from "./navigation-item-list";
import Drawer from "./drawer";
import DrawerButton from "./drawer-button";
import { useLocation } from "@docusaurus/router";

export default function Navigation() {
  const location = useLocation();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="w-full h-24 py-[25px] border-b border-[#151934] justify-center items-center inline-flex">
      <div className="w-full max-w-[1224px] justify-between items-center inline-flex">
        <div className="h-9 px-[3px] py-0.5 justify-start items-start gap-px flex">
          <img className="w-[110.61px] h-8" src="/img/mono.png" />
        </div>
        <div className="justify-center items-center gap-[15px] hidden lg:flex">
          {NavItems.map((item: NavItem) => (
            <NavigationItem
              key={`nav-item-${item.name}`}
              active={item.active(location.pathname)}
            >
              {item.name}
            </NavigationItem>
          ))}
        </div>
        <div className="hidden lg:block">
          <DashboardButton>Dashboard</DashboardButton>
        </div>
        <div className="lg:hidden">
          <HamburgerButton onClick={() => setIsDrawerOpen(true)} />
        </div>
      </div>
      <div className="lg:hidden">
        <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              {NavItems.map((item: NavItem) => (
                <DrawerButton key={`drawer-nav-item-${item.name}`}>
                  {item.name}
                </DrawerButton>
              ))}
            </div>
            <DashboardButton>Dashboard</DashboardButton>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
