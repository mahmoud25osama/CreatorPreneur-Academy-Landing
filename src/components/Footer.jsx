import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { useDirection } from '../hooks/useDirection'

const Footer = () => {
    const { isRTL } = useDirection()
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        company: {
            title: isRTL ? 'الشركة' : 'Company',
            links: [
                { label: isRTL ? 'عن الأكاديمية' : 'About Academy', href: '#' },
                { label: isRTL ? 'فريقنا' : 'Our Team', href: '#' },
                { label: isRTL ? 'الوظائف' : 'Careers', href: '#' },
                { label: isRTL ? 'الأخبار' : 'News', href: '#' },
            ],
        },
        programs: {
            title: isRTL ? 'البرامج' : 'Programs',
            links: [
                { label: isRTL ? 'تطوير الويب' : 'Web Development', href: '#' },
                {
                    label: isRTL ? 'تطبيقات الموبايل' : 'Mobile Apps',
                    href: '#',
                },
                { label: isRTL ? 'علم البيانات' : 'Data Science', href: '#' },
                { label: isRTL ? 'الذكاء الاصطناعي' : 'AI & ML', href: '#' },
            ],
        },
        support: {
            title: isRTL ? 'الدعم' : 'Support',
            links: [
                { label: isRTL ? 'مركز المساعدة' : 'Help Center', href: '#' },
                { label: isRTL ? 'اتصل بنا' : 'Contact Us', href: '#contact' },
                { label: isRTL ? 'الأسئلة الشائعة' : 'FAQ', href: '#faq' },
                { label: isRTL ? 'المجتمع' : 'Community', href: '#' },
            ],
        },
        legal: {
            title: isRTL ? 'قانوني' : 'Legal',
            links: [
                {
                    label: isRTL ? 'سياسة الخصوصية' : 'Privacy Policy',
                    href: '#',
                },
                {
                    label: isRTL ? 'الشروط والأحكام' : 'Terms & Conditions',
                    href: '#',
                },
                {
                    label: isRTL ? 'سياسة الاسترداد' : 'Refund Policy',
                    href: '#',
                },
                {
                    label: isRTL ? 'ملفات تعريف الارتباط' : 'Cookie Policy',
                    href: '#',
                },
            ],
        },
    }

    const socialLinks = {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
        youtube: 'https://youtube.com',
    }

    return (
        <footer
            id="contact"
            className="bg-primary-900 dark:bg-primary-950 text-white transition-colors duration-200"
        >
            {/* Newsletter Section */}
            <div className="border-b border-gray-700">
                <div className="container-custom py-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            {isRTL
                                ? 'اشترك في النشرة الإخبارية'
                                : 'Subscribe to Our Newsletter'}
                        </h3>
                        <p className="text-gray-400 mb-6">
                            {isRTL
                                ? 'احصل على آخر الأخبار والعروض الخاصة مباشرة في بريدك الإلكتروني'
                                : 'Get the latest news and special offers delivered to your inbox'}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder={
                                    isRTL
                                        ? 'بريدك الإلكتروني'
                                        : 'Your email address'
                                }
                                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 dark:bg-gray-700 border border-gray-600 focus:border-primary-500 focus:outline-none transition-colors"
                                dir={isRTL ? 'rtl' : 'ltr'}
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="btn-primary"
                            >
                                {isRTL ? 'اشترك' : 'Subscribe'}
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container-custom py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Logo & Description */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <div className="mb-6">
                            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 blur-lg opacity-60" />
                                    <FaGraduationCap className="relative text-3xl text-primary-400" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                        CreatorPreneur
                                    </h2>
                                    <p className="text-xs text-gray-400 -mt-1">
                                        Academy
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            {isRTL
                                ? 'منصتك الأولى للتعلم والتطور في عالم التقنية'
                                : 'Your premier platform for learning and growth in technology'}
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4 rtl:space-x-reverse">
                            {socialLinks.facebook && (
                                <a
                                    href={socialLinks.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary-500 transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                            )}
                            {socialLinks.twitter && (
                                <a
                                    href={socialLinks.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary-500 transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                            )}
                            {socialLinks.instagram && (
                                <a
                                    href={socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary-500 transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                                    </svg>
                                </a>
                            )}
                            {socialLinks.linkedin && (
                                <a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary-500 transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Footer Links */}
                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title}>
                            <h4 className="font-semibold mb-4 text-white">
                                {section.title}
                            </h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
                    <p>
                        {`© ${currentYear} 
                        ${
                            isRTL
                                ? ' جميع الحقوق محفوظة.'
                                : '. All rights reserved.'
                        }
                        `}
                    </p>
                    <p className="mt-2">
                        {isRTL
                            ? 'صنع بـ ❤️ بواسطة محمود أسامة'
                            : 'Made with ❤️ by Mahmoud Osama'}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
