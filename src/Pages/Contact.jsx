import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const contactDetails = [
  {
    label: "Email",
    value: "work.sameeralifazal@gmail.com",
    link: "mailto:work.sameeralifazal@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "Phone",
    value: "+92 317 2020004",
    link: "tel:+923172020004",
    icon: <FaPhone />,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/sameer-ali-5617b5331/",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    link: "https://github.com/sameeer-codes",
    icon: <FaGithub />,
  },
];

const Contact = () => {
  return (
    <div className="max-w-xl space-y-8">
      <h2 className="text-2xl font-bold">Contact Details</h2>

      <p className="text-white/70 leading-relaxed">
        Feel free to reach out through any of the platforms below. I'm open to
        freelance projects and collaborations worldwide.
      </p>

      {/* Email & Phone */}
      <div className="space-y-4">
        {contactDetails.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="p-4 bg-white/5 rounded-lg flex items-center gap-4 text-white hover:text-white hover:bg-white/10 transition"
          >
            <span className="text-xl">{item.icon}</span>
            <div>
              <span className="text-white/50 text-sm block">{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Social Icons */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
        <div className="flex gap-6 text-2xl">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white hover:scale-110 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
