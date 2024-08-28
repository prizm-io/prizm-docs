import type { ReactNode } from "react";

export default function DrawerButton(props: {
  children?: ReactNode;
  url?: string;
}) {
  return (
    <a
      href={props.url ?? "#"}
      className="w-full px-4 py-2 text-white hover:no-underline hover:text-[#7d64ff] uppercase text-right"
    >
      {props.children}
    </a>
  );
}
