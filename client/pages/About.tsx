import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Award,
  Globe,
  Heart,
  Star,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Sparkles,
  Target,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { ModernCard } from "@/components/ui/modern-card";

export default function About() {
  const stats = [
    {
      number: "500+",
      label: "Happy Students",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "50+",
      label: "Expert Teachers",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Courses Offered",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      number: "10+",
      label: "Years Experience",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  const instructors = [
    {
      name: "Sheikh Muhammad Ahmad",
      qualification: "Ijazah in Qira'at & Tajweed",
      experience: "15+ Years Teaching",
      specialization: "Quran Recitation & Memorization",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Ustadha Fatima Ali",
      qualification: "MA Islamic Studies",
      experience: "12+ Years Teaching",
      specialization: "Islamic Studies & Arabic",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Qari Abdul Rahman",
      qualification: "Hafiz-e-Quran & Qari",
      experience: "18+ Years Teaching",
      specialization: "Hifz & Ten Qiraat",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Students from around the world learning together",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Certified Excellence",
      description:
        "Qualified teachers with proper Islamic education credentials",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Caring Environment",
      description: "Nurturing and supportive learning atmosphere",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Comprehensive Curriculum",
      description: "Complete Islamic education from basics to advanced levels",
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
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              About AL-DUHA Institute
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Excellence in Islamic Education
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dedicated to providing quality Quranic education with traditional
              values and modern teaching methods
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

      {/* About Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Welcome to AL-DUHA Institute Quran Academy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                AL-DUHA Institute is a premier online Quran Academy dedicated to
                spreading the beautiful teachings of the Holy Quran and Islamic
                knowledge. Our mission is to provide authentic, comprehensive,
                and accessible Islamic education to students worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded with the vision of making quality Quranic education
                available to everyone, we combine traditional Islamic teaching
                methods with modern technology to create an engaging and
                effective learning experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our qualified instructors hold proper Islamic education
                credentials and are committed to nurturing each student's
                spiritual and educational journey with care, patience, and
                excellence.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-accent"
              >
                <Link to="/courses">Explore Our Courses</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                  <p className="opacity-90 text-lg leading-relaxed">
                    "We are committed to preserving and teaching the beautiful
                    traditions of Islamic education while embracing modern
                    methods to reach students globally."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground">
              Guiding principles that drive our educational excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ModernCard
              title="Our Mission"
              description="To provide authentic, comprehensive, and accessible Islamic education through qualified teachers, combining traditional values with modern teaching methods."
              icon={<Target className="w-8 h-8 text-primary" />}
              className="h-full"
            >
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  Preserve authentic Islamic teachings
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  Make Quranic education globally accessible
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  Nurture spiritual and intellectual growth
                </li>
              </ul>
            </ModernCard>

            <ModernCard
              title="Our Vision"
              description="To become a leading global institution for Islamic education, inspiring students worldwide to connect with the Quran and develop strong Islamic character."
              icon={<Eye className="w-8 h-8 text-primary" />}
              className="h-full"
            >
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  Global reach and impact
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  Excellence in Islamic education
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  Building strong Muslim communities
                </li>
              </ul>
            </ModernCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose AL-DUHA Institute?
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the difference with our unique approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">
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

      {/* Instructor Profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Instructors
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn from qualified and experienced Islamic scholars
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {instructor.name}
                  </h3>
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {instructor.qualification}
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-2">
                    {instructor.experience}
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    {instructor.specialization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect With Us
            </h2>
            <p className="text-xl text-white/90">
              Ready to start your Islamic education journey? Get in touch with
              us today!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Email */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-white/90 break-all">
                  maktabaadduha@gmail.com
                </p>
              </CardContent>
            </Card>

            {/* Pakistan Phone */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-lg font-semibold mb-2">Pakistan</h3>
                <p className="text-white/90">+92-347-0105539</p>
              </CardContent>
            </Card>

            {/* USA Phone */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-lg font-semibold mb-2">USA</h3>
                <p className="text-white/90">+1-409-1234567</p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center space-x-4 mb-4">
                  <MessageCircle className="w-6 h-6 text-green-400 hover:scale-110 transition-transform cursor-pointer" />
                  <Facebook className="w-6 h-6 text-blue-400 hover:scale-110 transition-transform cursor-pointer" />
                  <Instagram className="w-6 h-6 text-pink-400 hover:scale-110 transition-transform cursor-pointer" />
                  <Youtube className="w-6 h-6 text-red-400 hover:scale-110 transition-transform cursor-pointer" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <p className="text-white/90 text-sm">
                  Stay connected on social media
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/enroll">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FloatingActionButton />
    </div>
  );
}
