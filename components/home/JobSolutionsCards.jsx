"use client";

import Image from "next/image";

export default function JobSolutionsCard({
  bgSrc = "/images/hero.jpg",
  leftText = "İş Ara",
  rightText = "Profilini Oluştur",
  onLeft,
  onRight,
}) {
  return (
    <div className="w-full">
      <div
        className="
          relative overflow-hidden rounded-2xl
          w-full
          h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px]
        "
      >
        {/* Background image */}
        <Image
          src={bgSrc}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
        />

        {/* Bottom overlay (dark) */}
        <div
          className="
            absolute inset-x-0 bottom-0
            h-[72px] sm:h-[84px]
            bg-gradient-to-t from-black/65 to-black/0
          "
        />

        {/* Bottom actions */}
        <div
          className="
            absolute inset-x-0 bottom-0
            h-[72px] sm:h-[84px]
            px-6 sm:px-10
            flex items-end
          "
        >
          <div className="w-full pb-4 sm:pb-5 flex items-center justify-between">
            <button
              type="button"
              onClick={onLeft}
              className="
                text-white/90 hover:text-white transition
                text-lg sm:text-xl md:text-2xl
                font-medium
              "
            >
              {leftText}
            </button>

            {/* Divider */}
            <span className="mx-6 sm:mx-10 h-6 sm:h-7 w-px bg-white/40" />

            <button
              type="button"
              onClick={onRight}
              className="
                text-white/90 hover:text-white transition
                text-lg sm:text-xl md:text-2xl
                font-medium
              "
            >
              {rightText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
