import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '../hooks/useTheme'
import { getSectionTheme } from '../config/themeSchema'
import { useData } from '../hooks/useData'

const Programs = () => {
    const { isDark } = useTheme()
    const theme = getSectionTheme(isDark, 'programs')
    const { programs } = useData()

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const getLevelBadge = (level) => {
        return {
            color:
                theme.card.levelBadge[level] ||
                theme.card.levelBadge.intermediate,
            label: programs.labels[level] || programs.labels.intermediate,
        }
    }

    return (
        <section
            id="programs"
            ref={ref}
            className={`section-padding ${theme.background} relative transition-colors duration-500`}
        >
            <div className={`absolute inset-0 ${theme.overlay}`} />
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">
                        <span className="text-gradient">{programs.title}</span>
                    </h2>
                    <p
                        className={`text-lg ${theme.sectionSubtitle} transition-colors duration-500`}
                    >
                        {programs.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.program
                        .sort((a, b) => a.order - b.order)
                        .map((program, index) => {
                            const levelInfo = getLevelBadge(program.level)

                            return (
                                <motion.div
                                    key={program._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="group"
                                >
                                    <div
                                        className={`h-full flex flex-col ${theme.card.background} border ${theme.card.border} rounded-2xl overflow-hidden ${theme.card.hover} transition-all duration-300 group p-6`}
                                    >
                                        <div className="relative overflow-hidden rounded-t-lg -m-6 mb-4">
                                            <img
                                                src={program.image}
                                                alt={program.title}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute top-4 right-4 rtl:right-4">
                                                <span
                                                    className={`${levelInfo.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                                                >
                                                    {levelInfo.label}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex-1 flex flex-col">
                                            <h3
                                                className={`text-xl font-semibold mb-2 ${theme.card.title} transition-colors duration-500`}
                                            >
                                                {program.title}
                                            </h3>

                                            <p
                                                className={`${theme.card.description} mb-4 flex-1 transition-colors duration-500`}
                                            >
                                                {program.description}
                                            </p>

                                            <div className="flex items-center justify-between mb-4 text-sm">
                                                <span
                                                    className={`flex items-center ${theme.card.duration} transition-colors duration-500`}
                                                >
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                    {program.duration}
                                                </span>
                                                <span
                                                    className={`text-2xl font-bold ${theme.card.price} transition-colors duration-500`}
                                                >
                                                    ${program.price}
                                                </span>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {program.features.map(
                                                    (feature, idx) => (
                                                        <span
                                                            key={idx}
                                                            className={`${theme.card.features.background} ${theme.card.features.text} px-2 py-1 rounded text-xs transition-colors duration-500`}
                                                        >
                                                            {feature}
                                                        </span>
                                                    )
                                                )}
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`${theme.card.button} w-full`}
                                            >
                                                {programs.btnText}
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default Programs
