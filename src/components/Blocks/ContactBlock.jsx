const ContactBlock = () => {
  return (
    <div className="bg-[#101010] text-green-300 font-mono p-6 rounded-lg border border-green-500 shadow-[0_0_10px_#00ff00aa]">
      <p className="text-sm mb-4">
        <span className="text-blue-400">[system]</span> Initializing connection to support channels...
      </p>

      <p className="text-sm mb-2">
        <span className="text-yellow-300">[info]</span> Primary email →{" "}
        <a
          href="mailto:it10800222125@gmail.com"
          className="text-cyan-300 underline hover:text-pink-400 transition"
        >
          it10800222125@gmail.com
        </a>
      </p>

      <p className="text-sm mb-2">
        <span className="text-yellow-300">[link]</span> GitHub Profile →{" "}
        <a
          href="https://github.com/Satviky/SpieleZone"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 underline hover:text-pink-400 transition"
        >
          github.com/Satviky/SpieleZone
        </a>
      </p>

      <p className="text-sm mt-4">
        <span className="text-blue-400">[system]</span> Awaiting your message...
      </p>
    </div>
  );
};

export default ContactBlock;