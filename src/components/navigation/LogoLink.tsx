export default function LogoLink(props: {
  href: string;
  children?: React.ReactNode;
}) {
  return <a href={props.href}>{props.children}</a>;
}
