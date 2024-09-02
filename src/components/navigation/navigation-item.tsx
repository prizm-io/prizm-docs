import { cn } from "@site/src/utils/utils";
import type { ReactNode } from "react";

export default function NavigationItem(props: {
  url?: string;
  active?: boolean;
  children?: ReactNode;
}) {
  return (
    <a
      href={props.url ?? "#"}
      className="p-2.5 justify-center items-center gap-2.5 flex hover:no-underline"
    >
      <div
        className={cn(
          "text-base font-normal font-['Inter'] leading-normal",
          props.active ? "text-white" : "text-[#8f9bb7]",
          "hover:text-white transition-colors"
        )}
      >
        {props.children}
      </div>
    </a>
  );
}
