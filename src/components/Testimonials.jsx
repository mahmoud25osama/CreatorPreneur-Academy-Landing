import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '../hooks/useTheme'
import { getSectionTheme } from '../config/themeSchema'
import { useData } from '../hooks/useData'

const Testimonials = () => {
    const { isDark } = useTheme()
    const theme = getSectionTheme(isDark, 'testimonials')
    const { testimonial } = useData()
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const [activeIndex, setActiveIndex] = useState(0)
    const testimonials = testimonial.testimonials
    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }
    const prevTestimonial = () => {
        setActiveIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        )
    }

    return (
        <section
            id="testimonials"
            ref={ref}
            className={`section-padding ${theme.background} transition-colors duration-500`}
        >
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">
                        <span className="text-gradient">
                            {testimonial.title}
                        </span>
                    </h2>
                    <p
                        className={`text-lg ${theme.sectionSubtitle} transition-colors duration-500`}
                    >
                        {testimonial.subtitle}
                    </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="max-w-4xl mx-auto relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className={`card ${theme.card.background} p-8 transition-colors duration-500`}
                        >
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Image */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={testimonials[activeIndex].image}
                                        alt={testimonials[activeIndex].name}
                                        className={`w-32 h-32 rounded-full object-cover border-4 ${theme.card.avatar} transition-colors duration-500`}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    {/* Rating Stars */}
                                    <div className="flex justify-center md:justify-start mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-6 h-6 ${
                                                    i <
                                                    testimonials[activeIndex]
                                                        .rating
                                                        ? theme.card.stars
                                                        : 'text-gray-300'
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p
                                        className={`text-lg ${theme.card.quote} mb-6 italic transition-colors duration-500`}
                                    >
                                        "{testimonials[activeIndex].content}"
                                    </p>

                                    {/* Author */}
                                    <div>
                                        <h4
                                            className={`font-semibold text-lg ${theme.card.name} transition-colors duration-500`}
                                        >
                                            {testimonials[activeIndex].name}
                                        </h4>
                                        <p
                                            className={`${theme.card.role} transition-colors duration-500`}
                                        >
                                            {testimonials[activeIndex].role} @{' '}
                                            {testimonials[activeIndex].company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-10 bg-white dark:bg-primary-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
                        aria-label="Previous testimonial"
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
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-10 bg-white dark:bg-primary-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
                        aria-label="Next testimonial"
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
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonial.testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    index === activeIndex
                                        ? 'w-8 bg-primary-600'
                                        : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* All Testimonials Grid (Alternative Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {testimonial.testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card text-center"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                            />
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-4 h-4 ${
                                            i < testimonial.rating
                                                ? 'text-yellow-400'
                                                : 'text-gray-300'
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm italic">
                                "{testimonial.content}"
                            </p>
                            <h5 className="font-semibold text-gray-900 dark:text-white">
                                {testimonial.name}
                            </h5>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {testimonial.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
