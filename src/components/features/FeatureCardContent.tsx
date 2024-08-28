import type { ReactNode } from "react";

export default function FeatureCardContent(props: { children?: ReactNode }) {
  return (
    <div className="self-stretch flex-col justify-start items-start gap-3 flex">
      {props.children}
    </div>
  );
}
