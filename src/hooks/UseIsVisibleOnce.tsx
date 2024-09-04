import { useEffect, useState } from "react";
import useIsVisible from "./UseIsVisible";

export default function useIsVisibleOnce<T extends Element>(
  ref: React.MutableRefObject<T>,
  offset?: number,
) {
  const isVisible = useIsVisible(ref, offset);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (isVisible && !seen) {
      setSeen(true);
    }
  }, [isVisible, seen]);

  return seen;
}
