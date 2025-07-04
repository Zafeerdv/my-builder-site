import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Award,
  Clock,
  Globe,
  Star,
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Heart,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { Carousel } from "@/components/ui/carousel";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { ModernCard } from "@/components/ui/modern-card";

export default function Index() {
  const heroSlides = [
    {
      id: 1,
      image:
        "image/banner.jpg",
      title: "Learn the Holy Quran",
      subtitle: "🌟 Premium Islamic Education",
      description:
        "Begin your spiritual journey with comprehensive Quranic education from qualified teachers with traditional values and modern methods.",
      cta: "Start Your Journey",
      ctaLink: "/enroll",
    },
    {
      id: 2,
      image:
        "image/islamic.jpeg",
      title: "Master Tajweed Rules",
      subtitle: "✨ Perfect Your Recitation",
      description:
        "Learn the beautiful art of Quranic recitation with proper Tajweed rules from certified teachers with Ijazah.",
      cta: "Explore Tajweed",
      ctaLink: "/courses",
    },
    {
      id: 3,
      image:
        "image/profile1.jpeg",
      title: "Memorize with Excellence",
      subtitle: "🎯 Hifz Program",
      description:
        "Complete Quran memorization program with systematic approach, regular revision, and individual attention from expert teachers.",
      cta: "Join Hifz Program",
      ctaLink: "/courses",
    },
    {
      id: 4,
      image:
        "image/profile1.jpeg",
      title: "Islamic Studies",
      subtitle: "📚 Comprehensive Knowledge",
      description:
        "Study Islamic fundamentals, Hadith, Fiqh, and Arabic language with scholarly approach and practical applications.",
      cta: "Discover More",
      ctaLink: "/courses",
    },
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Comprehensive Curriculum",
      description: "From basic Qaida to advanced Qiraat and Islamic studies",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Faculty",
      description: "Qualified teachers with Ijazah and years of experience",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Certification",
      description: "Official certificates upon course completion",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Flexible Timings",
      description: "Morning, evening, and weekend classes available",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Online Learning",
      description: "Interactive live classes from anywhere in the world",
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Quality Education",
      description: "Personalized attention with small batch sizes",
    },
  ];

  const courses = [
    {
      title: "Noorani Qaida",
      description:
        "Foundation course for beginners to learn Arabic letters and basic reading",
      duration: "2-3 months",
      level: "Beginner",
      featured: true,
    },
    {
      title: "Quran with Tajweed",
      description:
        "Learn proper pronunciation and recitation rules of the Holy Quran",
      duration: "6-8 months",
      level: "Intermediate",
      featured: true,
    },
    {
      title: "Hifz (Memorization)",
      description:
        "Complete memorization of the Holy Quran with proper guidance",
      duration: "2-4 years",
      level: "Advanced",
      featured: true,
    },
    {
      title: "Islamic Studies",
      description:
        "Comprehensive study of Islamic fundamentals, Hadith, and Fiqh",
      duration: "6 months",
      level: "All Levels",
      featured: false,
    },
  ];

  const testimonials = [
    {
      name: "Aisha Khan",
      role: "Student",
      text: "The teachers are very patient and knowledgeable. My Quran reading has improved significantly.",
      rating: 5,
      image:
        "image/girl.jpg",
    },
    {
      name: "Umair Mazhar",
      role: "Parent",
      text: "Excellent academy for children. My son completed his Hifz here with great success.",
      rating: 5,
      image:
        "image/umair.jpg",
    },
    {
      name: "Waseem Shah",
      role: "Working Professional",
      text: "Flexible timings allowed me to learn while managing my job. Highly recommended!",
      rating: 5,
      image:
        "image/profile2.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Carousel */}
      <section className="relative">
        <Carousel slides={heroSlides} />
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-primary/5 via-white to-accent/5 relative overflow-hidden">
        <div
          className={
            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23f0f9ff" fill-opacity="0.5"%3E%3Ccircle cx="10" cy="10" r="1"/%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
          }
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center group">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-primary/10">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={500} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                  Happy Students
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-accent/10">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={50} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                  Expert Teachers
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-primary/10">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={15} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                  Courses
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-accent/10">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={10} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl -translate-x-32 sm:-translate-x-48 -translate-y-32 sm:-translate-y-48" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-l from-accent/10 to-primary/10 rounded-full blur-3xl translate-x-32 sm:translate-x-48 translate-y-32 sm:translate-y-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Excellence in Education
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose AL-DUHA Institute?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              We provide comprehensive Islamic education with modern teaching
              methods and traditional values
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <ModernCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className="h-full"
                animated={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our most sought-after Islamic education programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses
              .filter((course) => course.featured)
              .map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {course.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-muted-foreground">
                        Duration: {course.duration}
                      </span>
                    </div>
                    <Button asChild className="w-full">
                      <Link to="/courses">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/courses">
                View All Courses <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Heart className="w-4 h-4 mr-2" />
              Student Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from our satisfied students and parents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent" />
                    <div className="flex mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    {/* Student Image */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed text-center">
                      "{testimonial.text}"
                    </p>

                    <div className="text-center">
                      <div className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Islamic Education Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their lives through
            Quranic education at Al Duha Institute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/enroll">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold">Al Duha Institute</span>
                  <span className="text-sm text-white/70">Quran Academy</span>
                </div>
              </div>
              <p className="text-white/70 mb-4">
                Al Duha Institute Quran Academy Providing quality Islamic education with modern teaching methods
                and traditional values.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="hover:text-white transition-colors"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testimonials"
                    className="hover:text-white transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link
                    to="/courses"
                    className="hover:text-white transition-colors"
                  >
                    Noorani Qaida
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="hover:text-white transition-colors"
                  >
                    Quran with Tajweed
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="hover:text-white transition-colors"
                  >
                    Hifz Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="hover:text-white transition-colors"
                  >
                    Islamic Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-white/70">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+92 347 0105539</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>maktabaadduha@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>PWD Society Islamabad, Islamabad, Pakistain</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
            <p>
              &copy; 2024 Al Duha Institute Quran Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
