import { cn } from "@site/src/utils/utils";
import PartnerCard from "./PartnerCard";

export default function PartnerLogo(props: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <PartnerCard>
      <img
        src={props.src}
        alt={props.alt}
        className={cn("w-[192.94px] text-4xl", props.className)}
      />
    </PartnerCard>
  );
}
