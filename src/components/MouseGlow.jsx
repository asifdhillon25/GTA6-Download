import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[5] hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px] lg:block"
      style={{
        left: pos.x,
        top: pos.y,
      }}
    />
  );
} 