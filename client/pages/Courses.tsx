import { Link } from "react-router-dom";
import {
  BookOpen,
  Clock,
  Users,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { ModernCard } from "@/components/ui/modern-card";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export default function Courses() {
  const courseCategories = [
    {
      title: "Qaida Courses",
      description: "Foundation courses for beginners",
      courses: [
        {
          name: "Noorani Qaida",
          description:
            "Learn Arabic letters, pronunciations, and basic reading rules",
          duration: "2-3 months",
          level: "Beginner",
          price: "$30/month",
          features: [
            "Arabic alphabet recognition",
            "Basic pronunciation rules",
            "Word formation",
            "Short vowels (Harakat)",
          ],
          popular: true,
        },
        {
          name: "Madani Qaida",
          description:
            "Alternative approach to learning Arabic reading fundamentals",
          duration: "2-3 months",
          level: "Beginner",
          price: "$30/month",
          features: [
            "Step-by-step learning",
            "Visual learning aids",
            "Practice exercises",
            "Progressive difficulty",
          ],
        },
        {
          name: "Baghdadi Qaida",
          description: "Traditional method of learning Arabic reading",
          duration: "3-4 months",
          level: "Beginner",
          price: "$30/month",
          features: [
            "Classical approach",
            "Detailed explanations",
            "Traditional methodology",
            "Comprehensive coverage",
          ],
        },
      ],
    },
    {
      title: "Quran Reading",
      description: "Master the art of Quranic recitation",
      courses: [
        {
          name: "Nazra (Reading)",
          description:
            "Learn to read the Quran fluently with correct pronunciation",
          duration: "6-8 months",
          level: "Intermediate",
          price: "$40/month",
          features: [
            "Fluent Quran reading",
            "Proper pronunciation",
            "Reading speed improvement",
            "Confidence building",
          ],
          popular: true,
        },
        {
          name: "Memorization (Hifz)",
          description: "Complete memorization of the Holy Quran",
          duration: "2-4 years",
          level: "Advanced",
          price: "$60/month",
          features: [
            "Systematic memorization",
            "Regular revision",
            "Individual attention",
            "Progress tracking",
          ],
        },
        {
          name: "Reading with Fluency",
          description: "Advanced reading skills with proper flow",
          duration: "4-6 months",
          level: "Intermediate",
          price: "$35/month",
          features: [
            "Speed improvement",
            "Fluency development",
            "Error correction",
            "Confidence boost",
          ],
        },
      ],
    },
    {
      title: "Quran Recitation",
      description: "Perfect your recitation with proper rules",
      courses: [
        {
          name: "Tajweed",
          description: "Learn the rules of proper Quranic pronunciation",
          duration: "6-12 months",
          level: "Intermediate",
          price: "$45/month",
          features: [
            "All Tajweed rules",
            "Practical application",
            "Voice improvement",
            "Recitation beauty",
          ],
          popular: true,
        },
        {
          name: "Speeches",
          description: "Authorized certification in Quranic recitation",
          duration: "1-2 years",
          level: "Advanced",
          price: "$80/month",
          features: [
            "Complete Quran recitation",
            "Certified teacher",
            "Official authorization",
            "Chain of transmission",
          ],
        },
        {
          name: "Ten Qiraat",
          description: "Learn the ten authentic modes of Quranic recitation",
          duration: "2-3 years",
          level: "Expert",
          price: "$100/month",
          features: [
            "All ten Qiraat",
            "Historical background",
            "Expert guidance",
            "Advanced certification",
          ],
        },
      ],
    },
    {
      title: "Islamic Studies",
      description: "Comprehensive Islamic education",
      courses: [
        {
          name: "Fundamentals of Islam",
          description: "Basic Islamic beliefs, practices, and principles",
          duration: "4-6 months",
          level: "All Levels",
          price: "$35/month",
          features: [
            "Five Pillars of Islam",
            "Six Articles of Faith",
            "Islamic history",
            "Moral teachings",
          ],
        },
        {
          name: "Namaz (Prayer)",
          description: "Complete guide to Islamic prayer",
          duration: "2-3 months",
          level: "Beginner",
          price: "$25/month",
          features: [
            "Prayer timings",
            "Prayer procedures",
            "Required supplications",
            "Prayer etiquettes",
          ],
        },
        {
          name: "Six Kalma",
          description: "Learn and understand the six declarations of faith",
          duration: "1-2 months",
          level: "Beginner",
          price: "$20/month",
          features: [
            "All six Kalma",
            "Arabic pronunciation",
            "English translation",
            "Significance explanation",
          ],
        },
      ],
    },
    {
      title: "Advanced Studies",
      description: "Specialized Islamic knowledge",
      courses: [
        {
          name: "Quran Translation & Tafseer",
          description: "Understand the meaning and interpretation of the Quran",
          duration: "12-18 months",
          level: "Advanced",
          price: "$70/month",
          features: [
            "Verse-by-verse translation",
            "Historical context",
            "Classical commentaries",
            "Modern applications",
          ],
        },
        {
          name: "Hadith Course",
          description:
            "Study authentic sayings and traditions of Prophet Muhammad",
          duration: "8-12 months",
          level: "Intermediate",
          price: "$50/month",
          features: [
            "Sahih Bukhari & Muslim",
            "Hadith authentication",
            "Arabic text study",
            "Practical applications",
          ],
        },
        {
          name: "Arabic Language",
          description: "Learn Arabic for better Quranic understanding",
          duration: "12-24 months",
          level: "All Levels",
          price: "$55/month",
          features: [
            "Arabic grammar",
            "Vocabulary building",
            "Conversation skills",
            "Reading comprehension",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-accent/10 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -translate-x-48 -translate-y-48 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl translate-x-48 translate-y-48 animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-bounce">
              <GraduationCap className="w-4 h-4 mr-2" />
              Islamic Education Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Courses
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Comprehensive Islamic education programs designed to meet the
              needs of students at every level, from beginners to advanced
              scholars.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link to="/enroll">
                  Start Learning
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {courseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.courses.map((course, courseIndex) => (
                  <div
                    key={courseIndex}
                    className={`relative group transform hover:-translate-y-2 transition-all duration-500 ${
                      course.popular ? "scale-105" : ""
                    }`}
                  >
                    {course.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className="bg-gradient-to-r from-accent to-yellow-500 text-white shadow-lg animate-pulse">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          Popular Choice
                        </Badge>
                      </div>
                    )}
                    <Card
                      className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50 ${
                        course.popular
                          ? "ring-2 ring-primary/20 shadow-primary/10"
                          : ""
                      }`}
                    >
                      {/* Animated Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <CardHeader className="pb-4">
                          <div className="flex justify-between items-start mb-3">
                            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                              {course.name}
                            </CardTitle>
                            <Badge
                              variant="secondary"
                              className="group-hover:scale-110 transition-transform duration-300"
                            >
                              {course.level}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {course.description}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg group-hover:bg-primary/5 transition-colors duration-300">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="w-4 h-4 mr-2 text-primary" />
                                {course.duration}
                              </div>
                              <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {course.price}
                              </div>
                            </div>

                            <div className="space-y-3">
                              <h4 className="font-semibold text-foreground flex items-center">
                                <Sparkles className="w-4 h-4 mr-2 text-accent" />
                                What you'll learn:
                              </h4>
                              <ul className="space-y-2">
                                {course.features.map((feature, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start text-sm text-muted-foreground group/item hover:text-foreground transition-colors duration-200"
                                  >
                                    <CheckCircle className="w-4 h-4 mr-3 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex gap-3 pt-6">
                              <Button
                                className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                                asChild
                              >
                                <Link to="/enroll">Enroll Now</Link>
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="border-primary/20 hover:border-primary hover:bg-primary/5 transform hover:scale-105 transition-all duration-300"
                              >
                                <Link to="/contact">Info</Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>

                      {/* Corner Decorations */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent group-hover:scale-150 group-hover:rotate-12 transition-all duration-500" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/20 to-transparent group-hover:scale-150 group-hover:-rotate-12 transition-all duration-500" />
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Our Courses Stand Out
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the difference with our unique approach to Islamic
              education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Expert Teachers",
                description: "Qualified instructors with Ijazah certifications",
              },
              {
                icon: <BookOpen className="w-8 h-8 text-primary" />,
                title: "Comprehensive Curriculum",
                description: "Well-structured courses covering all aspects",
              },
              {
                icon: <Award className="w-8 h-8 text-primary" />,
                title: "Certification",
                description: "Official certificates upon successful completion",
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Flexible Schedule",
                description: "Classes available at convenient timings",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of learners and begin your Islamic education
            today. Free trial class available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/enroll">Enroll in a Course</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/contact">Schedule Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}
