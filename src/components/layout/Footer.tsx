
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-auto border-t border-border/30">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <Link to="/" className="text-xl font-bold">
            ExamQuest
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            Helping students excel in their high school exams
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
        
        <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ExamQuest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
