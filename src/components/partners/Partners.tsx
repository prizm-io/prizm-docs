import Marquee from "./Marquee";
import PartnersTitle from "./PartnersTitle";

const companies = [
  { src: "img/allwinner.png", alt: "Allwinner Logo" },
  { src: "img/simcom.png", alt: "SIMcom Logo" },
  { src: "img/antenova.png", alt: "Antenova Logo" },
  { src: "img/1nce.png", alt: "1nce Logo" },
];

export default function Partners() {
  return (
    <>
      <div className="py-[120px]">
        <PartnersTitle />
        <div className="flex flex-col gap-6">
          <Marquee companies={companies} isReversed={false} />
          <Marquee companies={companies} isReversed={true} />
        </div>
      </div>
    </>
  );
}
