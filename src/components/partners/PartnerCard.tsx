import type { ReactNode } from "react";

export default function PartnerCard(props: { children?: ReactNode }) {
  return (
    <div className="px-[64px] py-[40px] mx-3 bg-[#101534] rounded-[20px] border border-none flex justify-center items-center">
      {props.children}
    </div>
  );
}
