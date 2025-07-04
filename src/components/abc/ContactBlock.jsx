// components/ContactBlock.jsx
const ContactBlock = () => {
  return (
    <section className="text-gray-300 space-y-4">
      <h2 className="text-3xl font-semibold text-blue-400">📬 Contact</h2>
      <p>Got questions or feedback? I’d love to hear from you.</p>
      <a
        href="mailto:satvikgupta_it.aec@yahoo.com"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        📧 Email Me
      </a>
    </section>
  );
};

export default ContactBlock;
