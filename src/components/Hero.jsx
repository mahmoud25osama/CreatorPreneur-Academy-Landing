import { motion } from 'framer-motion'
import { FaPlayCircle, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { getSectionTheme } from '../config/themeSchema'
import { useTheme } from '../hooks/useTheme'
import { useData } from '../hooks/useData'

const Hero = () => {
    const { isDark } = useTheme()

    const theme = getSectionTheme(isDark, 'hero')
    const { hero } = useData()

    return (
        <section
            id="hero"
            className={`relative min-h-screen pt-20 flex items-center justify-center overflow-hidden transition-colors duration-500 ${theme.background}`}
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0">
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientVia} ${theme.gradientTo} transition-colors duration-500`}
                />
                <div className="absolute top-0 left-0 w-full h-full">
                    {theme.orbs.map((orb, index) => (
                        <motion.div
                            key={index}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 8 + index * 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: index * 2,
                            }}
                            className={`absolute ${orb.position} ${orb.size} ${orb.color} rounded-full blur-3xl transition-colors duration-500`}
                        />
                    ))}
                </div>

                {/* Grid pattern overlay */}
                <div
                    className={`absolute inset-0 ${theme.grid} transition-opacity duration-500`}
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${
                            isDark ? 'ffffff' : '000000'
                        }' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 z-10">
                <motion.div
                    className="text-center max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <motion.div
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${theme.badge.background} border ${theme.badge.border} backdrop-blur-sm mb-8 transition-colors duration-500`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <HiSparkles
                            className={`${theme.badge.icon} animate-pulse transition-colors duration-500`}
                        />
                        <span
                            className={`text-sm font-semibold ${theme.badge.text} transition-colors duration-500`}
                        >
                            {hero.badge}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span
                            className={`${theme.title} block mb-2 transition-colors duration-500`}
                        >
                            {hero.title}
                        </span>
                        <span
                            className={`bg-gradient-to-r ${theme.highlight} bg-clip-text text-transparent`}
                        >
                            {hero.highlight}
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className={`text-xl md:text-2xl ${theme.subtitle} mb-6 transition-colors duration-500`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {hero.subtitle}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className={`text-lg md:text-xl ${theme.description} mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-500`}
                    >
                        {hero.description}
                    </motion.p>

                    {/* Features */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {hero.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={`flex items-center gap-2 ${theme.features.text} transition-colors duration-500`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <FaCheckCircle
                                    className={`${theme.features.icon} transition-colors duration-500`}
                                />
                                <span className="text-sm md:text-base">
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.a
                            href={hero.ctaButton.link}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white overflow-hidden rounded-full transition-all duration-300"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${theme.primaryButton.gradient} transition-all duration-300 group-hover:${theme.primaryButton.gradientHover}`}
                            />
                            <span className="relative">
                                {hero.ctaButton.text}
                            </span>
                            <FaArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href={hero.secondaryButton.link}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold ${theme.secondaryButton.background} border ${theme.secondaryButton.border} backdrop-blur-sm rounded-full ${theme.secondaryButton.hover} ${theme.secondaryButton.text} transition-all duration-300`}
                        >
                            <FaPlayCircle className="w-6 h-6" />
                            {hero.secondaryButton.text}
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`${theme.scrollIndicator} transition-colors cursor-pointer duration-500`}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
