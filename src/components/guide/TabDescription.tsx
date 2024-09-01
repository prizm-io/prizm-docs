import type { ReactNode } from "react";

export default function TabDescription(props: { children: ReactNode }) {
  return (
    <div className="max-w-[739.22px] leading-9 w-full">{props.children}</div>
  );
}
