import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../types";

interface SkillsProps {
    skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <section id="skills" className="py-20 bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-dark-700 p-6 rounded-lg border border-dark-600 hover:border-primary-600 transition-colors duration-200"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4 border-b border-dark-600 pb-2">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: skillIndex * 0.05,
                                        }}
                                        viewport={{ once: true }}
                                        className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium border border-primary-600/30 hover:bg-primary-600/30 transition-colors duration-200"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
