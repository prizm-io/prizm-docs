import { useEffect } from "react";

export default function Home(): JSX.Element {
  useEffect(() => {
    location.href = "/docs/intro";
  }, []);
  return <div>Loading...</div>;
}
