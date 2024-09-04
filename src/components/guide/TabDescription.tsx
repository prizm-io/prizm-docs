import { cn } from "@site/src/utils/utils";
import type { ReactNode } from "react";

export default function TabDescription(props: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[739.22px] leading-9 w-full", props.className)}>
      {props.children}
    </div>
  );
}
