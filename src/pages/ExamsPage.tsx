
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Clock, BarChart } from "lucide-react";

// Mock data for exams
const EXAMS_DATA = [
  {
    id: 1,
    title: "Biology: Cell Structure and Function",
    subject: "Biology",
    difficulty: "Medium",
    questions: 30,
    time: 45,
    description: "Test your knowledge of cell organelles, membranes, and cellular processes.",
    tags: ["Cell Biology", "Organelles", "Membranes"],
  },
  {
    id: 2,
    title: "Chemistry: Periodic Table and Elements",
    subject: "Chemistry",
    difficulty: "Hard",
    questions: 40,
    time: 60,
    description: "Comprehensive test on periodic trends, element properties, and electronic configuration.",
    tags: ["Elements", "Periodic Trends", "Electronic Configuration"],
  },
  {
    id: 3,
    title: "Physics: Mechanics and Motion",
    subject: "Physics",
    difficulty: "Medium",
    questions: 25,
    time: 40,
    description: "Practice problems on Newton's laws, momentum, and circular motion.",
    tags: ["Mechanics", "Newton's Laws", "Motion"],
  },
  {
    id: 4,
    title: "Mathematics: Calculus Basics",
    subject: "Mathematics",
    difficulty: "Hard",
    questions: 35,
    time: 50,
    description: "Limits, derivatives, and basic integration concepts for high school calculus.",
    tags: ["Calculus", "Derivatives", "Limits"],
  },
  {
    id: 5,
    title: "English: Literary Analysis",
    subject: "English",
    difficulty: "Medium",
    questions: 20,
    time: 30,
    description: "Analyze passages from classic and contemporary literature with focus on themes and style.",
    tags: ["Literary Analysis", "Comprehension", "Themes"],
  },
  {
    id: 6,
    title: "History: World War II",
    subject: "History",
    difficulty: "Medium",
    questions: 35,
    time: 45,
    description: "Comprehensive review of World War II causes, major events, and aftermath.",
    tags: ["World War II", "20th Century", "Global Conflict"],
  },
];

// Subject options
const SUBJECTS = ["All Subjects", "Biology", "Chemistry", "Physics", "Mathematics", "English", "History"];

// Difficulty options
const DIFFICULTIES = ["All Difficulties", "Easy", "Medium", "Hard"];

export default function ExamsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Difficulties");
  const [filteredExams, setFilteredExams] = useState(EXAMS_DATA);

  useEffect(() => {
    document.title = "Practice Exams - ExamQuest";
  }, []);

  // Filter exams based on search query, subject, and difficulty
  useEffect(() => {
    let filtered = EXAMS_DATA;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (exam) =>
          exam.title.toLowerCase().includes(query) ||
          exam.description.toLowerCase().includes(query) ||
          exam.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by subject
    if (selectedSubject !== "All Subjects") {
      filtered = filtered.filter((exam) => exam.subject === selectedSubject);
    }
    
    // Filter by difficulty
    if (selectedDifficulty !== "All Difficulties") {
      filtered = filtered.filter((exam) => exam.difficulty === selectedDifficulty);
    }
    
    setFilteredExams(filtered);
  }, [searchQuery, selectedSubject, selectedDifficulty]);

  // Map difficulty to color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "Hard":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      default:
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    }
  };

  return (
    <Layout isAuthenticated>
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight slide-in-from-bottom">Practice Exams</h1>
            <p className="text-muted-foreground mt-1 slide-in-from-bottom">
              Browse and take practice exams across all subjects
            </p>
          </div>
          <Button asChild size="sm" className="slide-in-from-bottom">
            <Link to="/statistics">
              <BarChart className="h-4 w-4 mr-2" />
              View Statistics
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 slide-in-from-bottom">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search exams..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger>
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              {SUBJECTS.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Select Difficulty" />
            </SelectTrigger>
            <SelectContent>
              {DIFFICULTIES.map((difficulty) => (
                <SelectItem key={difficulty} value={difficulty}>
                  {difficulty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Exam Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredExams.length > 0 ? (
            filteredExams.map((exam) => (
              <Card key={exam.id} className="overflow-hidden scale-in">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{exam.subject}</Badge>
                      <Badge className={getDifficultyColor(exam.difficulty)}>{exam.difficulty}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{exam.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{exam.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exam.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-secondary text-secondary-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{exam.time} min</span>
                      <span className="mx-2">•</span>
                      <span>{exam.questions} questions</span>
                    </div>
                  </div>
                  <div className="border-t border-border/40 p-4 bg-muted/30">
                    <Button asChild className="w-full">
                      <Link to={`/exam/${exam.id}`}>Start Exam</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No exams match your search criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSubject("All Subjects");
                  setSelectedDifficulty("All Difficulties");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
