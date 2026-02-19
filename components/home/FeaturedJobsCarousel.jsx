"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function ArrowButton({ disabled, onClick, direction }) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Önceki" : "Sonraki"}
      onClick={onClick}
      disabled={disabled}
      className={[
        "absolute top-1/2 -translate-y-1/2 z-10",
        "h-11 w-11 rounded-xl",
        "bg-gray-500/80 backdrop-blur",
        "grid place-items-center shadow",
        "hover:bg-gray-600 transition",
        "disabled:opacity-30 disabled:cursor-not-allowed",
        direction === "prev" ? "-left-5" : "-right-5",
      ].join(" ")}
    >
      {direction === "prev" ? (
        <ArrowLeft className="h-6 w-6 text-white" />
      ) : (
        <ArrowRight className="h-6 w-6 text-white" />
      )}
    </button>
  );
}

function JobCard({ item }) {
  return (
    <article className="h-full min-h-[140px] px-10 py-7">
      <div className="space-y-2">
        <h4 className="text-2xl font-medium text-gray-700 leading-tight line-clamp-1">
          {item.title}
        </h4>

        <p className="text-lg font-medium text-indigo-500 leading-tight line-clamp-1">
          {item.company}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-start">
        <img
          src={item.logo}
          alt={`${item.company} logo`}
          className="h-6 w-auto object-contain opacity-90"
          loading="lazy"
        />
      </div>
    </article>
  );
}

export default function FeaturedJobsCarousel({
  items = [],
  title = "Öne çıkan iş ilanları",
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateArrows();
    emblaApi.on("select", updateArrows);
    emblaApi.on("reInit", updateArrows);
    return () => {
      emblaApi.off("select", updateArrows);
      emblaApi.off("reInit", updateArrows);
    };
  }, [emblaApi, updateArrows]);

  return (
    <section className="container mx-auto px-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      <div className="relative">
        <ArrowButton
          disabled={!canPrev}
          onClick={() => emblaApi?.scrollPrev()}
          direction="prev"
        />
        <ArrowButton
          disabled={!canNext}
          onClick={() => emblaApi?.scrollNext()}
          direction="next"
        />

        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex items-stretch">
              {items.map((item, idx) => (
                <div key={item.id} className="flex items-stretch">
                  <div
                    className="
                      flex-shrink-0
                      w-[260px]
                      sm:w-[300px]
                      md:w-[320px]
                      lg:w-[340px]
                    "
                  >
                    <JobCard item={item} />
                  </div>

                  {idx !== items.length - 1 && (
                    <div className="w-px bg-gray-200 my-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
