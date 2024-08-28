import type { ReactNode } from "react";

export default function CardContent(props: { children: ReactNode }) {
  return (
    <div className="flex-col justify-start items-start gap-[15px] flex">
      {props.children}
    </div>
  );
}
