import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Education as EducationType } from "../types";

interface EducationProps {
    education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
    return (
        <section id="education" className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-dark-800 p-6 rounded-lg border border-dark-700 hover:border-primary-600 transition-colors duration-200"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                                    <GraduationCap
                                        size={24}
                                        className="text-white"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-primary-400 font-medium mb-3">
                                        {edu.institution}
                                    </p>
                                    <div className="flex items-center text-dark-400">
                                        <Calendar size={16} className="mr-2" />
                                        <span className="text-sm">
                                            {edu.period}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
