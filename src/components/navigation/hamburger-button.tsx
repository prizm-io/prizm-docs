import HamburgerButtonIcon from "./hamburger-button-icon";

export default function HamburgerButton(props: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="p-1 bg-transparent"
    >
      <HamburgerButtonIcon />
    </button>
  );
}
