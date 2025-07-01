import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  BookOpen,
  ArrowRight,
  Tag,
  Clock,
  Heart,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Tajweed in Quran Recitation",
      excerpt:
        "Learn why proper Tajweed rules are essential for beautiful and correct Quranic recitation, and how they enhance your spiritual connection.",
      content:
        "Tajweed is the art of proper Quranic pronunciation that ensures the words of Allah are recited as they were revealed. This comprehensive guide explores the fundamental rules and their spiritual significance...",
      author: "Sheikh Muhammad Ahmad",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Tajweed",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Benefits of Memorizing the Quran in Modern Times",
      excerpt:
        "Discover the cognitive, spiritual, and social benefits of Hifz (Quran memorization) and how it impacts students in today's digital age.",
      content:
        "In our fast-paced digital world, memorizing the Quran offers unique benefits that extend beyond spiritual growth. Research shows improved memory, concentration, and emotional well-being...",
      author: "Ustadha Fatima Ali",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Hifz",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      featured: true,
    },
    {
      id: 3,
      title: "Online Islamic Education: Breaking Geographical Barriers",
      excerpt:
        "How digital platforms are making authentic Islamic education accessible to Muslims worldwide, regardless of location.",
      content:
        "The digital revolution has transformed Islamic education, making it possible for students from remote areas to access qualified teachers and authentic curriculum...",
      author: "Dr. Abdul Rahman",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Teaching Children the Quran: A Parent's Guide",
      excerpt:
        "Practical tips and strategies for parents to support their children's Quranic education and create a learning-friendly environment at home.",
      content:
        "Every parent wants their child to develop a strong connection with the Quran. This guide provides practical strategies for creating an effective learning environment...",
      author: "Ustadha Mariam Hassan",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Parenting",
      image:
        "https://images.unsplash.com/photo-1544531586-fbb071b2cc17?w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "The History and Significance of Arabic Calligraphy",
      excerpt:
        "Explore the beautiful art of Arabic calligraphy and its role in preserving and beautifying Islamic texts throughout history.",
      content:
        "Arabic calligraphy is more than just beautiful writing—it's a sacred art form that has preserved Islamic heritage for centuries...",
      author: "Calligrapher Ahmad Zaki",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "Art & Culture",
      image:
        "https://images.unsplash.com/photo-1578508920169-7a87bc09b35b?w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Preparing for Ramadan: A Spiritual Checklist",
      excerpt:
        "A comprehensive guide to prepare your heart, mind, and schedule for the blessed month of Ramadan through Quranic reflection and study.",
      content:
        "Ramadan is a month of spiritual renewal and Quranic reflection. This checklist helps you prepare effectively for maximum spiritual benefit...",
      author: "Sheikh Omar Abdullah",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Spirituality",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Tajweed",
    "Hifz",
    "Education",
    "Parenting",
    "Art & Culture",
    "Spirituality",
  ];

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
              <BookOpen className="w-4 h-4 mr-2" />
              Islamic Knowledge & Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AL-DUHA Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover articles, insights, and guidance on Islamic education,
              Quranic studies, and spiritual development from our expert
              teachers and scholars.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Our most popular and impactful content
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Fresh insights and knowledge from our educators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn text-xs"
                    >
                      Read
                      <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Islamic Knowledge
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, insights, and
            educational content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <FloatingActionButton />
    </div>
  );
}
