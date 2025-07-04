const ProjectCard = ({ title, description, tags = [], links = {} }) => {
  return (
    <div className="bg-[#1e293b] rounded-2xl shadow-md p-6 hover:shadow-blue-500/30 transition duration-300">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-blue-700 text-xs text-white px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {links.code && (
          <a
            href={links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            🔗 Code
          </a>
        )}
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            🚀 Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
