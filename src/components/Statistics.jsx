import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '../hooks/useTheme'
import { getSectionTheme } from '../config/themeSchema'
import { useData } from '../hooks/useData'

const Statistics = () => {
    const { isDark } = useTheme()
    const theme = getSectionTheme(isDark, 'statistics')
    const { statistics } = useData()

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true)
        }
    }, [inView, hasAnimated])

    const CountUpAnimation = ({ target, duration = 2000 }) => {
        const [count, setCount] = useState(0)

        useEffect(() => {
            if (!hasAnimated) return

            const numericTarget =
                parseInt(target.toString().replace(/\D/g, '')) || 0

            if (numericTarget === 0) {
                setCount(target)
                return
            }

            const increment = numericTarget / (duration / 16)
            let current = 0

            const timer = setInterval(() => {
                current += increment
                if (current >= numericTarget) {
                    setCount(target)
                    clearInterval(timer)
                } else {
                    const nonNumeric = target.toString().replace(/[0-9]/g, '')
                    setCount(Math.floor(current) + nonNumeric)
                }
            }, 16)

            return () => clearInterval(timer)
        }, [target, duration])

        return <span>{count}</span>
    }

    return (
        <section
            ref={ref}
            className={`section-padding ${theme.background} relative overflow-hidden transition-colors duration-500`}
        >
            {/* background */}
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
            {/* content */}
            <div className="container-custom relative z-10">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2
                        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display text-gradient transition-colors duration-500`}
                    >
                        <span className="text-gradient">
                            {statistics.title}
                        </span>
                    </h2>
                    <p
                        className={`text-lg ${theme.sectionSubtitle} transition-colors duration-500`}
                    >
                        {statistics.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {statistics.stItem
                        .sort((a, b) => a.order - b.order)
                        .map((stat, index) => (
                            <motion.div
                                key={stat._id}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="text-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className={`${theme.card.background} backdrop-blur-sm rounded-2xl p-8 ${theme.card.hover} transition-all duration-300`}
                                >
                                    <div className={theme.card.icon}>
                                        {stat.icon}
                                    </div>

                                    <div
                                        className={`text-4xl md:text-5xl font-bold ${theme.card.number} mb-2 transition-colors duration-500`}
                                    >
                                        {hasAnimated ? (
                                            <CountUpAnimation
                                                target={stat.number}
                                            />
                                        ) : (
                                            '0'
                                        )}
                                    </div>

                                    <div
                                        className={`${theme.card.label} font-medium transition-colors duration-500`}
                                    >
                                        {stat.label}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Statistics
