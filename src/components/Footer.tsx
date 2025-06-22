import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Heart } from "lucide-react";
import { Contact } from "../types";

interface FooterProps {
    contact: Contact;
}

const Footer: React.FC<FooterProps> = ({ contact }) => {
    return (
        <footer className="bg-dark-900 border-t border-dark-700 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Get In Touch
                        </h3>
                        <div className="space-y-3">
                            <a
                                href={`mailto:${contact.email}`}
                                className="flex items-center space-x-3 text-dark-300 hover:text-white transition-colors duration-200"
                            >
                                <Mail size={18} />
                                <span>{contact.email}</span>
                            </a>
                            <a
                                href={`tel:${contact.phone}`}
                                className="flex items-center space-x-3 text-dark-300 hover:text-white transition-colors duration-200"
                            >
                                <Phone size={18} />
                                <span>{contact.phone}</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Quick Links
                        </h3>
                        <div className="space-y-2">
                            {["about", "experience", "skills", "education"].map(
                                (section) => (
                                    <button
                                        key={section}
                                        onClick={() => {
                                            const element =
                                                document.getElementById(
                                                    section
                                                );
                                            if (element) {
                                                element.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                            }
                                        }}
                                        className="block text-dark-300 hover:text-white transition-colors duration-200 capitalize"
                                    >
                                        {section}
                                    </button>
                                )
                            )}
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Connect
                        </h3>
                        <div className="flex space-x-4">
                            <motion.a
                                href={contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-dark-300 hover:text-white hover:bg-primary-600 transition-all duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github size={20} />
                            </motion.a>
                            <motion.a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-dark-300 hover:text-white hover:bg-primary-600 transition-all duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Linkedin size={20} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="border-t border-dark-700 mt-8 pt-8 text-center"
                >
                    <p className="text-dark-400 flex items-center justify-center space-x-2">
                        <span>© 2024 Jeremy Elam. Made with</span>
                        <Heart size={16} className="text-red-500" />
                        <span>using React & TypeScript</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
