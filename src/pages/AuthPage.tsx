
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import AuthForm from "@/components/auth/AuthForm";

export default function AuthPage() {
  useEffect(() => {
    document.title = "Sign In - ExamQuest";
  }, []);

  return (
    <Layout withFooter={false}>
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-4 py-20">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-8 slide-in-from-bottom">
            Welcome to ExamQuest
          </h1>
          <AuthForm />
        </div>
      </div>
    </Layout>
  );
}
