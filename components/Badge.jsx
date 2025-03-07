"use client";

import CountUp from "react-countup";

export const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium">
          {badgeText}
        </div>
      </div>
    </div>
  );
};
