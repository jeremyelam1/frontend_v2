import React from "react";
import { motion } from "framer-motion";
import { Shield, Cloud, Lock, Zap } from "lucide-react";
import { ResumeData } from "../types";

interface AboutProps {
    data: ResumeData;
}

const About: React.FC<AboutProps> = ({ data }) => {
    const strengthIcons = [Shield, Cloud, Lock, Zap];

    return (
        <section id="about" className="py-20 bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Professional Summary
                        </h3>
                        <p className="text-dark-300 leading-relaxed text-lg">
                            {data.summary}
                        </p>
                    </motion.div>

                    {/* Strengths */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Key Strengths
                        </h3>
                        <div className="space-y-4">
                            {data.strengths.map((strength, index) => {
                                const IconComponent =
                                    strengthIcons[index] || Shield;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.2 * index,
                                        }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-4 p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors duration-200"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                                            <IconComponent
                                                size={20}
                                                className="text-white"
                                            />
                                        </div>
                                        <p className="text-dark-300 leading-relaxed">
                                            {strength}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
