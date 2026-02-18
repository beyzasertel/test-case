"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ArrowLeft } from "lucide-react";

function ArrowButton({ disabled, onClick, direction }) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Önceki" : "Sonraki"}
      onClick={onClick}
      disabled={disabled}
      className={[
        "absolute top-1/2 -translate-y-1/2 z-10",
        "h-10 w-10 rounded-lg bg-dark-grey shadow",
        "grid place-items-center",
        "hover:opacity-90 transition",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        direction === "prev" ? "left-0 -ml-5" : "right-0 -mr-5",
      ].join(" ")}
    >
      {direction === "prev" ? (
        <ArrowLeft className="w-6 h-6 text-white" />
      ) : (
        <ArrowRight className="w-6 h-6 text-white" />
      )}
    </button>
  );
}

export default function FeaturedJobsCarousel({
  items = [],
  title = "Öne çıkan iş ilanları",
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  function updateArrows() {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }

  useEffect(() => {
    if (!emblaApi) return;

    updateArrows();

    emblaApi.on("select", updateArrows);
    emblaApi.on("reInit", updateArrows);

    return () => {
      emblaApi.off("select", updateArrows);
      emblaApi.off("reInit", updateArrows);
    };
  }, [emblaApi]);

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="container mx-auto px-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-dark-grey">{title}</h3>
      </div>

      <div className="relative w-full">
        <ArrowButton
          disabled={!canPrev}
          onClick={scrollPrev}
          direction="prev"
        />
        <ArrowButton
          disabled={!canNext}
          onClick={scrollNext}
          direction="next"
        />

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="
                  flex-[0_0_85%]
                  sm:flex-[0_0_45%]
                  md:flex-[0_0_30%]
                  lg:flex-[0_0_22%]
                "
              >
                <article className="h-full rounded-xl border border-gray-200 bg-white p-4 hover:shadow-md transition">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-gray-500">{item.company}</p>
                      <h4 className="mt-1 text-base font-semibold text-gray-900 line-clamp-2">
                        {item.title}
                      </h4>
                    </div>

                    <div className="shrink-0 rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700">
                      {item.logoText || "LOGO"}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500">Detayları gör</span>
                    <span className="text-sm font-semibold text-gray-900">
                      →
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
