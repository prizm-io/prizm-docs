import type { ReactNode } from "react";

export default function FeatureCardTitle(props: { children?: ReactNode }) {
  return (
    <div className="text-[#f6f6f7] text-2xl font-bold font-['Inter']">
      {props.children}
    </div>
  );
}
