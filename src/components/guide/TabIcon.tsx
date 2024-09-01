import type { ElementType } from "react";

export default function Tab(props: {
  icon: ElementType<{ isActive: boolean }>;
  isActive: boolean;
}) {
  const { icon: Icon } = props;

  return <Icon isActive={props.isActive} />;
}
