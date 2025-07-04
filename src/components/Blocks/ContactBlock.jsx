const ContactBlock = () => {
  return (
    <div className="bg-[#101010] text-green-300 font-mono p-6 rounded-lg border border-green-500 shadow-[0_0_10px_#00ff00aa]">
      <p className="text-sm mb-4">
        <span className="text-blue-400">[system]</span> Initializing connection...
      </p>
      <p className="text-sm mb-2">
        <span className="text-yellow-300">user@spielezone:</span> Send me a message →{" "}
        <a
          href="mailto:satvik@example.com"
          className="text-cyan-300 underline hover:text-pink-400 transition"
        >
          satvik@example.com
        </a>
      </p>
      <p className="text-sm text-pink-400 animate-pulse mt-4">▌</p>
    </div>
  );
};

export default ContactBlock;
