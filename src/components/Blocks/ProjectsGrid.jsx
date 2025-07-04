const ProjectsGrid = ({ projects }) => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-300 mb-8 text-center">
        🛠️ Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#1e293b] rounded-xl p-6 shadow-md hover:shadow-blue-500/30 transition group"
          >
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 mb-2">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-800 text-blue-200 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;