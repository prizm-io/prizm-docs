import type { ReactNode } from "react";

export default function CardTitle(props: { children: ReactNode }) {
  return (
    <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
      {props.children}
    </div>
  );
}
