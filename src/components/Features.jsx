import { motion } from 'framer-motion'

import { useTheme } from '../hooks/useTheme'
import { getSectionTheme } from '../config/themeSchema'
import { useData } from '../hooks/useData'

const Features = () => {
    const { isDark } = useTheme()
    const theme = getSectionTheme(isDark, 'features')
    const { feature } = useData()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <section
            id="features"
            className={`py-20 ${theme.background} transition-colors duration-500`}
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-4  transition-colors duration-500`}
                    >
                        <span className="text-gradient">{feature.title}</span>
                    </h2>
                    <p
                        className={`text-lg md:text-xl ${theme.sectionSubtitle} max-w-3xl mx-auto transition-colors duration-500`}
                    >
                        {feature.subtitle}
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {feature.features.map((feature, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className={`p-8 rounded-2xl border ${theme.card.background} ${theme.card.border} ${theme.card.hover} transition-all duration-300 shadow-lg backdrop-blur-sm`}
                            >
                                {/* Icon */}
                                <div
                                    className={`w-16 h-16 rounded-xl ${theme.card.icon.background} flex items-center justify-center mb-6 transition-colors duration-500`}
                                >
                                    <feature.icon
                                        className={`w-8 h-8 ${theme.card.icon.color} transition-colors duration-500`}
                                    />
                                </div>

                                {/* Content */}
                                <h3
                                    className={`text-2xl font-bold mb-3 ${theme.card.title} transition-colors duration-500`}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className={`${theme.card.description} leading-relaxed transition-colors duration-500`}
                                >
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Features
