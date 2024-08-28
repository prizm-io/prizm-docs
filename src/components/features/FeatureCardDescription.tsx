import type { ReactNode } from "react";

export default function FeatureCardDescription(props: {
  children?: ReactNode;
}) {
  return (
    <div className="self-stretch text-[#8f9bb7] text-base font-normal font-['Inter'] leading-normal">
      {props.children}
    </div>
  );
}
