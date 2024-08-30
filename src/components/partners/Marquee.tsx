import PartnerLogo from "./PartnerLogo";
import { cn } from "@site/src/utils/utils";

interface Partner {
  src: string;
  alt: string;
}

interface MarqueeProps {
  companies: Partner[];
  isReversed: boolean;
}

export default function Marquee({ companies, isReversed }: MarqueeProps) {
  const extendedCompanies = [...companies, ...companies];

  return (
    <div className="relative overflow-hidden mx-[-1rem]">
      <div
        className={cn("flex justify-center w-[2000px] whitespace-nowrap", {
          "animate-marquee": !isReversed,
          "animate-marquee-reverse": isReversed,
        })}
      >
        {extendedCompanies.map((logo, index) => (
          <PartnerLogo
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="flex-shrink-0"
          />
        ))}
      </div>
      <div
        className={cn(
          "absolute justify-center top-0 flex  w-[2000px] whitespace-nowrap",
          {
            "animate-marquee-2": !isReversed,
            "animate-marquee-reverse-2": isReversed,
          }
        )}
      >
        {extendedCompanies.map((logo, index) => (
          <PartnerLogo
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
