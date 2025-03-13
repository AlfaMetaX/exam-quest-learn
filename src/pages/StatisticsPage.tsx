
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data for the charts
const subjectPerformance = [
  { name: "Biology", score: 85 },
  { name: "Chemistry", score: 72 },
  { name: "Physics", score: 78 },
  { name: "Math", score: 92 },
  { name: "English", score: 88 },
  { name: "History", score: 76 },
];

const progressOverTime = [
  { month: "Jan", score: 65 },
  { month: "Feb", score: 68 },
  { month: "Mar", score: 72 },
  { month: "Apr", score: 75 },
  { month: "May", score: 80 },
  { month: "Jun", score: 85 },
];

const topStudents = [
  { id: 1, name: "Alex Wang", score: 98, exams: 42, avatar: "" },
  { id: 2, name: "Emma Roberts", score: 96, exams: 38, avatar: "" },
  { id: 3, name: "Michael Johnson", score: 94, exams: 45, avatar: "" },
  { id: 4, name: "Sophia Chen", score: 93, exams: 36, avatar: "" },
  { id: 5, name: "David Kim", score: 92, exams: 41, avatar: "" },
];

export default function StatisticsPage() {
  useEffect(() => {
    document.title = "Statistics - ExamQuest";
  }, []);

  return (
    <Layout isAuthenticated>
      <div className="container px-4 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2 slide-in-from-bottom">Statistics & Leaderboard</h1>
        <p className="text-muted-foreground mb-8 slide-in-from-bottom">
          Track your performance and see how you compare to other students
        </p>

        <Tabs defaultValue="performance" className="slide-in-from-bottom">
          <TabsList className="mb-6">
            <TabsTrigger value="performance">My Performance</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="scale-in">
                <CardHeader>
                  <CardTitle>Performance by Subject</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <Chart data={subjectPerformance} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" width={80} />
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Score']}
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: '1px solid #f0f0f0',
                            borderRadius: '0.5rem',
                          }}
                        />
                        <Bar 
                          dataKey="score" 
                          fill="rgb(var(--primary))" 
                          radius={[0, 4, 4, 0]} 
                          barSize={24}
                        />
                      </Chart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="scale-in">
                <CardHeader>
                  <CardTitle>Progress Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <Chart data={progressOverTime}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[50, 100]} />
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Score']}
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: '1px solid #f0f0f0',
                            borderRadius: '0.5rem',
                          }}
                        />
                        <Bar 
                          dataKey="score" 
                          fill="rgb(var(--primary))" 
                          radius={[4, 4, 0, 0]} 
                          barSize={30}
                        />
                      </Chart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="scale-in">
              <CardHeader>
                <CardTitle>Recent Exams Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Exam Name</th>
                        <th className="text-left py-3 px-4">Subject</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Time Spent</th>
                        <th className="text-left py-3 px-4">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Chemistry Final Prep</td>
                        <td className="py-3 px-4">Chemistry</td>
                        <td className="py-3 px-4">May 15, 2023</td>
                        <td className="py-3 px-4">48 min</td>
                        <td className="py-3 px-4 font-semibold">85%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Mathematics Practice Test</td>
                        <td className="py-3 px-4">Mathematics</td>
                        <td className="py-3 px-4">May 10, 2023</td>
                        <td className="py-3 px-4">52 min</td>
                        <td className="py-3 px-4 font-semibold">92%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Physics Mechanics Quiz</td>
                        <td className="py-3 px-4">Physics</td>
                        <td className="py-3 px-4">May 3, 2023</td>
                        <td className="py-3 px-4">35 min</td>
                        <td className="py-3 px-4 font-semibold">78%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Biology Cell Structure</td>
                        <td className="py-3 px-4">Biology</td>
                        <td className="py-3 px-4">April 28, 2023</td>
                        <td className="py-3 px-4">40 min</td>
                        <td className="py-3 px-4 font-semibold">82%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">English Literature Analysis</td>
                        <td className="py-3 px-4">English</td>
                        <td className="py-3 px-4">April 22, 2023</td>
                        <td className="py-3 px-4">28 min</td>
                        <td className="py-3 px-4 font-semibold">88%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="leaderboard">
            <Card className="scale-in">
              <CardHeader>
                <CardTitle>Top Performing Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Rank</th>
                        <th className="text-left py-3 px-4">Student</th>
                        <th className="text-left py-3 px-4">Exams Completed</th>
                        <th className="text-left py-3 px-4">Average Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topStudents.map((student, index) => (
                        <tr key={student.id} className={index !== topStudents.length - 1 ? "border-b" : ""}>
                          <td className="py-4 px-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                              {index + 1}
                            </div>
                          </td>
                          <td className="py-4 px-4 font-medium">{student.name}</td>
                          <td className="py-4 px-4">{student.exams}</td>
                          <td className="py-4 px-4 font-semibold">{student.score}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-muted/50 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold mr-4">
                      24
                    </div>
                    <span className="font-medium">Your Rank</span>
                  </div>
                  <div className="font-semibold">85% Average Score</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
