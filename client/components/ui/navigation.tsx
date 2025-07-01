import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  BookOpen,
  Star,
  Users,
  MessageCircle,
  Phone,
  FileText,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "./button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const courseCategories = [
    {
      title: "Qaida Courses",
      items: [
        "Noorani Qaida",
        "Madani Qaida",
        "Baghdadi Qaida",
        "Rehmani Qaida",
      ],
    },
    {
      title: "Quran Reading",
      items: ["Nazra", "Memorization (Hifz)", "Reading with Fluency"],
    },
    {
      title: "Quran Recitation",
      items: ["Tajweed", "Ijazah", "Ten Qiraat"],
    },
    {
      title: "Islamic Studies",
      items: ["Fundamentals of Islam", "Namaz", "6 Kalma", "Janaza"],
    },
    {
      title: "Other Courses",
      items: [
        "Quran Translation & Tafseer",
        "Hadith Course",
        "Arabic Language",
        "Arabic Grammar",
      ],
    },
  ];

  return (
    <>
      {/* Top Contact Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-2 sm:py-3 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
              <a
                href="mailto:maktabaadduha@gmail.com"
                className="flex items-center space-x-1 hover:text-accent-foreground transition-colors duration-200"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">
                  maktabaadduha@gmail.com
                </span>
                <span className="sm:hidden">Email</span>
              </a>
              <div className="hidden sm:block text-white/30">|</div>
              <a
                href="tel:+923470105539"
                className="flex items-center space-x-1 hover:text-accent-foreground transition-colors duration-200"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+92-347-0105539</span>
              </a>
              <div className="hidden sm:block text-white/30">|</div>
              <a
                href="tel:+14091234567"
                className="flex items-center space-x-1 hover:text-accent-foreground transition-colors duration-200"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+1-409-1234567</span>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-1">
              <span className="text-xs font-medium mr-2 hidden lg:inline">
                Connect With Us:
              </span>
              <a
                href="https://wa.me/923470105539"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Contact Bar */}
      <div className="bg-primary/90 text-white py-2 sm:hidden">
        <div className="px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 text-xs">
              <a
                href="mailto:maktabaadduha@gmail.com"
                className="flex items-center space-x-1"
              >
                <Mail className="w-3 h-3" />
                <span>Email</span>
              </a>
              <a
                href="tel:+923470105539"
                className="flex items-center space-x-1"
              >
                <Phone className="w-3 h-3" />
                <span>Call</span>
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <a
                href="https://wa.me/923470105539"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
              >
                <MessageCircle className="w-3 h-3" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
              >
                <Facebook className="w-3 h-3" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
              >
                <Instagram className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="backdrop-blur-glass border-b border-white/20 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1fb4f453f12f49c5b0545a326f90ba00%2F665eb785351c4f368abd9d13d8539a73?format=webp&width=800"
                  alt="AL-DUHA Institute Logo"
                  className="w-full h-full object-contain drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  AL-DUHA Institute
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  Quran Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Home
              </Link>

              {/* Courses Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                >
                  <span>Courses</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isCoursesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isCoursesOpen && (
                  <div
                    onMouseEnter={() => setIsCoursesOpen(true)}
                    onMouseLeave={() => setIsCoursesOpen(false)}
                    className="absolute top-full left-0 mt-1 w-96 bg-white rounded-lg shadow-xl border z-50"
                  >
                    <div className="p-6 grid grid-cols-1 gap-4">
                      {courseCategories.map((category, idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold text-primary mb-2">
                            {category.title}
                          </h4>
                          <ul className="space-y-1">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  to="/courses"
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                About Us
              </Link>
              <Link
                to="/testimonials"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Testimonials
              </Link>
              <Link
                to="/blog"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Blog
              </Link>
              <Link
                to="/faq"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-accent to-yellow-500 hover:from-accent/90 hover:to-yellow-400 text-white shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 btn-modern md:px-4 lg:px-6 xl:px-8"
              >
                <Link to="/enroll">
                  <span className="hidden sm:inline">Enroll Now</span>
                  <span className="sm:hidden">Enroll</span>
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-foreground hover:text-primary p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
              <div className="px-4 py-6 space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/courses"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                >
                  Courses
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/testimonials"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                >
                  Testimonials
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                >
                  Blog
                </Link>
                <Link
                  to="/faq"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                >
                  FAQ
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                >
                  Contact
                </Link>
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-accent to-yellow-500 hover:from-accent/90 hover:to-yellow-400 text-white justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to="/enroll">Enroll Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
