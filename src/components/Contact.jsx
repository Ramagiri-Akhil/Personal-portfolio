import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copy, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import SuccessPopup from "../components/SuccessPopup";

const Contact = () => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "Hi Akhil, I came across your portfolio and wanted to connect 🚀",
  });

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // 🔥 Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_3tqtim5", "template_55zt2pa", form, "jCAtVk3ZkEaX4reqW")
      .then(() => {
        setLoading(false);

        // 🔥 Show popup
        setShowPopup(true);

        // 🔥 Toast
        toast.success("Message sent 🚀");

        // Reset form
        setForm({
          user_name: "",
          user_email: "",
          message: "",
        });

        setTimeout(() => setShowPopup(false), 2500);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Something went wrong ❌");
      });
  };

  // 🔥 Copy email
  const handleCopy = () => {
    navigator.clipboard.writeText("akhilramagiri3@gmail.com");
    setCopied(true);

    toast.success("Email copied 📋");

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-12 pt-6">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-semibold">
            Let’s build something amazing 🚀
          </h3>

          <p className="text-neutral-400 max-w-md">
            I’m open to internships, freelance, and exciting projects. I usually
            reply within 24 hours.
          </p>

          {/* EMAIL */}
          <div className="flex items-center gap-3">
            <Mail size={18} />
            <span className="text-sm md:text-base">
              akhilramagiri3@gmail.com
            </span>

            <button
              onClick={handleCopy}
              className="p-1 hover:bg-white/10 rounded transition"
            >
              <Copy size={16} />
            </button>

            {copied && <span className="text-green-400 text-sm">Copied!</span>}
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/Ramagiri-Akhil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 
              hover:bg-white/10 transition hover:scale-110"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/ramagiri-akhil-b630362bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 
              hover:bg-white/10 transition hover:scale-110"
            >
              <Linkedin />
            </a>
          </div>

          <div className="flex items-center gap-3 text-neutral-400 text-sm">
  📍 India (Open to Remote)
</div>

          {/* STATUS */}
          <div className="text-green-400 text-sm pt-4">
            🟢 Available for opportunities
          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <input
            type="text"
            name="user_name"
            value={form.user_name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg 
            focus:outline-none focus:border-orange-500 transition"
          />

          <input
            type="email"
            name="user_email"
            value={form.user_email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg 
            focus:outline-none focus:border-orange-500 transition"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg 
            focus:outline-none focus:border-orange-500 transition"
          />

          {!form.message && (
            <p className="text-xs text-neutral-500">
              💡 Tell me about your idea or project...
            </p>
          )}

          {/* BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="w-full py-3 bg-orange-600 hover:bg-orange-500 
            rounded-lg font-semibold flex items-center justify-center gap-2 transition"
          >
            {loading && <Loader2 className="animate-spin" size={18} />}
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>

      {/* SUCCESS POPUP */}
      <SuccessPopup show={showPopup} />
    </>
  );
};

export default Contact;
