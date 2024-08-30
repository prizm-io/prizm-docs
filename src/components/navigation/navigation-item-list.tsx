export interface NavItem {
  name: string;
  link: string;
  active?: (path: string) => boolean;
}

export const NavItems = [
  {
    name: "Home",
    link: "/",
    active: (path: string) => path === "/",
  },
  {
    name: "Solution",
    link: "/solution",
    active: (path: string) => path.includes("/solution"),
  },
];
