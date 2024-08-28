export default function CardImage(props: { src: string }) {
  return <img src={props.src} className="aspect-square max-h-[271px]" />;
}
