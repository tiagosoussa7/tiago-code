"use client";
import Image from "next/image";

export const Photo = () => {
  return (
    <div className="w-[420px] h-[400px] relative z-10 mix-blend-lighten right-7 top-8 opacity-70">
      <Image
        src="/developer.png"
        priority
        fill
        alt=""
        className="object-contain rounded-full"
      />
    </div>
  );
};
