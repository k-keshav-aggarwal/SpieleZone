import AboutSection from "../Blocks/AboutSection.jsx";
import ContactBlock from "../Blocks/ContactBlock.jsx";
import ProjectsGrid from "../Blocks/ProjectsGrid.jsx";

const AboutUs = () => {
  const projectTiles = [
    {
      title: "📄 My Resume",
      desc: "View my professional background and skills.",
      url: "https://gsatvik.com",
      tags: ["Resume", "Portfolio"],
    },
    {
      title: "🚀 Rescue App Project",
      desc: "An interactive app built with React & Node.",
      url: "https://project-rescue.onrender.com/",
      tags: ["React", "Node.js"],
    },
    {
      title: "🖥️ Rescue App Demo",
      desc: "Live demo showcasing frontend & backend features.",
      url: "https://pr-rescue.vercel.app/",
      tags: ["Demo", "Fullstack"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 px-6 py-12">
      <main className="max-w-6xl mx-auto space-y-20">
        {/* Page Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            About <span className="text-orange-400">Spiele Zone</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Welcome to <strong>Spiele Zone</strong>! What started as a React.js learning journey is now a growing collection of fun web-based games.
          </p>
        </header>

        {/* Games Overview */}
        <section>
          <h2 className="text-3xl font-semibold text-blue-300 mb-8 text-center">🎮 About the Games</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "2048", description: "A strategic number-sliding puzzle game." },
              { 
                title: "Snake Game", 
                description: (
                  <>
                    A classic arcade experience{" "}
                    <span className="text-yellow-400 font-semibold">(Coming Soon)</span>.
                  </>
                )
              },
              { title: "Hangman", description: "Test your vocabulary with this guessing game." },
            ].map((game, i) => (
              <div
                key={i}
                className="bg-[#1e293b] rounded-xl p-6 shadow-md hover:shadow-blue-500/30 transition group"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">
                  {game.title}
                </h3>
                <p className="text-sm text-gray-300">{game.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About, Projects, and Contact Sections */}
        <AboutSection />
        <ProjectsGrid projects={projectTiles} />
        <ContactBlock />
      </main>
    </div>
  );
};

export default AboutUs;