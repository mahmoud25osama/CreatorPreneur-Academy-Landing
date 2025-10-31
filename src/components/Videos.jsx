import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '../hooks/useTheme'
import { getSectionTheme } from '../config/themeSchema'
import { useData } from '../hooks/useData'

const Videos = () => {
    const { isDark } = useTheme()
    const theme = getSectionTheme(isDark, 'videos')
    const { videos } = useData()

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    return (
        <section
            id="videos"
            ref={ref}
            className={`section-padding ${theme.background} transition-colors duration-500`}
        >
            <div className="container-custom">
                {/* العنوان والوصف */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">
                        <span className="text-gradient">{videos.title}</span>
                    </h2>
                    <p
                        className={`text-lg ${theme.sectionSubtitle} transition-colors duration-500`}
                    >
                        {videos.subTitle}
                    </p>
                </motion.div>

                {/* الشبكة */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.videoItem.map((video, index) => (
                        <motion.div
                            key={video._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div className="relative aspect-video">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span
                                            className={`${theme.card.badge} px-3 py-1 rounded-full text-sm transition-colors duration-500`}
                                        >
                                            {video.category}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className={`p-4 ${theme.card.background} transition-colors duration-500`}
                                >
                                    <h3
                                        className={`font-semibold text-lg mb-2 ${theme.card.title} transition-colors duration-500`}
                                    >
                                        {video.title}
                                    </h3>
                                    <p
                                        className={`${theme.card.description} text-sm transition-colors duration-500`}
                                    >
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Videos
