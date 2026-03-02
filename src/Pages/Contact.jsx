import React from "react";

const Contact = () => {
  return (
    <div className="max-w-xl space-y-6">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <p className="text-white/70 leading-relaxed">
        Interested in working together? I’m open to freelance projects worldwide
        and love collaborating on WordPress, Shopify, or full-stack projects.
        Let’s build something that lasts.
      </p>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-white/5 rounded-lg outline-none placeholder-white/50"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-white/5 rounded-lg outline-none placeholder-white/50"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 bg-white/5 rounded-lg outline-none placeholder-white/50"
        />
        <button className="px-6 py-3 bg-primary rounded-lg text-white font-medium hover:bg-primary/90 transition">
          Send Message
        </button>
      </div>

      <p className="text-white/50 text-sm mt-4">
        Or reach me directly at: <b>your.email@example.com</b>
      </p>
    </div>
  );
};

export default Contact;
