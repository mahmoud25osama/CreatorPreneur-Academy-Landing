import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useData } from '../hooks/useData'
import { useDirection } from '../hooks/useDirection'

const Pricing = () => {
    const { isRTL } = useDirection()
    const { pricing } = useData()
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    return (
        <section
            id="pricing"
            ref={ref}
            className="section-padding bg-gradient-to-b from-white dark:from-black to-primary-50 dark:to-primary-950/20"
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
                        <span className="text-gradient">{pricing.title}</span>
                    </h2>
                    <p className="text-lg  text-gray-600 dark:text-gray-300">
                        {pricing.subtitle}
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricing.pricingPlans
                        .sort((a, b) => a.order - b.order)
                        .map((plan, index) => (
                            <motion.div
                                key={plan._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className={`relative ${
                                    plan.isPopular ? 'md:-mt-4' : ''
                                }`}
                            >
                                {/* Popular Badge */}
                                {plan.isPopular && (
                                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                                        <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            {isRTL
                                                ? 'الأكثر شعبية'
                                                : 'Most Popular'}
                                        </span>
                                    </div>
                                )}

                                <div
                                    className={`h-full flex flex-col rounded-2xl p-8 ${
                                        plan.isPopular
                                            ? 'bg-gradient-to-br from-primary-900/40 to-primary-950/80 border-2 border-primary-500/50 shadow-2xl shadow-primary-500 dark:shadow-primary-500/20'
                                            : 'bg-gradient-to-br from-white dark:from-gray-900 to-gray-100 dark:to-gray-950 border border-gray-300 dark:border-gray-800 hover:border-primary-500/30'
                                    } transition-all duration-300`}
                                >
                                    {/* Plan Name */}
                                    <h3
                                        className={`text-2xl font-bold text-center mb-4 ${
                                            plan.isPopular
                                                ? 'text-gray-200'
                                                : 'text-gray-900'
                                        } dark:text-white`}
                                    >
                                        {plan.title}
                                    </h3>

                                    {/* Price */}
                                    <div className="text-center mb-6">
                                        {plan.price > 0 ? (
                                            <>
                                                <span className="text-5xl font-bold text-primary-600">
                                                    {plan.currency}
                                                    {plan.price}
                                                </span>
                                                <span
                                                    className={`${
                                                        plan.isPopular
                                                            ? 'text-gray-300'
                                                            : 'text-gray-900'
                                                    } dark:text-gray-400 ml-2`}
                                                >
                                                    / {plan.period}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                                {isRTL
                                                    ? 'اتصل بنا'
                                                    : 'Contact Us'}
                                            </span>
                                        )}
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {plan.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span
                                                    className={`${
                                                        plan.isPopular
                                                            ? 'text-gray-300'
                                                            : 'text-gray-600'
                                                    } dark:text-gray-300`}
                                                >
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full ${
                                            plan.isPopular
                                                ? 'btn-primary'
                                                : 'btn-outline'
                                        }`}
                                    >
                                        {plan.price > 0
                                            ? isRTL
                                                ? 'ابدأ الآن'
                                                : 'Get Started'
                                            : isRTL
                                            ? 'اتصل بنا'
                                            : 'Contact Sales'}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {isRTL
                            ? '✓ ضمان استرداد الأموال لمدة 30 يوماً • ✓ إلغاء في أي وقت • ✓ بدون رسوم خفية'
                            : '✓ 30-day money-back guarantee • ✓ Cancel anytime • ✓ No hidden fees'}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                        {isRTL
                            ? 'جميع الأسعار بالدولار الأمريكي. الضرائب قد تطبق حسب موقعك.'
                            : 'All prices in USD. Taxes may apply based on your location.'}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Pricing
