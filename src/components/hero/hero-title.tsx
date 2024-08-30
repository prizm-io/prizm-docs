import type { ReactNode } from "react";

export default function HeroTitle(props: { children?: ReactNode }) {
  return (
    <h1 className="text-[60px] xs:text-[64px] leading-[72px] px-4 xl:px-0 font-bold text-center text-white">
      {props.children}
    </h1>
  );
}
