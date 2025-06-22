import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import { ResumeData } from "../types";

interface HeroProps {
    data: ResumeData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
    const scrollToAbout = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {data.name}
                    </motion.h1>

                    <motion.h2
                        className="text-2xl md:text-3xl text-primary-400 mb-8 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {data.title}
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-dark-300 max-w-4xl mx-auto mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {data.summary}
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <motion.button
                            onClick={scrollToAbout}
                            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Learn More</span>
                            <ChevronDown size={20} />
                        </motion.button>

                        <motion.a
                            href={`mailto:${data.contact.email}`}
                            className="px-8 py-4 border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-all duration-200 flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Get In Touch</span>
                            <Download size={20} />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-dark-400 rounded-full flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-1 h-3 bg-dark-400 rounded-full mt-2"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
