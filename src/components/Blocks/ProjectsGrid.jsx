const ProjectsGrid = ({ projects }) => {
  return (
    <section className="mt-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a1a] border border-purple-600 p-4 rounded-lg shadow-lg hover:shadow-purple-500/50 transition duration-300"
          >
            <h3 className="text-pink-300 text-sm uppercase mb-2">
              {project.title}
            </h3>
            <p className="text-green-200 text-xs">{project.desc}</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-purple-800 text-purple-200 px-2 py-0.5 rounded text-[10px]"
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
