import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useData } from '../hooks/useData'

const FAQ = () => {
    const { faq } = useData()
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const [openIndex, setOpenIndex] = useState(null)

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section
            id="faq"
            ref={ref}
            className="section-padding bg-gray-50 dark:bg-dark-400"
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
                        <span className="text-gradient">{faq.title}</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        {faq.subtitle}
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faq.faqs
                        .sort((a, b) => a.order - b.order)
                        .map((faq, index) => (
                            <motion.div
                                key={faq._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="card overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between "
                                >
                                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white pr-8">
                                        {faq.question}
                                    </h3>
                                    <motion.svg
                                        animate={{
                                            rotate:
                                                openIndex === index ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="w-6 h-6 text-primary-600 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </motion.svg>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: 'auto',
                                                opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
