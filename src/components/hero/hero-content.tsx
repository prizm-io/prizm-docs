import { cn } from "@site/src/utils/utils";
import type { ReactNode } from "react";

export default function HeroContent(props: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-[1.875rem] items-center font-inter max-w-[1224px]",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
