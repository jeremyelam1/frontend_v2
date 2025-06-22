import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Contact } from "../types";

interface HeaderProps {
    contact: Contact;
}

const Header: React.FC<HeaderProps> = ({ contact }) => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-700"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Name */}
                    <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                                JE
                            </span>
                        </div>
                        <span className="text-white font-semibold text-lg">
                            Jeremy Elam
                        </span>
                    </motion.div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {["about", "experience", "skills", "education"].map(
                            (section) => (
                                <motion.button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className="text-dark-300 hover:text-white transition-colors duration-200 capitalize"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {section}
                                </motion.button>
                            )
                        )}
                    </nav>

                    {/* Contact Icons */}
                    <div className="flex items-center space-x-4">
                        <motion.a
                            href={`mailto:${contact.email}`}
                            className="text-dark-300 hover:text-white transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Mail size={20} />
                        </motion.a>
                        <motion.a
                            href={`tel:${contact.phone}`}
                            className="text-dark-300 hover:text-white transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Phone size={20} />
                        </motion.a>
                        <motion.a
                            href={contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-300 hover:text-white transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-300 hover:text-white transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Linkedin size={20} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
