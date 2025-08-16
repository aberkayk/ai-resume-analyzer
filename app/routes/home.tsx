import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resulyze" },
    { name: "description", content: "Smarter resume analysis!" },
  ];
}

export default function Home() {
  const { isLoading, auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16 ">
          <h1>Track Your Applications and Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>
        <div className="resumes-section">
          {resumes.length > 0 &&
            resumes.map((resume: Resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
        </div>
      </section>
    </main>
  );
}
