export interface NavItem {
  name: string;
  active?: (path: string) => boolean;
}

export const NavItems = [
  {
    name: "Home",
    active: (path: string) => path === "/",
  },
  {
    name: "Solution",
    active: (path: string) => path.includes("/solution"),
  },
];
