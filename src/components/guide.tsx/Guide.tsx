import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList } from "@radix-ui/react-tabs";
import GuideTitle from "./GuideTitle";
import PieIcon from "./PieIcon";
import BuildIcon from "./BuildIcon";
import DeployIcon from "./DeployIcon";
import ScaleIcon from "./ScaleIcon";
import useIsVisible from "./isVisible";

import Tab from "./Tab";
import TabInfo from "./TabInfo";
import TabInfoImg from "./TabInfoImg";
import TabIcon from "./TabIcon";
import TabDescription from "./TabDescription";

export default function Guide() {
  const [selectedTab, setSelectedTab] = useState("connect");
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const intervalRef = useRef(null);
  const tabs = ["connect", "build", "deploy", "scale"];

  const switchTab = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % tabs.length;
      setSelectedTab(tabs[newIndex]);
      return newIndex;
    });
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(switchTab, 500000);
  };

  useEffect(() => {
    if (isVisible) {
      resetInterval();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible]);

  const handleTabChange = (value) => {
    const newIndex = tabs.indexOf(value);
    setCurrentIndex(newIndex);
    setSelectedTab(value);
    resetInterval();
  };

  return (
    <>
      <div className="py-[70px]">
        <GuideTitle />
        <div ref={ref} className="flex justify-center items-center">
          <div className="max-w-[1224px] w-full justify-center flex flex-row">
            <Tabs
              value={selectedTab}
              onValueChange={handleTabChange}
              className="text-[#8f9bb7] flex flex-col lg:px-3 items-center w-[1224px] text-base font-normal"
            >
              <TabsList className="flex flex-col xl:flex-row w-full justify-between gap-6">
                <Tab onTabClick={resetInterval} value="connect">
                  <TabIcon icon={PieIcon} />
                  1. Connect Sensors
                </Tab>
                <Tab onTabClick={resetInterval} value="build">
                  <TabIcon icon={BuildIcon} />
                  2. Build the App
                </Tab>
                <Tab onTabClick={resetInterval} value="deploy">
                  <TabIcon icon={DeployIcon} />
                  3. Deploy the App
                </Tab>
                <Tab onTabClick={resetInterval} value="scale">
                  <TabIcon icon={ScaleIcon} />
                  4. Scale to Millions
                </Tab>
              </TabsList>
              <div className="text-lg xl:h-[500px] w-full justify-center pt-[60px]">
                <TabInfo value="connect">
                  <TabInfoImg src="img/working.png" />
                  <TabDescription>
                    Gorem ipsum dolor sit amet consectetur. Faucibus dui duis
                    feugiat tempor. interdum neque arcu nunc hendrerit
                    ullamcorper euismod. Gorem ipsum dolor sit amet consectetur.
                    Faucibus dui duis feugiat tempor. interdum neque arcu nunc
                    hendrerit ullamcorper euismod. Gorem ipsum dolor sit amet
                    consectetur. Faucibus dui duis feugiat tempor. interdum
                    neque arcu nunc hendrerit ullamcorper euismod. Gorem ipsum
                    dolor sit amet consectetur. Faucibus dui duis feugiat
                    tempor. interdum neque arcu nunc hendrerit ullamcorper
                    euismod. Gorem ipsum dolor sit amet consectetur.
                  </TabDescription>
                </TabInfo>
                <TabInfo value="build">
                  <TabInfoImg src="img/working.png" />
                  <TabDescription> test content</TabDescription>
                </TabInfo>
                <TabInfo value="deploy">
                  <TabInfoImg src="img/working.png" />
                  <TabDescription>test content</TabDescription>
                </TabInfo>
                <TabInfo value="scale">
                  <TabInfoImg src="img/working.png" />
                  <TabDescription> test content</TabDescription>
                </TabInfo>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
