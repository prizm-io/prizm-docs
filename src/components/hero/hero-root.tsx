import { cn } from "@site/src/utils/utils";
import type { ReactNode } from "react";

export default function HeroRoot(props: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("h-full relative -mx-4", props.className)}
      style={{
        backgroundImage: "url(/img/hero-bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full flex flex-col items-center py-[68px]">
        {props.children}
      </div>
    </div>
  );
}
