import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { Server, Shield, Activity, Code, Briefcase, GraduationCap, Cpu, Database, Cloud } from 'lucide-react';

const SKILLS_WITH_COLORS = [
  { name: "Java 21", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
  { name: "Spring Boot", color: "bg-green-500/20 text-green-300 border-green-500/40" },
  { name: "Python 3.9+", color: "bg-teal-500/20 text-teal-300 border-teal-500/40" },
  { name: "FastAPI", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" },
  { name: "SQL Server", color: "bg-blue-500/20 text-blue-300 border-blue-500/40" },
  { name: "PostgreSQL", color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40" },
  { name: "ChromaDB / FAISS", color: "bg-rose-500/20 text-rose-300 border-rose-500/40" },
  { name: "Ollama & Llama 3.1", color: "bg-purple-500/20 text-purple-300 border-purple-500/40" },
  { name: "LangChain", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
  { name: "Power BI", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40" },
  { name: "R & SPSS", color: "bg-sky-500/20 text-sky-300 border-sky-500/40" },
  { name: "Selenium Automation", color: "bg-lime-500/20 text-lime-300 border-lime-500/40" },
  { name: "Docker & Podman", color: "bg-sky-600/20 text-sky-200 border-sky-600/40" },
  { name: "AWS (RDS / EC2)", color: "bg-orange-500/20 text-orange-300 border-orange-500/40" },
  { name: "Linux & Bash", color: "bg-zinc-500/20 text-zinc-300 border-zinc-500/40" },
  { name: "Git & GitHub Actions", color: "bg-red-500/20 text-red-300 border-red-500/40" },
  { name: "Prometheus & Grafana", color: "bg-amber-600/20 text-amber-200 border-amber-600/40" },
  { name: "JUnit 5 & Mockito", color: "bg-violet-500/20 text-violet-300 border-violet-500/40" },
  { name: "Agile & Jira (MoSCoW)", color: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40" }
];

const PROJECTS = [
  {
    title: "🛡️ Enterprise Local RAG Chatbot",
    desc: "100% locally hosted, air-gapped Retrieval-Augmented Generation system built as a polyglot microservice. Features a Java Spring Boot file orchestrator, Python FastAPI AI engine, Ollama (Llama 3.1), and ChromaDB vector storage with strict context grounding and source citation.",
    tags: ["Java 21", "Spring Boot", "Python FastAPI", "Ollama", "ChromaDB", "LangChain", "Streamlit"]
  },
  {
    title: "🌐 Scalable Cloud Data Collection Pipeline",
    desc: "Industry-grade cloud ETL pipeline scraping cryptocurrency market data via Selenium. Features automated browser navigation, historical data transformation with Pandas, AWS RDS storage, containerization via Docker, Prometheus/Grafana monitoring, and CI/CD deployment with GitHub Actions.",
    tags: ["Python", "Selenium", "Pandas", "AWS RDS", "Docker", "Prometheus", "Grafana", "GitHub Actions"]
  },
  {
    title: "🏦 StatementProcessorJava",
    desc: "High-throughput Java/Maven engine engineered to parse unstructured PDF & CSV financial statements, clean transaction data, maintain secure environment configurations, and stream records directly into SQL databases.",
    tags: ["Java", "Maven", "SQL Server", "PDF Parsing", "ETL"]
  },
  {
    title: "🏡 Home Lab Infrastructure & Automation",
    desc: "Resilient self-hosted infrastructure running on Proxmox virtualization and a Raspberry Pi cluster. Managed via K3s (Kubernetes) and Ansible, featuring full-stack observability with Prometheus/Grafana and Home Assistant IoT automation.",
    tags: ["Proxmox", "Kubernetes", "Ansible", "Docker", "Prometheus", "Grafana", "Home Assistant"]
  }
];

const TRAINING_MODULES = [
  {
    id: 1, title: "Agile Software Development & SDLC", icon: <Activity className="text-tokyo-purple" size={24}/>, color: "border-tokyo-purple",
    focus: "Enterprise project management and requirements gathering.",
    highlights: ["Managed 1-month software sprints as developer and project planner.", "Translated business requirements into formal Agile User Stories with strict Acceptance Criteria.", "Maintained Jira backlogs using MoSCoW prioritization and Fibonacci story point estimation."]
  },
  {
    id: 2, title: "Secure AI & Data Engineering", icon: <Shield className="text-tokyo-cyan" size={24}/>, color: "border-tokyo-cyan",
    focus: "Building secure, air-gapped AI apps for sensitive corporate/clinical environments.",
    highlights: ["Architected 100% locally hosted RAG pipelines with zero external API data leakage.", "Built LangChain chunking strategies and integrated ChromaDB vector stores with local LLMs.", "Developed Streamlit chat interfaces featuring mandatory source citations and RBAC governance."]
  },
  {
    id: 3, title: "Software Testing & QA (TDD)", icon: <Code className="text-tokyo-green" size={24}/>, color: "border-tokyo-green",
    focus: "Enterprise-grade reliability through TDD and automated quality assurance.",
    highlights: ["Applied 'Right B.I.C.E.P.' methodology to stress-test pipeline boundary conditions.", "Authored automated unit tests in JUnit 5 using the Arrange-Act-Assert (AAA) pattern.", "Isolated dependencies using Mockito test doubles and engineered Selenium WebDriver UI tests."]
  },
  {
    id: 4, title: "Core Programming & DevOps", icon: <Server className="text-tokyo-blue" size={24}/>, color: "border-tokyo-blue",
    focus: "Robust backend architecture, dependency management, and CI/CD pipelines.",
    highlights: ["Developed object-oriented, multithreaded Java applications and CLI toolsets.", "Managed enterprise builds utilizing Apache Maven and Surefire XML test reports.", "Configured strict GitHub Actions CI pipelines to block unverified code from production."]
  }
];

const EXPERIENCE = [
  {
    role: "Programmer",
    company: "University of Aberdeen",
    period: "Dec 2025 — Present",
    current: true,
    desc: "Transitioning into core software engineering, focusing on Java, software testing, system design, and agile methodologies for enterprise projects."
  },
  {
    role: "Junior Data Analyst",
    company: "University of Aberdeen",
    period: "Aug 2023 — Nov 2025",
    current: false,
    desc: "Improved health data processes using SQL Server, Python, R, SPSS, and Linux. Built dynamic Power BI dashboards and streamlined workflows using Jira."
  },
  {
    role: "Data Analyst (Honorary)",
    company: "NHS Grampian",
    period: "Sep 2023 — Nov 2025",
    current: false,
    desc: "Collaborated on a joint health data project to organize and anonymize sensitive hospital data, ensuring 100% GDPR compliance for clinical research."
  }
];

const EDUCATION = [
  {
    degree: "Software Developer Apprenticeship (SCQF L8)",
    institution: "University of Aberdeen",
    period: "Jun 2025 — Dec 2026",
    desc: "Mastering the full Software Development Life Cycle, TDD with JUnit/Mockito, Agile delivery, and air-gapped RAG engineering."
  },
  {
    degree: "MSc in Data Science",
    institution: "University of Aberdeen",
    period: "Sep 2021 — Sep 2022",
    desc: "Specialized in machine learning (KNN, Neural Networks, Bayesian regression), time-series forecasting, and computer vision."
  },
  {
    degree: "BCA, Cloud Computing & Cyber Security",
    institution: "Bangalore University",
    period: "2017 — 2020",
    desc: "Built core foundations in C/C++, Java, operating systems, cryptography, and network security."
  }
];

export default function App() {
  return (
      <div className="min-h-screen font-sans selection:bg-tokyo-purple selection:text-white bg-tokyo-bg text-tokyo-text overflow-x-hidden">

        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto sticky top-0 bg-tokyo-bg/85 backdrop-blur-md z-50 border-b border-tokyo-border/40">
          <div className="text-xl font-bold text-white tracking-wider">AMAL<span className="text-tokyo-purple">.DEV</span></div>
          <div className="flex gap-6 items-center">
            <a href="#skills" className="text-sm hover:text-tokyo-blue transition-colors hidden md:block">Skills</a>
            <a href="#experience" className="text-sm hover:text-tokyo-blue transition-colors hidden md:block">Experience</a>
            <a href="#projects" className="text-sm hover:text-tokyo-blue transition-colors hidden md:block">Projects</a>
            <a href="#training" className="text-sm hover:text-tokyo-blue transition-colors hidden md:block">Training</a>
            <div className="h-4 w-[1px] bg-tokyo-border hidden md:block"></div>
            <a href="https://github.com/amalsebastian7" target="_blank" rel="noreferrer" className="hover:text-tokyo-blue transition-colors"><FiGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/amalsebastian13/" target="_blank" rel="noreferrer" className="hover:text-tokyo-blue transition-colors"><FiLinkedin size={20} /></a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">

          {/* Immersive Spline Background */}
          <div className="absolute top-0 right-[-10%] md:right-0 w-full md:w-[60%] h-[calc(100%+80px)] z-0 pointer-events-auto overflow-hidden opacity-90">
            <iframe
                src="https://my.spline.design/nexbotrobotcharacterconcept-n9VsbtQLCPt487VQmmrGPA5n/"
                frameBorder="0"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Spline Robot"
            ></iframe>
          </div>

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-tokyo-bg via-tokyo-bg/90 to-transparent z-10 pointer-events-none"></div>

          {/* Hero Text */}
          <div className="max-w-7xl mx-auto px-6 w-full relative z-20 flex flex-col items-start pointer-events-none">
            <div className="max-w-xl space-y-6 pointer-events-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Amal Sebastian
              </h1>
              <h2 className="text-xl md:text-2xl text-tokyo-blue font-medium">
                Software Engineer | Data Analyst | Backend Automation Expert
              </h2>
              <p className="text-lg text-tokyo-text leading-relaxed">
                Turning complex data into robust, automated solutions. Building secure pipelines, intelligent chatbots, and enterprise-grade infrastructure.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#projects" className="bg-tokyo-purple hover:bg-tokyo-purple/80 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-tokyo-purple/20">View Projects</a>
                <a href="https://www.linkedin.com/in/amalsebastian13/" target="_blank" rel="noreferrer" className="border border-tokyo-border hover:border-tokyo-blue px-6 py-3 rounded-xl font-medium transition-all text-white backdrop-blur-sm">Contact Me</a>
              </div>
            </div>
          </div>
        </section>

        {/* Filled Edge-to-Edge Skills Section (Tucked up to meet robot legs seamlessly) */}
        <section id="skills" className="w-full relative z-30 -mt-16 md:-mt-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto bg-tokyo-card/80 border border-tokyo-border/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="flex flex-wrap gap-2.5 items-center justify-start">
              {SKILLS_WITH_COLORS.map((skill, i) => (
                  <span key={i} className={`px-3.5 py-2 rounded-lg border text-sm font-semibold transition-transform hover:scale-105 ${skill.color}`}>
                {skill.name}
              </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Education Section (Moved right after skills) */}
        <section id="experience" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Career Path */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Briefcase className="text-tokyo-blue" size={28} />
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-8 border-l border-tokyo-border pl-6 ml-3">
                {EXPERIENCE.map((exp, i) => (
                    <div key={i} className="relative">
                      <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-tokyo-blue border-4 border-tokyo-bg"></span>
                      <span className="text-xs font-semibold text-tokyo-blue tracking-wider uppercase">{exp.period}</span>
                      <h4 className="text-lg font-bold text-white mt-1 flex items-center gap-2">
                        {exp.role}
                        {exp.current && <span className="text-[10px] bg-tokyo-blue/20 text-tokyo-blue px-2 py-0.5 rounded-full">Current</span>}
                      </h4>
                      <p className="text-sm text-tokyo-cyan mb-2">{exp.company}</p>
                      <p className="text-sm text-tokyo-text leading-relaxed">{exp.desc}</p>
                    </div>
                ))}
              </div>
            </div>

            {/* Education Path */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="text-tokyo-purple" size={28} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-8 border-l border-tokyo-border pl-6 ml-3">
                {EDUCATION.map((edu, i) => (
                    <div key={i} className="relative">
                      <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-tokyo-purple border-4 border-tokyo-bg"></span>
                      <span className="text-xs font-semibold text-tokyo-purple tracking-wider uppercase">{edu.period}</span>
                      <h4 className="text-lg font-bold text-white mt-1">{edu.degree}</h4>
                      <p className="text-sm text-tokyo-cyan mb-2">{edu.institution}</p>
                      <p className="text-sm text-tokyo-text leading-relaxed">{edu.desc}</p>
                    </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-12">
            <span className="w-8 h-1 bg-tokyo-blue rounded-full"></span>
            <h3 className="text-3xl font-bold text-white">Featured Projects & Systems</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
                <div key={i} className="p-8 rounded-2xl bg-tokyo-card/50 backdrop-blur-md border border-tokyo-border hover:border-tokyo-cyan transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-tokyo-cyan transition-colors">{project.title}</h4>
                    <p className="text-tokyo-text leading-relaxed text-sm mb-6">{project.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-tokyo-border/50">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-tokyo-bg px-2.5 py-1 rounded-md text-tokyo-blue border border-tokyo-border">
                    {tag}
                  </span>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* Enterprise Training & Specializations (Always Open) */}
        <section id="training" className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-2">
            <span className="w-8 h-1 bg-tokyo-purple rounded-full"></span>
            <h3 className="text-3xl font-bold text-white">Enterprise Training & Specializations</h3>
          </div>
          <p className="mb-10 text-tokyo-blue font-medium">SCQF Level 8 Software Developer Apprenticeship</p>

          <div className="grid md:grid-cols-2 gap-6">
            {TRAINING_MODULES.map((mod) => (
                <div
                    key={mod.id}
                    className={`p-6 rounded-2xl bg-tokyo-card border border-tokyo-border transition-all duration-300 hover:border-white/30 border-b-4 ${mod.color}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-tokyo-bg">{mod.icon}</div>
                    <h4 className="text-lg font-bold text-white">{mod.title}</h4>
                  </div>

                  <div className="pt-3 border-t border-tokyo-border">
                    <p className="text-tokyo-cyan font-medium text-sm mb-3">Focus: {mod.focus}</p>
                    <ul className="space-y-2 list-disc list-inside text-sm text-tokyo-text">
                      {mod.highlights.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-tokyo-border py-12 mt-24 text-center bg-tokyo-card/20">
          <p className="text-tokyo-text italic mb-4">"Turning complex data into robust, automated solutions."</p>
          <p className="text-sm text-tokyo-border">&copy; 2026 Amal Sebastian</p>
        </footer>
      </div>
  );
}