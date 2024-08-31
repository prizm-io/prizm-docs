export default function TabInfoImg(props: { src: string }) {
  return (
    <div className="h-[500px] lg:h-full">
      <img className="max-w-[434.78px] h-full w-full" src={props.src} />
    </div>
  );
}
