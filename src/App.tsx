import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { resumeData } from "./data/resume";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header contact={resumeData.contact} />

      <main className="pt-16">
        <Hero data={resumeData} />
        <About data={resumeData} />
        <Experience experiences={resumeData.experience} />
        <Skills skills={resumeData.skills} />
        <Education education={resumeData.education} />
      </main>

      <Footer contact={resumeData.contact} />
    </div>
  );
};

export default App;
