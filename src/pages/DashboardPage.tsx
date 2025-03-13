
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, TrendingUp, Award } from "lucide-react";

export default function DashboardPage() {
  useEffect(() => {
    document.title = "Dashboard - ExamQuest";
  }, []);

  // Mock data for user progress
  const recentExams = [
    { id: 1, name: "Chemistry Final Prep", score: 85, date: "2 days ago" },
    { id: 2, name: "Mathematics Practice Test", score: 92, date: "1 week ago" },
    { id: 3, name: "Physics Mechanics Quiz", score: 78, date: "2 weeks ago" },
  ];

  const recommendedExams = [
    { id: 4, name: "Biology Cell Structure", difficulty: "Medium", estimatedTime: "45 min" },
    { id: 5, name: "History World War II", difficulty: "Hard", estimatedTime: "60 min" },
    { id: 6, name: "Literature Analysis", difficulty: "Medium", estimatedTime: "30 min" },
  ];

  return (
    <Layout isAuthenticated>
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight slide-in-from-bottom">Dashboard</h1>
            <p className="text-muted-foreground mt-1 slide-in-from-bottom">
              Track your progress and practice for upcoming exams
            </p>
          </div>
          <Button asChild size="sm" className="slide-in-from-bottom">
            <Link to="/exams">Browse All Exams</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-card/60 backdrop-blur-sm scale-in">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Exams Taken</p>
                  <h3 className="text-2xl font-bold">24</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/60 backdrop-blur-sm scale-in">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Study Time</p>
                  <h3 className="text-2xl font-bold">32 hrs</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/60 backdrop-blur-sm scale-in">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Score</p>
                  <h3 className="text-2xl font-bold">85%</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/60 backdrop-blur-sm scale-in">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                  <h3 className="text-2xl font-bold">7</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-card/60 backdrop-blur-sm slide-in-from-bottom">
            <CardHeader>
              <CardTitle>Recent Exams</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentExams.map((exam) => (
                  <div key={exam.id} className="flex items-center justify-between p-3 rounded-md bg-secondary/50">
                    <div>
                      <h4 className="font-medium">{exam.name}</h4>
                      <p className="text-sm text-muted-foreground">{exam.date}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold">{exam.score}%</span>
                      <p className="text-xs text-muted-foreground">Score</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link to="/statistics">
                    View All History <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/60 backdrop-blur-sm slide-in-from-bottom">
            <CardHeader>
              <CardTitle>Recommended Exams</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendedExams.map((exam) => (
                  <div key={exam.id} className="flex items-center justify-between p-3 rounded-md bg-secondary/50">
                    <div>
                      <h4 className="font-medium">{exam.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {exam.difficulty} • {exam.estimatedTime}
                      </p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link to={`/exam/${exam.id}`}>Start</Link>
                    </Button>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link to="/exams">
                    Browse All Exams <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
