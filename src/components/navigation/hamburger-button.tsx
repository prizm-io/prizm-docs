import { Menu } from "lucide-react";

export default function HamburgerButton(props: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="p-1 bg-transparent"
    >
      <Menu />
    </button>
  );
}
