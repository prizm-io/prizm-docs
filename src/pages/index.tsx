export default function Home(): JSX.Element {
  return (
    <div className="bg-primary-background w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <img src="img/Group.svg" width={180} className="animate-fade" />
        <img
          src="img/prizm.svg"
          width={180}
          className="opacity-0 animate-fade-delay"
        />
        <span className="opacity-0 text-center animate-fade-delay-text text-white">
          IoT Made Simple
        </span>
      </div>
    </div>
  );
}
