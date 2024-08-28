import ChipIcon from "./ChipIcon";
import DollarIcon from "./DollarIcon";
import ExtendIcon from "./ExtendIcon";
import FeatureCard from "./FeatureCard";
import FeatureCardContent from "./FeatureCardContent";
import FeatureCardDescription from "./FeatureCardDescription";
import FeatureCardTitle from "./FeatureCardTitle";
import SecurityIcon from "./SecurityIcon";

export default function Features() {
  return (
    <div className="w-full py-[70px] flex-col justify-start items-center inline-flex">
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
                Borem ipsum dolor sit amet consectetur. Turpis tristique nulla
                posuere et amet arcu dictum ultricies convallis.
              </FeatureCardDescription>
            </FeatureCardContent>
          </FeatureCard>
          <FeatureCard>
            <DollarIcon />
            <FeatureCardContent>
              <FeatureCardTitle>One day to production</FeatureCardTitle>
              <FeatureCardDescription>
                Worem ipsum dolor sit amet consectetur. Turpis tristique nulla
                posuere et amet arcu dictum ultricies convallis.
              </FeatureCardDescription>
            </FeatureCardContent>
          </FeatureCard>
          <FeatureCard>
            <SecurityIcon />
            <FeatureCardContent>
              <FeatureCardTitle>Top in class Security</FeatureCardTitle>
              <FeatureCardDescription>
                Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla
                posuere et amet arcu dictum ultricies convallis.
              </FeatureCardDescription>
            </FeatureCardContent>
          </FeatureCard>
          <FeatureCard>
            <ExtendIcon />
            <FeatureCardContent>
              <FeatureCardTitle>Extendable for experts</FeatureCardTitle>
              <FeatureCardDescription>
                Keem ipsum dolor sit amet consectetur. Turpis tristique nulla
                posuere et amet arcu dictum ultricies convallis.
              </FeatureCardDescription>
            </FeatureCardContent>
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}
