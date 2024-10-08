import { cn } from "@site/src/utils/utils";
import { DASHBOARD_LINK } from "../navigation/dashboard-button";
import useFadeIn from "@site/src/utils/use-fade-in";

export default function CallToAction() {
  const fadeIn = useFadeIn(true, 200);
  return (
    <div
      className={cn(
        "w-full min-h-[577px] py-[70px] flex-col justify-start items-center inline-flex",
        fadeIn,
      )}
    >
      <div
        className="w-full max-w-[1224px] h-[437px] py-[90px] flex-col justify-center items-center gap-[60px] flex rounded-[10px] border border-[#282D45] px-4"
        style={{
          backgroundImage: "url(/img/cta-bg.png) ",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-col justify-start items-center gap-[30px] flex">
          <img className="w-16 h-16" src="/img/logo-white-no-text.png" />
          <div className="flex-col justify-center items-center gap-[15px] flex">
            <div className="self-stretch text-center text-[#f6f6f7] text-[40px] font-bold font-['Inter'] leading-[48px]">
              Ready to get started?
            </div>
            <div className="self-stretch text-center text-[#8f9bb7] text-base font-normal font-['Inter'] leading-normal">
              Join today and start making your dream IoT Product in no time!
            </div>
          </div>
          <a
            href={DASHBOARD_LINK}
            className="px-[25px] py-[15px] bg-[#7d64ff] rounded-[36px] justify-center items-center gap-1.5 inline-flex hover:no-underline hover:bg-[#7663D6] transition-colors"
          >
            <div className="text-white text-base font-medium font-['Inter'] leading-none">
              Get Started
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
