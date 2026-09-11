import Link from "next/link";
import ProjectGrid from "./components/projects/ProjectGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#08090d]/80 px-5 py-4 backdrop-blur-xl">
          <Link
            href="/"
            className="font-mono text-lg font-bold tracking-tight"
          >
            <span className="text-white">SR</span>
            <span className="text-[#5b8cff]">.</span>
            <span className="text-white">DEV</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#work"
              className="text-sm text-[#8b93a3] transition-colors hover:text-white"
            >
              Work
            </a>

            <a
              href="#skills"
              className="text-sm text-[#8b93a3] transition-colors hover:text-white"
            >
              Skills
            </a>

            <a
              href="#about"
              className="text-sm text-[#8b93a3] transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm text-[#8b93a3] transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>

          <a
            href="https://github.com/shindekrishna1523-web"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm transition-all hover:border-white/20 hover:bg-white/5"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow */}
        <div className="absolute left-[-200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#5b8cff]/10 blur-[120px]" />

        <div className="absolute bottom-[-300px] right-[-200px] h-[500px] w-[500px] rounded-full bg-[#9b6cff]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Hero content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#5b8cff]" />

              <span className="font-mono text-xs tracking-[0.2em] text-[#8b93a3]">
                SENIOR FULL-STACK .NET DEVELOPER
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              I BUILD SOFTWARE
              <br />

              <span className="text-[#8b93a3]">
                THAT SOLVES
              </span>

              <br />

              <span className="bg-gradient-to-r from-[#5b8cff] to-[#9b6cff] bg-clip-text text-transparent">
                REAL PROBLEMS.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#8b93a3] sm:text-lg">
              I&apos;m{" "}
              <span className="text-white">
                Krishnakant Shinde
              </span>
              , a Senior Full-Stack .NET Developer focused on
              building scalable APIs, modern web applications and
              reliable software systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
              >
                Explore My Work →
              </a>

              <a
                href="https://github.com/shindekrishna1523-web"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 px-6 py-3.5 text-sm text-white transition-all hover:border-white/20 hover:bg-white/5"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* System Status */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101218]/90 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest text-[#8b93a3]">
                SYSTEM.STATUS
              </span>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#35d07f]" />

                <span className="font-mono text-xs text-[#35d07f]">
                  ONLINE
                </span>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-xs text-[#8b93a3]">
                  ROLE
                </span>

                <span className="text-sm">
                  Senior Developer
                </span>
              </div>

              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-xs text-[#8b93a3]">
                  BACKEND
                </span>

                <span className="text-sm">
                  .NET / C#
                </span>
              </div>

              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-xs text-[#8b93a3]">
                  FRONTEND
                </span>

                <span className="text-sm">
                   React / Next.js

                </span>
              </div>

              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-xs text-[#8b93a3]">
                  DATABASE
                </span>

                <span className="text-sm">
                  SQL Server / MySQL
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-mono text-xs text-[#8b93a3]">
                  CLOUD
                </span>

                <span className="text-sm">
                  Azure / Vercel / Render
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-white/5 bg-black/20 p-4">
              <p className="font-mono text-xs leading-6 text-[#8b93a3]">
                <span className="text-[#5b8cff]">&gt;</span>{" "}
                Building scalable software systems...
                <span className="animate-pulse text-white">
                  _
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* Selected Work */}
          <section
              id="work"
              className="border-t border-white/5 px-6 py-28 sm:px-10 lg:px-16 lg:py-32"          >
              <div className="mx-auto max-w-7xl">
                  <p className="font-mono text-xs tracking-[0.2em] text-[#5b8cff]">
                      01 / SELECTED WORK
                  </p>

                  <div className="mt-5 max-w-4xl">
                      <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                          Projects I&apos;ve designed,
                          <br />
                          built and shipped.
                      </h2>

                      <p className="mt-6 max-w-2xl text-base leading-7 text-[#8b93a3]">
                          Real projects, real engineering decisions and
                          production-focused solutions.
                      </p>
                  </div>

                  <ProjectGrid />
              </div>
          </section>

          {/* Skills & Technologies */}
          <section
              id="skills"
              className="border-t border-white/5 px-6 py-28 sm:px-10 lg:px-16 lg:py-32"          >
              <div className="mx-auto max-w-7xl">
                  <p className="font-mono text-xs tracking-[0.2em] text-[#5b8cff]">
                      02 / SKILLS
                  </p>

                  <div className="mt-5 max-w-4xl">
                      <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                          Skills &amp; Technologies.
                      </h2>

                      <p className="mt-6 max-w-2xl text-base leading-7 text-[#8b93a3]">
                          Technologies and tools I use to build modern,
                          scalable and reliable software applications.
                      </p>
                  </div>

                  <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {/* Backend */}
                      <div className="group rounded-2xl border border-white/10 bg-[#101218] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#5b8cff]/30 hover:bg-[#141720] hover:shadow-2xl">                          <p className="font-mono text-xs tracking-[0.15em] text-[#5b8cff]">
                              01 / BACKEND
                          </p>

                          <h3 className="mt-4 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#5b8cff]">
                              Backend Development
                          </h3>

                          <div className="mt-6 flex flex-wrap gap-2">
                              {[
                                  "C#",
                                  ".NET",
                                  "ASP.NET Core",
                                  "Web API",
                                  "WCF",
                                  "ADO.NET",
                                  "MVC",
                                  "MVC Core",
                              ].map((skill) => (
                                  <span
                                      key={skill}
                                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 font-mono text-xs text-[#b8bfcc] transition-colors hover:border-[#5b8cff]/30 hover:text-white"                                  >
                                      {skill}
                                  </span>
                              ))}
                          </div>
                      </div>

                      {/* Frontend */}
                      <div className="group rounded-2xl border border-white/10 bg-[#101218] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#5b8cff]/30 hover:bg-[#141720] hover:shadow-2xl">                          <p className="font-mono text-xs tracking-[0.15em] text-[#5b8cff]">
                              02 / FRONTEND
                          </p>

                          <h3 className="mt-4 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#5b8cff]">
                              Frontend Development
                          </h3>

                          <div className="mt-6 flex flex-wrap gap-2">
                              {[
                                  "HTML",
                                  "CSS",
                                  "Bootstrap",
                                  "JavaScript",
                                  "jQuery",
                                  "TypeScript",
                                  "React (Basic)",
                                  "Next.js (Basic)",
                              ].map((skill) => (
                                  <span
                                      key={skill}
                                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 font-mono text-xs text-[#b8bfcc] transition-colors hover:border-[#5b8cff]/30 hover:text-white"                                  >
                                      {skill}
                                  </span>
                              ))}
                          </div>
                      </div>

                      {/* Database */}
                      <div className="group rounded-2xl border border-white/10 bg-[#101218] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#5b8cff]/30 hover:bg-[#141720] hover:shadow-2xl">                          <p className="font-mono text-xs tracking-[0.15em] text-[#5b8cff]">
                              03 / DATA
                          </p>

                          <h3 className="mt-4 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#5b8cff]">
                              Database
                          </h3>

                          <div className="mt-6 flex flex-wrap gap-2">
                              {[
                                  "SQL Server",
                                  "PostgreSQL (Basic)",
                                  "MySQL",
                                  "EF Core",
                                  "ADO.NET",
                                  "Database Design",
                              ].map((skill) => (
                                  <span
                                      key={skill}
                                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 font-mono text-xs text-[#b8bfcc] transition-colors hover:border-[#5b8cff]/30 hover:text-white"                                  >
                                      {skill}
                                  </span>
                              ))}
                          </div>
                      </div>

                      {/* Cloud */}
                      <div className="group rounded-2xl border border-white/10 bg-[#101218] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#5b8cff]/30 hover:bg-[#141720] hover:shadow-2xl">                          <p className="font-mono text-xs tracking-[0.15em] text-[#5b8cff]">
                              04 / CLOUD
                          </p>

                          <h3 className="mt-4 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#5b8cff]">
                              Cloud &amp; Tools
                          </h3>

                          <div className="mt-6 flex flex-wrap gap-2">
                              {[
                                  "Azure",
                                  "Vercel",
                                  "Render",
                                  "Git",
                                  "GitHub",
                                  "Visual Studio",
                                  "Postman",
                                  "Swagger",
                                  "Linux (Basic)",
                              ].map((skill) => (
                                  <span
                                      key={skill}
                                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 font-mono text-xs text-[#b8bfcc] transition-colors hover:border-[#5b8cff]/30 hover:text-white"                                  >
                                      {skill}
                                  </span>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* About */}
          <section
              id="about"
              className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
          >
              <div className="mx-auto max-w-7xl">
                  <div className="mb-14">
                      <p className="mb-4 font-mono text-xs tracking-[0.25em] text-blue-400">
                          03 / ABOUT
                      </p>

                      <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                          Building reliable software with a
                          <span className="text-white/50"> full-stack mindset.</span>
                      </h2>
                  </div>

                  <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                      {/* Profile */}
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                          <div className="mb-8">
                              <h3 className="text-2xl font-semibold text-white">
                                  Krishnakant Shinde
                              </h3>

                              <p className="mt-2 font-mono text-sm text-blue-400">
                                  Sr. .NET Developer
                              </p>
                          </div>

                          <div className="space-y-5 text-sm leading-7 text-white/60">
                              <p>
                                  I am a Senior .NET Developer with 4.4+ years of professional
                                  software development experience, focused on building reliable
                                  backend systems, REST APIs and modern web applications.
                              </p>

                              <p>
                                  My core experience is in C#, .NET, ASP.NET Core, Web API, MVC,
                                  WCF, ADO.NET and SQL Server. I also work with modern frontend
                                  technologies including JavaScript, TypeScript, React and Next.js.
                              </p>

                              <p>
                                  I enjoy working across the application stack — from database
                                  design and backend APIs to frontend interfaces, authentication,
                                  integrations and cloud deployment.
                              </p>
                          </div>

                          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                              <div className="border-l border-white/10 pl-4">
                                  <p className="font-mono text-xl text-white">4.4+</p>
                                  <p className="mt-1 text-xs text-white/40">
                                      Years Experience
                                  </p>
                              </div>

                              <div className="border-l border-white/10 pl-4">
                                  <p className="font-mono text-xl text-white">3.4+</p>
                                  <p className="mt-1 text-xs text-white/40">
                                      Years .NET
                                  </p>
                              </div>

                              <div className="border-l border-white/10 pl-4">
                                  <p className="font-mono text-xl text-white">.NET</p>
                                  <p className="mt-1 text-xs text-white/40">
                                      Core Backend
                                  </p>
                              </div>

                              <div className="border-l border-white/10 pl-4">
                                  <p className="font-mono text-xl text-white">2022</p>
                                  <p className="mt-1 text-xs text-white/40">
                                      Graduate
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* Experience */}
                      <div>
                          <p className="mb-5 font-mono text-xs tracking-[0.2em] text-white/40">
                              EXPERIENCE
                          </p>

                          <div className="space-y-5">
                              {/* Current */}
                              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                                      <div>
                                          <h3 className="text-lg font-semibold text-white">
                                              Gtek Corporation Pvt Ltd
                                          </h3>

                                          <p className="mt-1 text-sm text-blue-400">
                                              Sr. .NET Developer
                                          </p>
                                      </div>

                                      <span className="font-mono text-xs text-emerald-400">
                                          PRESENT
                                      </span>
                                  </div>

                                  <p className="mt-5 text-sm leading-6 text-white/50">
                                      Vadodara, Gujarat
                                  </p>

                                  <div className="mt-5 flex flex-wrap gap-2">
                                      {[
                                          "C#",
                                          ".NET",
                                          "ASP.NET Core",
                                          "Web API",
                                          "SQL Server",
                                          "Azure",
                                      ].map((skill) => (
                                          <span
                                              key={skill}
                                              className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-white/50"
                                          >
                                              {skill}
                                          </span>
                                      ))}
                                  </div>
                              </div>

                              {/* Previous */}
                              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                                      <div>
                                          <h3 className="text-lg font-semibold text-white">
                                              Anycode Technologies
                                          </h3>

                                          <p className="mt-1 text-sm text-white/60">
                                              .NET Developer
                                          </p>
                                      </div>

                                      <span className="font-mono text-xs text-white/40">
                                          3.4 YEARS
                                      </span>
                                  </div>

                                  <p className="mt-5 text-sm leading-6 text-white/50">
                                      KK Market, Dhankawadi, Pune
                                  </p>

                                  <div className="mt-5 space-y-3 text-sm text-white/50">
                                      <p>• ASP.NET Core development</p>
                                      <p>• REST API development</p>
                                      <p>• SQL Server development</p>
                                      <p>• MVC / MVC Core application development</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Education */}
                  <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                      <div className="flex flex-col justify-between gap-3 sm:flex-row">
                          <div>
                              <p className="font-mono text-xs tracking-[0.2em] text-white/40">
                                  EDUCATION
                              </p>

                              <h3 className="mt-3 text-lg font-semibold text-white">
                                  COCSIT College, Latur
                              </h3>

                              <p className="mt-1 text-sm text-white/50">
                                  SRTMU Nanded University
                              </p>
                          </div>

                          <span className="font-mono text-xs text-white/40">
                              PASSED OUT · 2022
                          </span>
                      </div>
                  </div>
              </div>
          </section>

      {/* Contact */}
          <section
              id="contact"
              className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
          >
              <div className="mx-auto max-w-7xl">
                  <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
                      {/* Left */}
                      <div>
                          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-blue-400">
                              04 / CONTACT
                          </p>

                          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                              Let&apos;s build something
                              <span className="text-white/40"> useful.</span>
                          </h2>

                          <p className="mt-6 max-w-2xl text-base leading-7 text-white/50">
                              I&apos;m open to opportunities where I can contribute my
                              experience in .NET, backend development and modern web
                              technologies to build reliable and practical software
                              solutions.
                          </p>

                          <div className="mt-10 flex flex-wrap gap-4">
                              <a
                                  href="mailto:shindekrishna1507@gmail.com"
                                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-4 text-sm font-medium text-white transition hover:border-blue-400/40 hover:bg-white/[0.08]"
                              >
                                  Email Me
                                  <span aria-hidden="true">↗</span>
                              </a>

                              <a
                                  href="https://github.com/shindekrishna1523-web"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 px-6 py-4 text-sm font-medium text-white/70 transition hover:border-white/20 hover:text-white"
                              >
                                  GitHub
                                  <span aria-hidden="true">↗</span>
                              </a>
                          </div>
                      </div>

                      {/* Contact Information */}
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                          <p className="mb-6 font-mono text-xs tracking-[0.2em] text-white/40">
                              CONTACT.INFO
                          </p>

                          <div className="space-y-6">
                              <div>
                                  <p className="text-xs text-white/30">NAME</p>
                                  <p className="mt-2 text-sm text-white">
                                      Krishnakant Shinde
                                  </p>
                              </div>

                              <div>
                                  <p className="text-xs text-white/30">ROLE</p>
                                  <p className="mt-2 text-sm text-white">
                                      Sr. .NET Developer
                                  </p>
                              </div>

                              <div>
                                  <p className="text-xs text-white/30">EMAIL</p>
                                  <a
                                      href="mailto:shindekrishna1507@gmail.com"
                                      className="mt-2 inline-block text-sm text-white transition hover:text-blue-400"
                                  >
                                      shindekrishna1507@gmail.com
                                  </a>
                              </div>

                              <div>
                                  <p className="text-xs text-white/30">LOCATION</p>
                                  <p className="mt-2 text-sm text-white">
                                      Vadodara, Gujarat
                                  </p>
                              </div>

                              <div>
                                  <p className="text-xs text-white/30">GITHUB</p>
                                  <a
                                      href="https://github.com/shindekrishna1523-web"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="mt-2 inline-block text-sm text-white transition hover:text-blue-400"
                                  >
                                      github.com/shindekrishna1523-web ↗
                                  </a>
                              </div>
                          </div>

                          <div className="mt-8 border-t border-white/10 pt-6">
                              <div className="flex items-center gap-3">
                                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                                  <span className="font-mono text-xs text-emerald-400">
                                      OPEN TO OPPORTUNITIES
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

      {/* Footer */}
          <footer className="border-t border-white/10 px-6 py-10 sm:px-10 lg:px-16">
              <div className="mx-auto max-w-7xl">
                  <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                      {/* Brand */}
                      <div>
                          <p className="font-mono text-lg font-semibold tracking-tight text-white">
                              SR.DEV
                          </p>

                          <p className="mt-2 text-sm text-white/40">
                              Krishnakant Shinde · Sr. .NET Developer
                          </p>
                      </div>

                      {/* Navigation */}
                      <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/40">
                          <a
                              href="#work"
                              className="transition hover:text-white"
                          >
                              Work
                          </a>

                          <a
                              href="#skills"
                              className="transition hover:text-white"
                          >
                              Skills
                          </a>

                          <a
                              href="#about"
                              className="transition hover:text-white"
                          >
                              About
                          </a>

                          <a
                              href="#contact"
                              className="transition hover:text-white"
                          >
                              Contact
                          </a>

                          <a
                              href="https://github.com/shindekrishna1523-web"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition hover:text-white"
                          >
                              GitHub ↗
                          </a>
                      </nav>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
                      <p>
                          © {new Date().getFullYear()} SR.DEV. All rights reserved.
                      </p>

                      <p className="font-mono">
                          BUILT WITH NEXT.JS · TYPESCRIPT
                      </p>
                  </div>
              </div>
          </footer>
    </main>
  );
}