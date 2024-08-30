import Marquee from "./Marquee";
import PartnersTitle from "./PartnersTitle";

const companies = [
  { src: "img/homey.png", alt: "Homey Logo" },
  { src: "img/luminous.png", alt: "Luminous Logo" },
  { src: "img/hitech.png", alt: "HiTech Logo" },
  { src: "img/proline.png", alt: "ProLine Logo" },
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
