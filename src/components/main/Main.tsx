import type { ReactNode } from "react";

export default function Main(props: { children?: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#060B27] px-4">{props.children}</main>
  );
}
