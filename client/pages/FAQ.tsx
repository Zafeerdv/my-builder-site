import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Clock,
  DollarSign,
  Users,
  BookOpen,
  Globe,
  Award,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      title: "General Questions",
      icon: <HelpCircle className="w-5 h-5" />,
      faqs: [
        {
          question: "What is AL-DUHA Institute Quran Academy?",
          answer:
            "AL-DUHA Institute is a premier online Quran Academy dedicated to providing authentic, comprehensive Islamic education. We offer courses ranging from basic Qaida to advanced Qiraat, taught by qualified instructors with proper Islamic credentials.",
        },
        {
          question: "Who can join AL-DUHA Institute?",
          answer:
            "Our courses are designed for students of all ages and backgrounds. Whether you're a complete beginner or looking to advance your Islamic knowledge, we have programs suitable for children, adults, working professionals, and families.",
        },
        {
          question:
            "What makes AL-DUHA Institute different from other online academies?",
          answer:
            "We combine traditional Islamic teaching methods with modern technology, offer personalized attention through small batch sizes, provide qualified teachers with Ijazah, and maintain a family-friendly learning environment with flexible scheduling.",
        },
        {
          question: "Do I need any prior knowledge to start?",
          answer:
            "No prior knowledge is required. We offer beginner-level courses like Noorani Qaida that start from the very basics of Arabic letter recognition and pronunciation.",
        },
      ],
    },
    {
      title: "Courses & Curriculum",
      icon: <BookOpen className="w-5 h-5" />,
      faqs: [
        {
          question: "What courses do you offer?",
          answer:
            "We offer comprehensive courses including: Qaida Courses (Noorani, Madani, Baghdadi), Quran Reading (Nazra, Memorization, Fluency), Quran Recitation (Tajweed, Ijazah, Ten Qiraat), Islamic Studies, Hadith, Arabic Language, and Arabic Grammar.",
        },
        {
          question: "How long does it take to complete a course?",
          answer:
            "Course duration varies by program: Qaida courses take 2-3 months, Quran with Tajweed takes 6-8 months, Hifz programs take 2-4 years, and Islamic Studies courses take 4-6 months. Duration depends on individual progress and study frequency.",
        },
        {
          question: "Do you provide certificates upon completion?",
          answer:
            "Yes, we provide official certificates for all completed courses. Advanced students can also pursue Ijazah certification, which provides traditional authorization in Quranic recitation.",
        },
        {
          question: "Can I switch between courses?",
          answer:
            "Yes, you can switch courses with prior consultation with your instructor and academic coordinator. We'll assess your current level and recommend the best transition path.",
        },
      ],
    },
    {
      title: "Scheduling & Classes",
      icon: <Clock className="w-5 h-5" />,
      faqs: [
        {
          question: "What are your class timings?",
          answer:
            "We offer flexible scheduling with classes available morning, evening, and weekends. Our schedule accommodates different time zones: Pakistan (9 AM - 10 PM), UK (10 AM - 8 PM), USA times vary by zone, and weekend classes (10 AM - 8 PM).",
        },
        {
          question: "How long are the classes?",
          answer:
            "Regular classes are typically 30-45 minutes long. Intensive courses may have longer sessions of 60 minutes. Class duration can be customized based on student age and course requirements.",
        },
        {
          question: "What if I miss a class?",
          answer:
            "Missed classes can be rescheduled with 24-hour notice. We also provide recorded sessions for review. Our flexible policy ensures you don't lose progress due to occasional absences.",
        },
        {
          question: "Can I have classes on weekends only?",
          answer:
            "Yes, we offer weekend-only packages for working professionals and busy students. Weekend classes are available on Saturdays and Sundays with extended hours.",
        },
      ],
    },
    {
      title: "Fees & Payment",
      icon: <DollarSign className="w-5 h-5" />,
      faqs: [
        {
          question: "What are your course fees?",
          answer:
            "Fees vary by course: Basic Qaida courses start at $30/month, Quran with Tajweed is $40/month, Hifz programs are $60/month, and specialized courses like Ijazah are $80/month. Family packages offer discounts for multiple students.",
        },
        {
          question: "Do you offer any discounts?",
          answer:
            "Yes! We offer family discounts (10% for 2+ family members), early bird discounts (15% for advance payments), student discounts (for full-time students), and need-based scholarships for deserving candidates.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept PayPal, Stripe, bank transfers, and major credit/debit cards. For international students, we also accept local payment methods and have installment options available.",
        },
        {
          question: "Is there a free trial?",
          answer:
            "Yes, we offer a free trial class for all new students. This allows you to experience our teaching methodology and decide if our academy is the right fit for your learning goals.",
        },
      ],
    },
    {
      title: "Technology & Platform",
      icon: <Globe className="w-5 h-5" />,
      faqs: [
        {
          question: "What technology do I need for online classes?",
          answer:
            "You need a stable internet connection, a computer/tablet/smartphone with camera and microphone, and access to video calling software (Zoom/Skype). We provide technical support for setup.",
        },
        {
          question: "Do you provide study materials?",
          answer:
            "Yes, we provide digital copies of all required textbooks, worksheets, and supplementary materials. Physical copies can be arranged for an additional fee.",
        },
        {
          question: "Is the platform user-friendly for elderly students?",
          answer:
            "Absolutely! Our platform is designed for ease of use. We provide detailed tutorials and technical support to help students of all ages navigate the online learning environment comfortably.",
        },
        {
          question: "Can classes be recorded for later review?",
          answer:
            "Yes, with permission from both student and teacher, classes can be recorded for personal review. This helps reinforce learning and allows students to revisit difficult concepts.",
        },
      ],
    },
    {
      title: "Teachers & Quality",
      icon: <Users className="w-5 h-5" />,
      faqs: [
        {
          question: "What are the qualifications of your teachers?",
          answer:
            "All our teachers hold proper Islamic education credentials including Ijazah in Qira'at, degrees in Islamic Studies, and years of teaching experience. They undergo continuous training to maintain high teaching standards.",
        },
        {
          question: "Can I choose my teacher?",
          answer:
            "Yes, after your initial assessment, we'll match you with a suitable teacher. If you're not comfortable, you can request a change within the first two weeks at no additional cost.",
        },
        {
          question: "Do teachers speak multiple languages?",
          answer:
            "Our teachers are multilingual and can teach in English, Urdu, Arabic, and other languages based on student requirements. We match students with teachers who speak their preferred language.",
        },
        {
          question: "How do you ensure teaching quality?",
          answer:
            "We maintain quality through regular teacher training, student feedback systems, periodic assessments, and continuous monitoring of class sessions. Student satisfaction is our top priority.",
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
              <HelpCircle className="w-4 h-4 mr-2" />
              Got Questions? We Have Answers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about AL-DUHA Institute, our
              courses, scheduling, fees, and more. Can't find what you're
              looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">
                Happy Students
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">15+</div>
              <div className="text-sm text-muted-foreground">
                Course Options
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">
                Expert Teachers
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    const isOpen = openFAQ === globalIndex;

                    return (
                      <Card
                        key={faqIndex}
                        className="border-none shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <CardHeader
                          className="cursor-pointer"
                          onClick={() => toggleFAQ(globalIndex)}
                        >
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg font-semibold text-foreground pr-4">
                              {faq.question}
                            </CardTitle>
                            <div className="flex-shrink-0">
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-primary" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-muted-foreground" />
                              )}
                            </div>
                          </div>
                        </CardHeader>
                        {isOpen && (
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Contact us directly for
            personalized assistance with your Islamic education journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <Card className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Pakistan: +92-347-0105539
                </p>
                <p className="text-sm text-muted-foreground">
                  USA: +92-347-0105539
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground">
                  maktabaadduha@gmail.com
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  24-hour response time
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Get personalized course recommendations
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/enroll">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      <FloatingActionButton />
    </div>
  );
}
