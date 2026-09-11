import Link from "next/link";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
    project: Project;
    large?: boolean;
};

export default function ProjectCard({
    project,
    large = false,
}: ProjectCardProps) {
    return (
        <article
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#101218] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${
                large ? "min-h-[420px]" : "min-h-[360px]"
            }`}
        >
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#5b8cff]/10 blur-[100px] transition-all duration-300 group-hover:bg-[#5b8cff]/20" />

            <div className="relative flex h-full flex-col p-7 sm:p-9">

                <div className="flex items-start justify-between">
                    <div>
                        <span className="font-mono text-xs tracking-[0.2em] text-[#5b8cff]">
                            {project.number}
                        </span>

                        <p className="mt-2 font-mono text-[10px] tracking-[0.15em] text-[#626a7a]">
                            {project.category}
                        </p>
                    </div>

                    {project.featured && (
                        <span className="rounded-full border border-[#35d07f]/20 bg-[#35d07f]/5 px-3 py-1 font-mono text-[10px] tracking-wider text-[#35d07f]">
                            FEATURED
                        </span>
                    )}
                </div>

                <div className="mt-12">
                    <h3
                        className={`font-semibold tracking-tight text-white ${
                            large
                                ? "text-3xl sm:text-4xl"
                                : "text-2xl"
                        }`}
                    >
                        {project.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8b93a3]">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto pt-10">

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1.5 font-mono text-[10px] text-[#8b93a3]"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    <div className="mt-7 flex items-center gap-5">
                        <Link
                            href={`/projects/${project.id}`}
                            className="text-sm font-medium text-white transition-colors hover:text-[#5b8cff]"
                        >
                            Case Study →
                        </Link>

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-[#8b93a3] transition-colors hover:text-white"
                            >
                                GitHub ↗
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}