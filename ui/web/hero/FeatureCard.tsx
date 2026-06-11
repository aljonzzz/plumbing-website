"use client";

import React, { useEffect, useState } from "react";

const messages = [
  "Built for homeowners who want a faster first step and clearer expectations.",
  "24/7 emergency plumbing services when you need help most.",
  "Licensed professionals delivering quality workmanship every time.",
  "Upfront pricing with no hidden surprises or unexpected fees.",
];

const FeatureCard: React.FC = () => {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Auto-slide that resets whenever active changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [active]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    // Swipe left
    if (distance > 50) {
      setActive((prev) => (prev + 1) % messages.length);
    }

    // Swipe right
    if (distance < -50) {
      setActive(
        (prev) => (prev - 1 + messages.length) % messages.length
      );
    }

    setTouchStart(null);
  };

  return (
    <div
      className="bg-[#0D3B66]/90 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 max-w-md flex flex-col gap-3 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <p className="text-white body leading-relaxed min-h-[72px] flex items-center">
        {messages[active]}
      </p>

      <div className="flex items-center justify-center gap-2">
        {messages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              active === index
                ? "scale-110"
                : "border border-white/40"
            }`}
            style={
              active === index
                ? { backgroundColor: "rgb(var(--color-primary))" }
                : {}
            }
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
