import { useEffect, useRef, useState } from "react";
import { Tabs, TabsList } from "@radix-ui/react-tabs";
import GuideTitle from "./GuideTitle";
import PieIcon from "./PieIcon";
import BuildIcon from "./BuildIcon";
import DeployIcon from "./DeployIcon";
import ScaleIcon from "./ScaleIcon";
import Tab from "./Tab";
import TabInfo from "./TabInfo";
import TabInfoImg from "./TabInfoImg";
import TabIcon from "./TabIcon";
import TabDescription from "./TabDescription";
import useIsVisible from "@site/src/hooks/UseIsVisible";

const tabs = ["connect", "build", "deploy", "scale"];
const tabTimer = 5000;

export default function Guide() {
  const [selectedTab, setSelectedTab] = useState("connect");
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const intervalRef = useRef(null);

  const switchTab = () => {
    const currentIndex = tabs.indexOf(selectedTab);
    const newIndex = (currentIndex + 1) % tabs.length;
    setSelectedTab(tabs[newIndex]);
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(switchTab, tabTimer);
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

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    resetInterval();
  };

  return (
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
                <TabIcon icon={PieIcon} isActive={selectedTab === "connect"} />
                1. Connect Sensors
              </Tab>
              <Tab onTabClick={resetInterval} value="build">
                <TabIcon icon={BuildIcon} isActive={selectedTab === "build"} />
                2. Build the App
              </Tab>
              <Tab onTabClick={resetInterval} value="deploy">
                <TabIcon
                  icon={DeployIcon}
                  isActive={selectedTab === "deploy"}
                />
                3. Deploy the App
              </Tab>
              <Tab onTabClick={resetInterval} value="scale">
                <TabIcon icon={ScaleIcon} isActive={selectedTab === "scale"} />
                4. Scale to Millions
              </Tab>
            </TabsList>
            <div className="text-lg h-full xl:h-w-full justify-center pt-[60px]">
              <TabInfo value="connect">
                <TabInfoImg src="img/working.png" />
                <TabDescription>
                  Simply connect your sensors to PRIZM's out-of-box hardware.
                  Whether they are temperature sensors, motion sensors, or any
                  other hardware that needs to communicate, PRIZM takes care of
                  the rest and ensures secure and reliable connectivity.
                </TabDescription>
              </TabInfo>
              <TabInfo value="build">
                <TabInfoImg src="img/working.png" />
                <TabDescription>
                  Build your dream application effortlessly with the advanced
                  app builder, featuring drag-and-drop functionality to connect
                  sensors / actuators / other systems, implement business logic,
                  and seamlessly send data to the cloud or trigger notifications
                  for warnings and errors.
                </TabDescription>
              </TabInfo>
              <TabInfo value="deploy">
                <TabInfoImg src="img/working.png" />
                <TabDescription>
                  Deploy your application seamlessly from the web platform.
                  Whether you’re launching a small pilot or a large-scale
                  rollout, PRIZM ensures your app is deployed safely and
                  securely. Get your solution up and running quickly, with
                  minimal downtime and maximum reliability.
                </TabDescription>
              </TabInfo>
              <TabInfo value="scale">
                <TabInfoImg src="img/working.png" />
                <TabDescription>
                  Bring your MVP to market quickly and test your business model
                  in real-world scenarios, giving you the confidence to expand
                  your business. PRIZM helps you capitalize on market
                  opportunities faster, ensuring you stay ahead of the
                  competition.
                </TabDescription>
              </TabInfo>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}