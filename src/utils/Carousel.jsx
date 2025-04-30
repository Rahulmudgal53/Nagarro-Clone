import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]); // Add dependencies here

  return (
    <div className="overflow-hidden relative w-full h-screen">
      {/* Slide wrapper */}
      <div
        className="flex transition-transform ease-out duration-700 h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="w-full flex-shrink-0 h-full">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prev}
          className="p-2 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white transition"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white transition"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              curr === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
