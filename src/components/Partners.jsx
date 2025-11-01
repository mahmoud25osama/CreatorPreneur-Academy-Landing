import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '../hooks/useTheme'
import { getSectionTheme } from '../config/themeSchema'
import { useDirection } from '../hooks/useDirection'
import img01 from '/src/assets/img/windows.svg'
import img02 from '/src/assets/img/google.svg'
import img03 from '/src/assets/img/amazon.svg'
import img04 from '/src/assets/img/paypal.svg'
import img05 from '/src/assets/img/apple.svg'
import img06 from '/src/assets/img/behance.svg'
import img07 from '/src/assets/img/github.svg'
import img08 from '/src/assets/img/adobe.svg'
const Partners = () => {
    const { isRTL } = useDirection()
    const { isDark } = useTheme()
    const theme = getSectionTheme(isDark, 'partners')

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const partners = [
        {
            _id: '1',
            name: 'Microsoft',
            logo: img01,
            website: 'https://www.microsoft.com',
            order: 1,
        },
        {
            _id: '2',
            name: 'Google',
            logo: img02,
            website: 'https://www.google.com',
            order: 2,
        },
        {
            _id: '3',
            name: 'Amazon',
            logo: img03,
            website: 'https://www.amazon.com',
            order: 3,
        },
        {
            _id: '4',
            name: 'Paypal',
            logo: img04,
            website: 'https://www.paypal.com',
            order: 4,
        },
        {
            _id: '5',
            name: 'Apple',
            logo: img05,
            website: 'https://www.apple.com',
            order: 5,
        },
        {
            _id: '6',
            name: 'Behance',
            logo: img06,
            website: 'https://www.behance.com',
            order: 6,
        },
        {
            _id: '7',
            name: 'Github',
            logo: img07,
            website: 'https://www.github.com',
            order: 7,
        },
        {
            _id: '8',
            name: 'Adobe',
            logo: img08,
            website: 'https://www.adobe.com',
            order: 8,
        },
        {
            _id: '9',
            name: 'Netflix',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
            website: 'https://www.netflix.com',
            order: 9,
        },
        {
            _id: '10',
            name: 'NVIDIA',
            logo: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg',
            website: 'https://www.nvidia.com',
            order: 10,
        },
    ]

    return (
        <section
            ref={ref}
            className={`section-padding ${theme.background} transition-colors duration-500`}
        >
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">
                        <span className={theme.sectionTitle}>
                            {isRTL ? 'شركاؤنا' : 'Our Partners'}
                        </span>
                    </h2>
                    <p
                        className={`text-lg ${theme.sectionSubtitle} transition-colors duration-500`}
                    >
                        {isRTL
                            ? 'نفتخر بشراكتنا مع أكبر الشركات التقنية في العالم'
                            : 'We are proud to partner with the biggest tech companies in the world'}
                    </p>
                </motion.div>

                <div className="mt-12 overflow-hidden">
                    <motion.div
                        animate={{ x: [-0, -partners.length * 180] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 20,
                                ease: 'linear',
                            },
                        }}
                        className="flex space-x-8"
                    >
                        {[...partners, ...partners].map((partner, index) => (
                            <a
                                key={`${partner._id}-${index}`}
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center h-20 w-36 shrink-0"
                            >
                                <img
                                    key={`${partner._id}-${index}`}
                                    src={partner.logo}
                                    alt={partner.name}
                                    className={`max-h-16 w-auto object-contain ${theme.logo.filter} ${theme.logo.opacity}`}
                                />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Partners
