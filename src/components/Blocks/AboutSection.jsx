const AboutSection = () => {
  return (
    <section className="border border-blue-500 bg-[#121212] rounded-lg p-6 shadow-[inset_0_0_10px_#00f3ff33]">
      <h2 className="text-pink-400 text-sm sm:text-base uppercase mb-4">
        🧑‍💻 Developer Log
      </h2>
      <p className="text-green-300 text-xs leading-relaxed">
        Hi, I'm Satvik! <strong>Spiele Zone</strong> started as a React.js
        learning project and evolved into a collection of browser-based games
        with a retro twist. I'm passionate about interactive web apps, pixel
        art, and full-stack dev. Stay tuned — more games are on the way!
      </p>

      <p className="text-green-300 text-xs mt-4">
        <strong>Special thanks to Keshav Aggarwal</strong> for his incredible contributions! 
        He enhanced gameplay mechanics across multiple games, redesigned the navigation system, 
        and improved cross-device compatibility. His work on Hangman input handling, 2048 scrolling fixes, 
        Ghost Code UI redesign, and the complete navbar overhaul has significantly elevated the user experience. 
        This marks his first open source contribution - and what an impact it's been!
      </p>
    </section>
  );
};

export default AboutSection;
