// hooks/useAnalyticsSection.ts
"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

export default function useAnalyticsSection(
  event: string,
  data?: Record<string, string | number>,
  threshold = 0.5
) {
  const ref = useRef<HTMLElement | null>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (tracked.current) return;

        tracked.current = true;

        track(event, data);

        observer.disconnect();
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [event]);

  return ref;
}