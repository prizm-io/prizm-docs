import { useRef } from "react";
import ChipIcon from "./ChipIcon";
import DollarIcon from "./DollarIcon";
import ExtendIcon from "./ExtendIcon";
import FeatureCard from "./FeatureCard";
import FeatureCardContent from "./FeatureCardContent";
import FeatureCardDescription from "./FeatureCardDescription";
import FeatureCardTitle from "./FeatureCardTitle";
import SecurityIcon from "./SecurityIcon";
import useIsVisibleOnce from "@site/src/hooks/UseIsVisibleOnce";
import useFadeIn from "@site/src/utils/use-fade-in";
import { cn } from "@site/src/utils/utils";

export default function Features() {
  const ref = useRef();
  const enabled = useIsVisibleOnce(ref, 300);
  const fadeIn = useFadeIn(enabled, 0);

  return (
    <div
      ref={ref}
      className={cn(
        "w-full py-[70px] flex-col justify-start items-center inline-flex",
        fadeIn,
      )}
    >
      <div className="w-full max-w-[1224px] flex-col justify-center items-center gap-[60px] inline-flex">
        <div className="justify-start items-center gap-[121px] inline-flex">
          <div className="text-[#f6f6f7] text-center text-[56px] font-bold font-['Inter'] leading-[64px]">
            PRIZM’s Powerful Features
          </div>
        </div>
        <div className="gap-6 flex flex-col lg:flex-row">
          <FeatureCard>
            <ChipIcon />
            <FeatureCardContent>
              <FeatureCardTitle>No technical skills required</FeatureCardTitle>
              <FeatureCardDescription>
                Our simple design allows you do design your own IoT apps that
                communicate with sensors and actuators without any technical
                skills.
              </FeatureCardDescription>
            </FeatureCardContent>
          </FeatureCard>
          <FeatureCard>
            <DollarIcon />
            <FeatureCardContent>
              <FeatureCardTitle>One day to production</FeatureCardTitle>
              <FeatureCardDescription>
                With the app builder's drag and drop interface and the readily
                available dashboard editor, you can have your IoT app up and
                running in a day scaled for mass scale.
              </FeatureCardDescription>
            </FeatureCardContent>
          </FeatureCard>
          <FeatureCard>
            <SecurityIcon />
            <FeatureCardContent>
              <FeatureCardTitle>Top in class Security</FeatureCardTitle>
              <FeatureCardDescription>
                Our advanced security through a hardware root of trust and
                end-to-end encryption encryption ensures that your data is safe
                and secure.
              </FeatureCardDescription>
            </FeatureCardContent>
          </FeatureCard>
          <FeatureCard>
            <ExtendIcon />
            <FeatureCardContent>
              <FeatureCardTitle>Extendable for experts</FeatureCardTitle>
              <FeatureCardDescription>
                Even though our application is simple and easy to use, it allows
                experts within their field to extend the application further
                with custom code if they wish to without sacrificing the ease of
                use.
              </FeatureCardDescription>
            </FeatureCardContent>
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}
