"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Page() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Progress
        value={progress}
        indicatorColor={cn({
          "bg-gradient-to-tr from-rose-500 to-red-600": progress < 50,
          "bg-gradient-to-tr from-sky-400 to-sky-600":
            progress >= 50 && progress < 80,
          "bg-gradient-to-tr from-green-400 to-green-600": progress >= 80,
        })}
      />
    </div>
  );
}
