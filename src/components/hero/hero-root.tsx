import useIsVisibleOnce from "@site/src/hooks/UseIsVisibleOnce";
import useFadeIn from "@site/src/utils/use-fade-in";
import { cn } from "@site/src/utils/utils";
import { useRef, type ReactNode } from "react";

export default function HeroRoot(props: {
  children?: ReactNode;
  className?: string;
}) {
  const ref = useRef();
  const enabled = useIsVisibleOnce(ref, 0);
  const fadeIn = useFadeIn(enabled, 0);

  return (
    <div
      ref={ref}
      className={cn("h-full relative -mx-4", props.className, fadeIn)}
      style={{
        backgroundImage: "url(/img/hero-bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full flex flex-col items-center py-[68px]">
        {props.children}
      </div>
    </div>
  );
}
