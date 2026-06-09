import React from "react";

const FooterBottom: React.FC = () => {
  return (
    <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-300 pb-4">
      © {new Date().getFullYear()} PipeWise Plumbing Services. All rights reserved.
    </div>
  );
};

export default FooterBottom;
