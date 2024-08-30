import PartnerCard from "./PartnerCard";
interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function PartnerLogo({ src, alt, className }: Props) {
  return (
    <PartnerCard>
      <img
        src={src}
        alt={alt}
        className={`w-[192.94px] text-4xl ${className}`}
      />
    </PartnerCard>
  );
}
