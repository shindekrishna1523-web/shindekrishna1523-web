import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
    const featuredProject = projects.find(
        (project) => project.featured
    );

    const otherProjects = projects.filter(
        (project) => !project.featured
    );

    return (
        <div className="mt-14">
            {featuredProject && (
                <ProjectCard
                    project={featuredProject}
                    large
                />
            )}

            <div className="mt-6 grid gap-6 md:grid-cols-2">
                {otherProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
}