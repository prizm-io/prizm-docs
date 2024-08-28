import type { ReactNode } from "react";

export default function Card(props: { children: ReactNode }) {
  return (
    <div
      className="w-full self-stretch min-h-[412px] px-4 py-8 lg:px-[55px] lg:py-[50px] bg-[#0e1330] rounded-[10px] border border-[#282d45] flex-col justify-start items-center gap-[38px] inline-flex"
      style={{
        backgroundImage: "url(/img/dev-time-bg.png) ",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {props.children}
    </div>
  );
}
