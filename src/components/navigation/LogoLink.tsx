import type { ReactNode } from "react";

export default function LogoLink(props: {
  href: string;
  children?: ReactNode;
}) {
  return <a href={props.href}>{props.children}</a>;
}
