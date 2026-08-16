import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ChevronDown, Server, Shield, Activity, Code } from 'lucide-react';

const TECH_STACK = ["Java", "Python", "SQL Server", "Power BI", "R", "Docker", "AWS", "Linux", "Git", "CI/CD", "Agile"];

const PROJECTS = [
  { title: "RAG-Chatbot", desc: "Secure, local RAG featuring Java Spring Boot, Python FastAPI, Ollama, and ChromaDB." },
  { title: "StatementProcessorJava", desc: "High-throughput Java/Maven engine for financial data extraction to SQL." },
  { title: "Data-collection-pipeline", desc: "Python ETL pipeline using browser automation for cloud data extraction." },
  { title: "Home Lab Infrastructure", desc: "Proxmox, Raspberry Pi cluster, K3s, Ansible, and Home Assistant automation." }
];

const TRAINING_MODULES = [
  {
    id: 1, title: "Agile Software Development & SDLC", icon: <Activity className="text-tokyo-purple" size={24}/>, color: "border-tokyo-purple",
    focus: "Enterprise project management and requirements gathering.",
    highlights: ["Managed 1-month software sprints.", "Translated high-level requirements into formal Agile User Stories.", "Managed Jira backlogs using MoSCoW prioritization.", "Fibonacci sequence for Story Point estimation."]
  },
  {
    id: 2, title: "Secure AI & Data Engineering", icon: <Shield className="text-tokyo-cyan" size={24}/>, color: "border-tokyo-cyan",
    focus: "Building secure, air-gapped AI apps for sensitive data.",
    highlights: ["Architected 100% locally hosted RAG pipelines.", "Built Python ingestion pipelines with LangChain.", "Integrated FAISS/ChromaDB vector databases & local LLMs.", "Built Streamlit chat interfaces with mandatory citations & RBAC."]
  },
  {
    id: 3, title: "Software Testing & QA (TDD)", icon: <Code className="text-tokyo-green" size={24}/>, color: "border-tokyo-green",
    focus: "Enterprise-grade reliability, TDD, and UAT.",
    highlights: ["Applied Right B.I.C.E.P. methodology for stress-testing.", "Authored automated unit tests in JUnit 5 (AAA pattern).", "Isolated dependencies using Mockito.", "Engineered automated browser UI tests via Selenium WebDriver."]
  },
  {
    id: 4, title: "Core Programming & DevOps", icon: <Server className="text-tokyo-blue" size={24}/>, color: "border-tokyo-blue",
    focus: "Backend architecture, build tools, and automated pipelines.",
    highlights: ["Developed multithreaded Java applications.", "Managed enterprise builds utilizing Apache Maven.", "Configured strict CI/CD pipelines with GitHub Actions.", "Blocked unverified code from production branches."]
  }
];

export default function App() {
  const [expandedId, setExpandedId] = useState(null);

  return (
      <div className="min-h-screen font-sans selection:bg-tokyo-purple selection:text-white">

        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="text-xl font-bold text-white tracking-wider">AMAL<span className="text-tokyo-purple">.DEV</span></div>
          <div className="flex gap-4">
            <a href="https://github.com/amalsebastian7" target="_blank" rel="noreferrer" className="hover:text-tokyo-blue transition-colors"><Github /></a>
            <a href="https://www.linkedin.com/in/amalsebastian13/" target="_blank" rel="noreferrer" className="hover:text-tokyo-blue transition-colors"><Linkedin /></a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Amal Sebastian
            </h1>
            <h2 className="text-xl md:text-2xl text-tokyo-blue">
              Software Engineer | Data Analyst | Backend Automation Expert
            </h2>
            <p className="text-lg text-tokyo-text max-w-lg">
              Turning complex data into robust, automated solutions. Building secure pipelines, intelligent chatbots, and enterprise-grade infrastructure.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#projects" className="bg-tokyo-purple hover:bg-tokyo-purple/80 text-white px-6 py-3 rounded-lg font-medium transition-all">View Projects</a>
              <a href="https://www.linkedin.com/in/amalsebastian13/" target="_blank" rel="noreferrer" className="border border-tokyo-border hover:border-tokyo-blue px-6 py-3 rounded-lg font-medium transition-all text-white">Contact Me</a>
            </div>
          </div>

          {/* Spline 3D Container */}
          <div className="flex-1 w-full min-h-[400px] md:min-h-[600px] bg-tokyo-card/30 rounded-2xl border border-tokyo-border overflow-hidden relative">
            <iframe
                src="https://my.spline.design/nexbotrobotcharacterconcept-n9VsbtQLCPt487VQmmrGPA5n/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0"
                title="Spline Robot"
            ></iframe>
          </div>
        </section>

        {/* Tech Stack Marquee */}
        <div className="py-8 bg-tokyo-card/50 border-y border-tokyo-border overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee flex gap-12 px-6 items-center">
            {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                <span key={i} className="text-2xl font-semibold text-white/50">{tech}</span>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-8 h-1 bg-tokyo-blue rounded-full"></span> Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-tokyo-cyan transition-colors group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-tokyo-cyan transition-colors">{project.title}</h4>
                  <p className="text-tokyo-text">{project.desc}</p>
                </div>
            ))}
          </div>
        </section>

        {/* Enterprise Training Bento Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-4">
            <span className="w-8 h-1 bg-tokyo-purple rounded-full"></span> Enterprise Training & Specializations
          </h3>
          <p className="mb-12 text-tokyo-blue">SCQF Level 8 Software Developer Apprenticeship</p>

          <div className="grid md:grid-cols-2 gap-6">
            {TRAINING_MODULES.map((mod) => (
                <motion.div
                    layout
                    key={mod.id}
                    onClick={() => setExpandedId(expandedId === mod.id ? null : mod.id)}
                    className={`p-6 rounded-2xl bg-tokyo-card border border-tokyo-border cursor-pointer transition-all duration-300 hover:border-white/30 overflow-hidden ${expandedId === mod.id ? `border-b-4 ${mod.color}` : ''}`}
                >
                  <motion.div layout="position" className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-tokyo-bg">{mod.icon}</div>
                      <h4 className="text-lg font-bold text-white">{mod.title}</h4>
                    </div>
                    <motion.div animate={{ rotate: expandedId === mod.id ? 180 : 0 }}>
                      <ChevronDown className="text-tokyo-text" />
                    </motion.div>
                  </motion.div>

                  <AnimatePresence>
                    {expandedId === mod.id && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-4 border-t border-tokyo-border"
                        >
                          <p className="text-tokyo-cyan font-medium mb-3">Focus: {mod.focus}</p>
                          <ul className="space-y-2 list-disc list-inside text-sm text-tokyo-text">
                            {mod.highlights.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-tokyo-border py-12 mt-24 text-center">
          <p className="text-tokyo-text italic mb-4">"Turning complex data into robust, automated solutions."</p>
          <p className="text-sm text-tokyo-border">&copy; 2026 Amal Sebastian</p>
        </footer>
      </div>
  );
}