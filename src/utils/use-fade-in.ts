import { useEffect, useState } from "react";

export default function useFadeIn(enabled: boolean, delay: number): string {
  const [shouldFadeIn, setShouldFadeIn] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (enabled) {
      timeout = setTimeout(() => {
        setShouldFadeIn(true);
      }, delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [enabled]);

  if (shouldFadeIn) {
    return "opacity-100 duration-700 animate-in fade-in slide-in-from-bottom-8";
  }

  return "opacity-0";
}
