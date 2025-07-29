import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"
import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import { useEffect } from "react";
import NavBar from "~/components/NavBar";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
    const navigate = useNavigate();
    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

  return <main className="bg-[url('images/bg-main.svg')]">
    <NavBar />
    {/* {window.puter.ai.chat()} */}
    <section className="main-section">
      <h1>Track Your Application & Resume Ratings</h1>
      <h2>Review your submissions and check AI-powered feedback</h2>

    {resumes.length > 0 &&(
    <div className="resumes-section">
      {resumes.map((resume) => (
      <ResumeCard
        key={resume.id}
        resume={resume}
      />
    ))}
    </div>
  )}
  </section>
  </main>
}
