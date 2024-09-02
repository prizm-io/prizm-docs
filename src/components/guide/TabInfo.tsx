import type { ReactNode } from "react";
import { TabsContent } from "@radix-ui/react-tabs";

export default function TabInfo(props: {
  children: ReactNode;
  value?: string;
}) {
  return (
    <TabsContent value={props.value}>
      <div className="flex flex-col items-center xl:items-start xl:flex-row justify-between md:justify-between gap-6">
        {props.children}
      </div>
    </TabsContent>
  );
}
