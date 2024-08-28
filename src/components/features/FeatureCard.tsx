import type { ReactNode } from "react";

export default function FeatureCard(props: { children?: ReactNode }) {
  return (
    <div className="pl-[30px] pr-10 py-[30px] bg-[#0e1330] rounded border border-[#282d45] flex-col justify-start items-start gap-[30px] inline-flex">
      {props.children}
    </div>
  );
}
