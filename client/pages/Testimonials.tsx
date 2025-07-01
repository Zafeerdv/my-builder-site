import { Link } from "react-router-dom";
import {
  Star,
  Quote,
  Heart,
  Users,
  Award,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aisha Khan",
      role: "Student",
      location: "Karachi, Pakistan",
      text: "The teachers are very patient and knowledgeable. My Quran reading has improved significantly, and I feel more connected to my faith through proper pronunciation and understanding.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      course: "Quran with Tajweed",
      completedAt: "March 2024",
    },
    {
      name: "Muhammad Ali",
      role: "Parent",
      location: "London, UK",
      text: "Excellent academy for children. My son completed his Hifz here with great success. The structured approach and caring teachers made all the difference in his journey.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      course: "Hifz Program",
      completedAt: "February 2024",
    },
    {
      name: "Fatima Ahmed",
      role: "Working Professional",
      location: "Toronto, Canada",
      text: "Flexible timings allowed me to learn while managing my job. The online platform is excellent and the teachers are very accommodating to working professionals like myself.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      course: "Islamic Studies",
      completedAt: "January 2024",
    },
    {
      name: "Omar Hassan",
      role: "University Student",
      location: "Dubai, UAE",
      text: "Learning Arabic grammar here has been transformative. The systematic approach and clear explanations have made complex topics understandable and enjoyable.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      course: "Arabic Grammar",
      completedAt: "December 2023",
    },
    {
      name: "Mariam Yusuf",
      role: "Mother & Student",
      location: "Manchester, UK",
      text: "Both my children and I are learning here. The family-friendly approach and individual attention to each student's pace makes this academy truly special.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      course: "Family Package",
      completedAt: "November 2023",
    },
    {
      name: "Abdul Rahman",
      role: "Business Owner",
      location: "New York, USA",
      text: "The Ijazah program exceeded my expectations. The depth of knowledge and traditional chain of transmission gives authenticity to my Quranic education.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      course: "Ijazah Program",
      completedAt: "October 2023",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Happy Students",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Satisfaction Rate",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "10+",
      label: "Years Experience",
      icon: <BookOpen className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-accent/10 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl translate-x-48 translate-y-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
              <Heart className="w-4 h-4 mr-2" />
              Student Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Our Students Say
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hear from our global community of students who have transformed
              their lives through authentic Islamic education at AL-DUHA
              Institute
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Inspiring Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from our students around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group"
              >
                <CardHeader className="text-center pb-4">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Student Image */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="space-y-2">
                    <div className="font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary font-medium">
                      {testimonial.location}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.course}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                      Completed: {testimonial.completedAt}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your Islamic education journey today and become part of our
            growing community of successful students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/enroll">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link to="/courses">View Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <FloatingActionButton />
    </div>
  );
}
