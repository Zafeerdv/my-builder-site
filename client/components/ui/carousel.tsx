import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "./button";

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export function Carousel({
  slides,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = "",
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (isPlaying && !isHovered && slides.length > 1) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [isPlaying, isHovered, nextSlide, interval, slides.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (slides.length === 0) return null;

  return (
    <div
      className={`relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[600px] overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(4, 89, 174, 0.8), rgba(255, 204, 51, 0.6)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <div
                  className={`transform transition-all duration-1000 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: index === currentSlide ? "300ms" : "0ms",
                  }}
                >
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-3 sm:mb-4 font-medium">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-2">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:scale-105 transform transition-all duration-300 shadow-lg text-sm sm:text-base px-6 sm:px-8"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 text-white p-2 sm:p-3 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 text-white p-2 sm:p-3 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 z-20 bg-white/20 backdrop-blur-sm border border-white/30 text-white p-1.5 sm:p-2 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
      >
        <Play
          className={`w-3 h-3 sm:w-4 sm:h-4 ${isPlaying ? "opacity-50" : "opacity-100"}`}
          fill={isPlaying ? "currentColor" : "none"}
        />
      </button>

      {/* Progress Bar */}
      {isPlaying && !isHovered && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % interval) / interval) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}
