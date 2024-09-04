import useFadeIn from "@site/src/utils/use-fade-in";
import Card from "./Card";
import CardContent from "./CardContent";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import { cn } from "@site/src/utils/utils";
import useIsVisibleOnce from "@site/src/hooks/UseIsVisibleOnce";
import { useRef } from "react";

export default function Benefits() {
  const ref = useRef();
  const enabled = useIsVisibleOnce(ref, 200);
  const fadeIn = useFadeIn(enabled, 0);
  return (
    <div
      ref={ref}
      className={cn(
        "w-full py-[70px] flex-col justify-start items-center inline-flex",
        fadeIn,
      )}
    >
      <div className="flex-col justify-center items-center gap-[60px] flex">
        <div className="w-full max-w-[1224px] flex-col justify-start items-center gap-5 flex">
          <div className="text-center text-[#f6f6f7] text-[56px] font-bold font-['Inter'] leading-[84px]">
            Time and cost savings using our solution
          </div>
          <span className="text-[#8f9bb7] text-center text-lg">
            Developing IoT solutions using traditional methods can be a
            challenging and resource-intensive process, often taking 6 months to
            2 years and requiring an initial investment of around $50,000 due to
            the significant workforce needed. While our competitors offer
            partial solutions that reduce costs by half, our comprehensive
            solution stands out. With our approach, you can get started with
            just $1,000, covering 10 devices and essential sensors.
          </span>
        </div>

        <div className="w-full max-w-[1224px] gap-[38px] inline-flex justify-start items-start flex-col md:flex-row">
          <Card>
            <CardImage src="/img/dev-cost.png" />
            <CardContent>
              <CardTitle>Development cost</CardTitle>
              <CardDescription>
                Development cost is reduced by 98% compared to other methods
                costing only $150
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardImage src="/img/dev-time.png" />
            <CardContent>
              <CardTitle>Development time</CardTitle>
              <CardDescription>
                Development time is reduced by 99.5% compared to traditional
                methods by taking only a single day
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
