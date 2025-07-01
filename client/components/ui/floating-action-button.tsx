import { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp, X } from "lucide-react";
import { Button } from "./button";

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+1234567890";
  };

  return (
    <>
      {/* Main FAB */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <div className="relative">
          {/* Secondary Actions */}
          <div
            className={`absolute bottom-14 sm:bottom-16 right-0 flex flex-col gap-2 sm:gap-3 transform transition-all duration-300 ${
              isOpen
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-4 opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <Button
              onClick={handleWhatsApp}
              size="sm"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              onClick={handleCall}
              size="sm"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          {/* Main Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <div
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </div>
          </Button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      )}
    </>
  );
}
