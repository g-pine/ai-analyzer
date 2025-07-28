'use client';
import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import NavBar from "~/components/NavBar";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('images/bg-main.svg')]">
    <NavBar />
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
