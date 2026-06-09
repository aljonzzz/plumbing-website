import React from "react";

const GlowOrbs: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

      {/* LEFT GLOW */}
      <div
        className="absolute top-[40%] left-[-140px] w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full blur-3xl"
        style={{
          backgroundColor: "rgb(227 199 47 / 0.18)",
          transform: "translateY(-50%)",
        }}
      />

      {/* RIGHT GLOW */}
      <div
        className="absolute top-[65%] right-[-100px] w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full blur-3xl"
        style={{
          backgroundColor: "rgb(227 199 47 / 0.08)",
          transform: "translateY(-50%)",
        }}
      />

    </div>
  );
};

export default GlowOrbs;