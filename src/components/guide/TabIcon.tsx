export default function Tab(props: { icon: any; isActive: boolean }) {
  const { icon: Icon } = props;

  return <Icon isActive={props.isActive} />;
}
