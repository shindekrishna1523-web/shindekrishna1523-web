import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectCaseStudy({
    params,
}: PageProps) {
    const { slug } = await params;

    const project = projects.find(
        (item) => item.id === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#08090D] text-white">
            {/* NAVBAR */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090D]/90 backdrop-blur-xl">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
                    <Link
                        href="/"
                        className="font-mono text-lg font-bold tracking-tight"
                    >
                        SR<span className="text-[#5B8CFF]">.</span>DEV
                    </Link>

                    <Link
                        href="/#work"
                        className="font-mono text-xs tracking-wider text-[#8B93A3] transition-colors hover:text-white"
                    >
                        ← BACK TO WORK
                    </Link>
                </nav>
            </header>

            {/* HERO */}
            <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:py-32">
                <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#5B8CFF]/10 blur-[120px]" />

                <div className="relative mx-auto max-w-7xl">
                    <p className="font-mono text-xs tracking-[0.25em] text-[#5B8CFF]">
                        {project.number} / {project.category}
                    </p>

                    <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
                        {project.title}
                    </h1>

                    <p className="mt-8 max-w-3xl text-base leading-8 text-[#8B93A3] sm:text-lg">
                        {project.description}
                    </p>

                    {/* PROJECT LINKS */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#5B8CFF] hover:text-white"
                            >
                                VIEW LIVE PROJECT
                                <span className="ml-2">↗</span>
                            </a>
                        )}

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-white/10 px-6 py-3 text-sm text-[#D9DDE5] transition-all duration-300 hover:-translate-y-1 hover:border-[#5B8CFF]/40 hover:text-white"
                            >
                                VIEW GITHUB
                                <span className="ml-2">↗</span>
                            </a>
                        )}
                    </div>

                    {/* PROJECT META */}
                    <div className="mt-16 grid max-w-4xl gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
                        <div>
                            <p className="font-mono text-[10px] tracking-[0.2em] text-[#626A7A]">
                                ROLE
                            </p>

                            <p className="mt-2 text-sm text-[#D9DDE5]">
                                {project.role}
                            </p>
                        </div>

                        <div>
                            <p className="font-mono text-[10px] tracking-[0.2em] text-[#626A7A]">
                                ARCHITECTURE
                            </p>

                            <p className="mt-2 text-sm text-[#D9DDE5]">
                                Full-Stack
                            </p>
                        </div>

                        <div>
                            <p className="font-mono text-[10px] tracking-[0.2em] text-[#626A7A]">
                                DEPLOYMENT
                            </p>

                            <p className="mt-2 text-sm text-[#D9DDE5]">
                                Cloud
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#5B8CFF]">
                        01 / OVERVIEW
                    </p>

                    <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
                        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                            Building a modern AI-powered assistant.
                        </h2>

                        <div>
                            <p className="leading-8 text-[#8B93A3]">
                                This application combines a modern
                                Next.js frontend with an ASP.NET Core
                                Web API backend, PostgreSQL persistence
                                and Google Gemini AI integration.
                            </p>

                            <p className="mt-5 leading-8 text-[#8B93A3]">
                                The system is designed around a
                                full-stack architecture where the
                                frontend provides the user experience,
                                while the backend manages APIs,
                                authentication, data persistence and
                                AI communication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ARCHITECTURE */}
            <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#5B8CFF]">
                        02 / ARCHITECTURE
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                        System Architecture
                    </h2>

                    <p className="mt-6 max-w-3xl leading-8 text-[#8B93A3]">
                        {project.architecture}
                    </p>

                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        <ArchitectureCard
                            number="01"
                            title="Frontend"
                            description="Next.js, React, TypeScript and Tailwind CSS."
                        />

                        <ArchitectureCard
                            number="02"
                            title="Backend"
                            description="ASP.NET Core Web API with C# and RESTful APIs."
                        />

                        <ArchitectureCard
                            number="03"
                            title="Data & AI"
                            description="PostgreSQL persistence with Google Gemini AI integration."
                        />
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#5B8CFF]">
                        03 / FEATURES
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                        Core Capabilities
                    </h2>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {project.features?.map(
                            (feature, index) => (
                                <div
                                    key={feature}
                                    className="group rounded-2xl border border-white/10 bg-[#101218] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#5B8CFF]/30 hover:bg-[#141720]"
                                >
                                    <span className="font-mono text-xs text-[#5B8CFF]">
                                        {String(index + 1).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>

                                    <p className="mt-5 text-sm leading-7 text-[#D9DDE5] transition-colors group-hover:text-white">
                                        {feature}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* TECHNOLOGY */}
            <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#5B8CFF]">
                        04 / TECHNOLOGY
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                        Technology Stack
                    </h2>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        <TechGroup
                            title="Frontend"
                            items={[
                                "Next.js 16",
                                "React",
                                "TypeScript",
                                "Tailwind CSS",
                            ]}
                        />

                        <TechGroup
                            title="Backend"
                            items={[
                                ".NET 8",
                                "ASP.NET Core",
                                "C#",
                                "REST API",
                                "EF Core",
                            ]}
                        />

                        <TechGroup
                            title="Database"
                            items={[
                                "PostgreSQL",
                            ]}
                        />

                        <TechGroup
                            title="AI & Auth"
                            items={[
                                "Gemini AI",
                                "JWT",
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* DEPLOYMENT */}
            <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#5B8CFF]">
                        05 / DEPLOYMENT
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                        Cloud Deployment
                    </h2>

                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        {project.deployment?.map(
                            (item, index) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-white/10 bg-[#101218] p-6"
                                >
                                    <span className="font-mono text-xs text-[#5B8CFF]">
                                        {String(index + 1).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>

                                    <p className="mt-4 text-sm leading-7 text-[#D9DDE5]">
                                        {item}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* ROLE */}
            <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#5B8CFF]">
                        06 / ROLE
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                        {project.role}
                    </h2>

                    <p className="mt-6 max-w-3xl leading-8 text-[#8B93A3]">
                        Responsible for designing and developing the
                        full-stack application across frontend,
                        backend APIs, database integration and AI
                        functionality.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-white/5 px-6 py-24 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#101218] p-8 sm:p-12">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#5B8CFF]">
                        EXPLORE THE PROJECT
                    </p>

                    <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
                        See the implementation in action.
                    </h2>

                    <div className="mt-8 flex flex-wrap gap-4">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-white/10 px-6 py-3 text-sm transition-colors hover:border-[#5B8CFF]/40 hover:text-white"
                            >
                                GITHUB ↗
                            </a>
                        )}

                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-[#5B8CFF] hover:text-white"
                            >
                                LIVE DEMO ↗
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/5 px-6 py-10 sm:px-10">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-mono text-sm">
                        SR<span className="text-[#5B8CFF]">.</span>DEV
                    </span>

                    <Link
                        href="/"
                        className="font-mono text-sm text-[#8B93A3] transition-colors hover:text-white"
                    >
                        ← HOME
                    </Link>
                </div>
            </footer>
        </main>
    );
}

/* ---------------- COMPONENTS ---------------- */

function ArchitectureCard({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#101218] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#5B8CFF]/30">
            <span className="font-mono text-xs text-[#5B8CFF]">
                {number}
            </span>

            <h3 className="mt-6 text-xl font-semibold">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#8B93A3]">
                {description}
            </p>
        </div>
    );
}

function TechGroup({
    title,
    items,
}: {
    title: string;
    items: string[];
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#101218] p-6">
            <h3 className="font-mono text-xs tracking-[0.15em] text-[#5B8CFF]">
                {title.toUpperCase()}
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                    <span
                        key={item}
                        className="rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 font-mono text-[10px] text-[#8B93A3] transition-colors hover:border-[#5B8CFF]/30 hover:text-white"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}