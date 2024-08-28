import { cn } from "@site/src/utils/utils";
import type { ReactNode } from "react";

export default function Drawer(props: {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}) {
  return (
    <main
      className={cn(
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out",
        props.isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-500 opacity-0 translate-x-full",
      )}
    >
      <section
        className={cn(
          "w-full max-w-lg -right-4 absolute bg-[#101534] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform",
          props.isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <article className="p-4 flex flex-col overflow-y-scroll h-full">
          {props.children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={props.onClose}
      />
    </main>
  );
}
