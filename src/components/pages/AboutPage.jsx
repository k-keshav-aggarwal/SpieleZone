import { motion } from "framer-motion";
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
      title: "🚀 Personal Project #1",
      desc: "An interactive app built with React & Node.",
      url: "https://project-rescue.onrender.com/",
      tags: ["React", "Node.js"],
    },
    {
      title: "🖥️ Project #1 [Demo]",
      desc: "Live demo showcasing frontend & backend features.",
      url: "https://pr-rescue.vercel.app/",
      tags: ["Demo", "Fullstack"],
    },
  ];

  const games = [
    {
      title: "2048",
      description: "A strategic number-sliding puzzle game where tiles merge to form 2048.",
    },
    {
      title: "Snake Game",
      description: "Classical from the 90s.",
    },
    {
      title: "Hangman",
      description: "Guess the word before the stickman is completed. Classic vocabulary challenge.",
    },
    {
      title: "GhostCode",
      description: "Test your typing skills in this fun tetris themed game.",
    },
    {
      title: "Memory Puzzle",
      description: "Click tiles in numerical order from memory. Great for sharpening focus.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 px-6 py-12 overflow-hidden">
      <main className="max-w-6xl mx-auto space-y-28 text-center">
        {/* Header */}
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
            About <span className="text-orange-400">Spiele Zone</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong>Spiele Zone</strong> – what began as a React.js learning journey is now a growing hub of addictive, fun web games.
          </p>
        </motion.header>

        {/* Games Overview */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-blue-300 mb-10"
          >
            🎮 About the Games
          </motion.h2>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {games.map((game, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.5 }}
                className="w-[280px] bg-[#1e293b] rounded-2xl p-6 border border-transparent hover:border-blue-400 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group cursor-pointer text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400">
                  {game.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {game.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <AboutSection />
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <ProjectsGrid projects={projectTiles} />
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <ContactBlock />
        </motion.div>
      </main>
    </div>
  );
};

export default AboutUs;
