import ProjectCard from "./ProjectCard.jsx";

const ProjectsGrid = ({ projects }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-blue-400">🚀 More Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
