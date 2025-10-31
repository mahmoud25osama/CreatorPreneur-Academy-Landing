import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { FaGraduationCap, FaLanguage, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../hooks/useTheme'
import { getSectionTheme } from '../config/themeSchema'
import { useDirection } from '../hooks/useDirection'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { isRTL, toggleRTL } = useDirection()

    const { isDark, toggleTheme } = useTheme()
    const theme = getSectionTheme(isDark, 'hero')

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: isRTL ? 'الرئيسية' : 'Home', href: '#hero' },
        { label: isRTL ? 'المميزات' : 'Features', href: '#features' },
        { label: isRTL ? 'البرامج' : 'Courses', href: '#programs' },
        {
            label: isRTL ? 'آراء العملاء' : 'Success Stories',
            href: '#testimonials',
        },
        { label: isRTL ? 'الأسعار' : 'Pricing', href: '#pricing' },
    ]

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
                    isScrolled
                        ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-purple-200/10 dark:border-purple-500/10 shadow-2xl shadow-purple-200/5 dark:shadow-purple-500/5'
                        : 'bg-transparent border-b border-transparent shadow-none'
                }`}
            >
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            <a href="/" className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 blur-lg opacity-70" />
                                    <FaGraduationCap className="relative text-3xl text-purple-500 dark:text-purple-400" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 dark:from-purple-400 to-pink-600 dark:to-pink-400 bg-clip-text text-transparent">
                                        CreatorPreneur
                                    </h2>
                                    <p className="text-xs text-gray-700 dark:text-gray-400 -mt-1">
                                        Academy
                                    </p>
                                </div>
                            </a>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-300 group"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Buttons & Actions */}
                        <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
                            <motion.button
                                onClick={toggleRTL}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-lg bg-gray-300 hover:bg-gray-400 dark:bg-white/5 dark:hover:bg-white/10 transition-all duration-300 border border-white/10"
                            >
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                    {isRTL ? (
                                        <img
                                            src="/src/assets/img/us.svg"
                                            alt="en"
                                            className="w-6 h-6"
                                        />
                                    ) : (
                                        <img
                                            src="/src/assets/img/sa.svg"
                                            alt="ar"
                                            className="w-6 h-6"
                                        />
                                    )}
                                </span>
                            </motion.button>

                            <motion.button
                                onClick={toggleTheme}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-lg bg-gray-300 hover:bg-gray-400 dark:bg-white/5 dark:hover:bg-white/10 transition-all duration-300 border border-white/10"
                            >
                                {isDark ? (
                                    <FaSun className="w-6 h-6 text-yellow-400" />
                                ) : (
                                    <FaMoon className="w-6 h-6 text-gray-600 dark:text-gray-50" />
                                )}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-all duration-300"
                            >
                                {isRTL ? 'تسجيل دخول' : 'Sign In'}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-6 py-2.5 font-semibold text-white overflow-hidden rounded-full group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 transition-all duration-300 group-hover:from-purple-500 group-hover:to-pink-500" />
                                <span className="relative">
                                    {isRTL ? 'ابدأ الآن' : 'Get Started'}
                                </span>
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 transition-all duration-300 border border-gray-200 dark:border-white/10"
                        >
                            {isMobileMenuOpen ? (
                                <HiOutlineX className="w-6 h-6 text-gray-600 dark:text-white" />
                            ) : (
                                <HiOutlineMenu className="w-6 h-6 text-gray-600 dark:text-white" />
                            )}
                        </motion.button>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                damping: 30,
                                stiffness: 300,
                            }}
                            className="absolute right-0 top-0 h-full w-80 bg-gray-50/95 dark:bg-gray-950/95 backdrop-blur-xl border-l border-purple-800/10 dark:border-purple-500/10 shadow-2xl"
                        >
                            <div className="flex flex-col pt-20 h-full">
                                <div className="overflow-y-auto py-4">
                                    <div className="space-y-2 px-4">
                                        {navItems.map((item, index) => (
                                            <motion.a
                                                key={item.href}
                                                href={item.href}
                                                onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                }
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                }}
                                                className="block px-4 py-3 text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                                            >
                                                {item.label}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 border-t border-white/5 space-y-3">
                                    <button
                                        onClick={toggleRTL}
                                        className="w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white"
                                    >
                                        <div className="flex justify-center items-center gap-2 text-gray-600 dark:text-gray-50">
                                            <FaLanguage className="w-6 h-6 text-blue-400" />
                                            {isRTL
                                                ? 'Switch to English'
                                                : ' التبديل إلى العربية'}
                                        </div>
                                    </button>
                                    <button
                                        onClick={toggleTheme}
                                        className="w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white"
                                    >
                                        <div className="flex justify-center items-center gap-2 text-gray-600 dark:text-gray-50">
                                            {isDark ? (
                                                <FaSun className="w-6 h-6 text-yellow-400" />
                                            ) : (
                                                <FaMoon className="w-6 h-6" />
                                            )}
                                            {isDark
                                                ? 'Light Mode'
                                                : 'Dark Mode'}
                                        </div>
                                    </button>
                                    <button className="w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white font-medium">
                                        {isRTL ? 'تسجيل دخول' : 'Sign In'}
                                    </button>
                                    <button className="relative w-full p-3 font-semibold text-white overflow-hidden rounded-lg group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:from-purple-500 group-hover:to-pink-500" />
                                        <span className="relative">
                                            {isRTL
                                                ? 'ابدأ الآن'
                                                : 'Get Started'}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
