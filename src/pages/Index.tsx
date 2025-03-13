
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { CheckCircle2, Award, BookOpenCheck } from "lucide-react";

export default function Index() {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up", "opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.1),transparent_50%)]" />
        
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground mb-2 scale-in">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Supercharge your exam preparation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight slide-in-from-bottom">
              Achieve Excellence in Your High School Exams
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-[42rem] slide-in-from-bottom">
              Comprehensive practice tests, detailed analytics, and personalized study paths to help you succeed with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto slide-in-from-bottom">
              <Button asChild size="lg" className="h-12 px-8">
                <Link to="/auth">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <a href="#features" onClick={(e) => {
                  e.preventDefault();
                  featuresRef.current?.scrollIntoView({ behavior: "smooth" });
                }}>
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="reveal">
              <div className="text-4xl font-bold">25,000+</div>
              <p className="text-muted-foreground mt-2">Students Helped</p>
            </div>
            <div className="reveal">
              <div className="text-4xl font-bold">500+</div>
              <p className="text-muted-foreground mt-2">Practice Exams</p>
            </div>
            <div className="reveal">
              <div className="text-4xl font-bold">90%</div>
              <p className="text-muted-foreground mt-2">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section ref={featuresRef} id="features" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-[58rem] mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold">Features Designed for Success</h2>
            <p className="text-xl text-muted-foreground mt-4">
              Everything you need to prepare effectively and track your progress.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/60 backdrop-blur-sm reveal">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <BookOpenCheck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Comprehensive Exam Library</h3>
                <p className="text-muted-foreground">
                  Access hundreds of practice tests covering all major high school subjects and exam formats.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/60 backdrop-blur-sm reveal">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
                <p className="text-muted-foreground">
                  Track your progress with detailed statistics, identify strengths and areas for improvement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/60 backdrop-blur-sm reveal">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Study Paths</h3>
                <p className="text-muted-foreground">
                  Get customized recommendations based on your performance and learning style.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-y border-border/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-md reveal">
              <h2 className="text-3xl font-bold">Ready to Excel?</h2>
              <p className="text-muted-foreground">
                Join thousands of students who have improved their grades and confidence with ExamQuest.
              </p>
            </div>
            <Button asChild size="lg" className="h-12 px-8 reveal">
              <Link to="/auth">Start Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
