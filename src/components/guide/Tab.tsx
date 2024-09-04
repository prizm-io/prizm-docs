import { TabsTrigger } from "@radix-ui/react-tabs";
import type { ReactNode } from "react";

export default function Tab(props: {
  children: ReactNode;
  value: string;
  onTabClick: () => void;
}) {
  return (
    <TabsTrigger
      onClick={props.onTabClick}
      value={props.value}
      className="flex gap-[10px] border-b-[3px] border-[#161B42] justify-center items-center px-[53px] pb-[15px] whitespace-nowrap data-[state=active]:border-[#7D64FF] transition-colors duration-500"
    >
      {props.children}
    </TabsTrigger>
  );
}
