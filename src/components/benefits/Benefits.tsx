import useFadeIn from "@site/src/utils/use-fade-in";
import Card from "./Card";
import CardContent from "./CardContent";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import { cn } from "@site/src/utils/utils";

export default function Benefits() {
  const fadeIn = useFadeIn(true, 0);
  return (
    <div
      className={cn(
        "w-full py-[70px] flex-col justify-start items-center inline-flex",
        fadeIn,
      )}
    >
      <div className="flex-col justify-center items-center gap-[60px] flex">
        <div className="flex-col justify-start items-center gap-5 flex">
          <div className="text-center text-[#f6f6f7] text-[56px] font-bold font-['Inter'] leading-[84px]">
            Time and cost savings using our solution
          </div>
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
