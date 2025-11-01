// src/config/themeSchema.js

export const themeSchema = {
    dark: {
        // Global styles
        global: {
            background: 'bg-gray-950',
            text: 'text-white',
            textSecondary: 'text-gray-300',
            textMuted: 'text-gray-400',
        },

        // navbar Section
        navbar: {
            background: 'bg-gray-900/95',
            border: 'border-primary-800',
            text: 'text-white',
            textHover: 'hover:text-primary-400',
            logo: 'text-white',
            mobileMenu: {
                background: 'bg-gray-900',
                border: 'border-gray-800',
                item: 'text-gray-300 hover:text-white hover:bg-gray-800',
            },
            button: {
                background: 'bg-primary-600',
                hover: 'hover:bg-primary-700',
                text: 'text-white',
            },
        },

        // Hero Section
        hero: {
            background: 'bg-gray-950',
            gradientFrom: 'from-primary-900/20',
            gradientVia: 'via-gray-900',
            gradientTo: 'to-gray-950',
            title: 'text-white',
            highlight: 'from-primary-400 via-secondary-400 to-orange-400',
            subtitle: 'text-primary-300',
            description: 'text-gray-300',
            badge: {
                background: 'from-primary-500/10 to-orange-500/10',
                border: 'border-primary-500/20',
                text: 'text-gray-200',
                icon: 'text-primary-400',
            },
            features: {
                text: 'text-gray-300',
                icon: 'text-green-400',
            },
            primaryButton: {
                gradient: 'from-primary-600 via-secondary-600 to-orange-600',
                gradientHover:
                    'from-primary-500 via-secondary-500 to-orange-500',
                text: 'text-white',
            },
            secondaryButton: {
                background: 'bg-white/10',
                border: 'border-white/20',
                hover: 'hover:bg-white/20',
                text: 'text-white',
            },
            orbs: [
                {
                    color: 'bg-primary-600/20',
                    position: 'top-20 left-20',
                    size: 'w-72 h-72',
                },
                {
                    color: 'bg-orange-600/10',
                    position: 'bottom-20 right-20',
                    size: 'w-96 h-96',
                },
                {
                    color: 'bg-gradient-to-r from-primary-600/10 to-orange-600/10',
                    position:
                        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                    size: 'w-[500px] h-[500px]',
                },
            ],
            grid: 'opacity-[0.02]',
            scrollIndicator: 'text-white/50 hover:text-white/80',
        },

        // Features Section
        features: {
            background: 'bg-gray-900',
            sectionTitle: 'text-white',
            sectionSubtitle: 'text-gray-400',
            card: {
                background: 'bg-gray-800/50',
                border: 'border-gray-700',
                hover: 'hover:bg-gray-800 hover:border-primary-500/50',
                icon: {
                    background: 'bg-primary-500/10',
                    color: 'text-primary-400',
                },
                title: 'text-white',
                description: 'text-gray-300',
            },
        },

        // Videos Section
        videos: {
            background: 'bg-gray-950',
            sectionSubtitle: 'text-gray-400',
            card: {
                background: 'bg-gray-900',
                border: 'border-gray-800',
                hover: 'hover:border-primary-500/50',
                overlay:
                    'bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent',

                title: 'text-white',
                description: 'text-gray-300',
                duration: 'text-gray-400',
                badge: 'bg-primary-900/60 text-primary-100 font-medium shadow-sm',
            },
        },

        // Statistics Section
        statistics: {
            background: 'bg-gray-950',
            gradientFrom: 'from-primary-900/20',
            gradientVia: 'via-gray-900',
            gradientTo: 'to-gray-950',
            card: {
                background: 'bg-gray-800/50',
                border: 'border-gray-700',
                glow: 'shadow-primary-500/20',
                number: 'text-white',
                numberGradient: 'from-primary-400 to-secondary-400',
                label: 'text-gray-300',
                icon: 'text-primary-400',
            },
            orbs: [
                {
                    color: 'bg-primary-600/20',
                    position: 'top-20 left-20',
                    size: 'w-72 h-72',
                },
                {
                    color: 'bg-secondary-600/10',
                    position: 'bottom-20 right-20',
                    size: 'w-96 h-96',
                },
                {
                    color: 'bg-gradient-to-r from-primary-600/10 to-secondary-600/10',
                    position:
                        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                    size: 'w-[500px] h-[500px]',
                },
            ],
            grid: 'opacity-[0.02]',
        },

        // Programs Section
        programs: {
            background: 'bg-gray-950',
            sectionTitle: 'text-gradient',
            sectionSubtitle: 'text-gray-400',
            card: {
                background: 'bg-gray-900',
                border: 'border-gray-800',
                hover: 'hover:border-primary-500/50 hover:shadow-primary-500/20',
                badge: {
                    background: 'bg-primary-500/10',
                    text: 'text-primary-400',
                },
                image: {
                    overlay:
                        'bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent',
                },
                title: 'text-white',
                description: 'text-gray-300',
                price: 'text-primary-400',
                levelBadge: {
                    beginner: 'bg-green-600 text-white',
                    intermediate: 'bg-yellow-500 text-gray-900',
                    advanced: 'bg-red-600 text-white',
                },
                button: 'btn-outline',
                features: {
                    icon: 'text-green-400',
                    text: 'text-gray-300',
                },
            },
        },

        // Testimonials Section
        testimonials: {
            background: 'bg-gray-900',
            sectionTitle: 'text-white',
            sectionSubtitle: 'text-gray-400',
            card: {
                background: 'bg-gray-800/50',
                border: 'border-gray-700',
                hover: 'hover:border-primary-500/50',
                quote: 'text-gray-300',
                author: {
                    name: 'text-white',
                    role: 'text-gray-400',
                    avatar: 'bg-primary-500/20',
                },
                stars: 'text-yellow-400',
            },
        },

        // FAQ Section
        faq: {
            background: 'bg-gray-950',
            sectionTitle: 'text-gradient',
            sectionSubtitle: 'text-gray-400',
        },

        // Pricing Section
        pricing: {
            background: 'bg-gray-900',
            sectionTitle: 'text-white',
            sectionSubtitle: 'text-gray-400',
            card: {
                background: 'bg-gray-800/50',
                border: 'border-gray-700',
                hover: 'hover:border-primary-500/50',
                featured: {
                    background:
                        'bg-gradient-to-br from-primary-900/20 to-gray-800/50',
                    border: 'border-primary-500/50',
                    badge: {
                        background: 'bg-primary-600',
                        text: 'text-white',
                    },
                },
                title: 'text-white',
                price: 'text-white',
                priceUnit: 'text-gray-400',
                description: 'text-gray-300',
                button: {
                    primary: {
                        background: 'bg-primary-600',
                        hover: 'hover:bg-primary-700',
                        text: 'text-white',
                    },
                    secondary: {
                        background: 'bg-gray-700',
                        hover: 'hover:bg-gray-600',
                        text: 'text-white',
                    },
                },
                features: {
                    icon: 'text-green-400',
                    text: 'text-gray-300',
                },
            },
        },

        // Partners Section
        partners: {
            background: 'bg-gray-950',
            sectionTitle: 'text-white',
            sectionSubtitle: 'text-gray-400',
            logo: {
                background: 'bg-gray-900',
                border: 'border-gray-800',
                hover: 'hover:border-primary-500/50',
                filter: 'grayscale hover:grayscale-0',
                opacity: 'opacity-50 hover:opacity-100',
            },
        },

        // Footer Section
        footer: {
            background: 'bg-gray-900',
            border: 'border-gray-800',
            title: 'text-white',
            text: 'text-gray-400',
            link: 'text-gray-400 hover:text-primary-400',
            social: {
                background: 'bg-gray-800',
                hover: 'hover:bg-primary-600',
                icon: 'text-gray-400 hover:text-white',
            },
            copyright: 'text-gray-500',
        },

        // Scroll to Top Button
        scrollToTop: {
            background: 'bg-primary-600',
            hover: 'hover:bg-primary-700',
            icon: 'text-white',
            shadow: 'shadow-primary-500/50',
        },
    },

    light: {
        // Global styles
        global: {
            background: 'bg-white',
            text: 'text-gray-900',
            textSecondary: 'text-gray-700',
            textMuted: 'text-gray-600',
        },

        // navbar Section
        navbar: {
            background: 'bg-white/95',
            border: 'border-gray-200',
            text: 'text-gray-900',
            textHover: 'hover:text-primary-600',
            logo: 'text-gray-900',
            mobileMenu: {
                background: 'bg-white',
                border: 'border-gray-200',
                item: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
            },
            button: {
                background: 'bg-primary-600',
                hover: 'hover:bg-primary-700',
                text: 'text-white',
            },
        },

        // Hero Section
        hero: {
            background:
                'bg-gradient-to-br from-orange-50 via-white to-primary-50',
            gradientFrom: 'from-primary-100/40',
            gradientVia: 'via-white/80',
            gradientTo: 'to-orange-50/60',
            title: 'text-gradient',
            highlight: 'from-primary-600 via-secondary-600 to-orange-600',
            subtitle: 'text-primary-700',
            description: 'text-gray-700',
            badge: {
                background: 'from-primary-100 to-secondary-100',
                border: 'border-primary-300',
                text: 'text-gray-800',
                icon: 'text-primary-600',
            },
            features: {
                text: 'text-gray-700',
                icon: 'text-green-600',
            },
            primaryButton: {
                gradient: 'from-primary-600 via-white-600 to-secondary-600',
                gradientHover:
                    'from-primary-700 group-hover:via-secondary-700 group-hover:to-primary-700',
                text: 'text-white',
            },
            secondaryButton: {
                background: 'bg-gray-900/5',
                border: 'border-gray-300',
                hover: 'hover:bg-gray-900/10',
                text: 'text-gray-900',
            },
            orbs: [
                {
                    color: 'bg-primary-300/30',
                    position: 'top-20 left-20',
                    size: 'w-72 h-72',
                },
                {
                    color: 'bg-orange-300/20',
                    position: 'bottom-20 right-20',
                    size: 'w-96 h-96',
                },
                {
                    color: 'bg-gradient-to-r from-primary-300/20 to-orange-300/20',
                    position:
                        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                    size: 'w-[500px] h-[500px]',
                },
            ],
            grid: 'opacity-[0.03]',
            scrollIndicator: 'text-gray-400 hover:text-gray-600',
        },

        // Features Section
        features: {
            background: 'bg-gray-50',
            sectionTitle: 'text-gray-900',
            sectionSubtitle: 'text-gray-600',
            card: {
                background: 'bg-white',
                border: 'border-gray-200',
                hover: 'hover:bg-gray-50 hover:border-primary-300',
                icon: {
                    background: 'bg-primary-100',
                    color: 'text-primary-600',
                },
                title: 'text-gray-900',
                description: 'text-gray-700',
            },
        },

        // Videos Section
        videos: {
            background: 'bg-white',
            sectionSubtitle: 'text-gray-600',
            card: {
                background: 'bg-gray-50',
                border: 'border-gray-200',
                hover: 'hover:border-primary-300',
                overlay:
                    'bg-gradient-to-t from-primary via-white/50 to-transparent',

                title: 'text-gray-900',
                description: 'text-gray-700',
                duration: 'text-gray-600',
                badge: 'bg-blue-100 text-blue-700 font-medium shadow-sm',
            },
        },

        // Statistics Section
        statistics: {
            background:
                'bg-gradient-to-br from-orange-50 via-white to-primary-50',
            gradientFrom: 'from-primary-100/40',
            gradientVia: 'via-white/80',
            gradientTo: 'to-orange-50/60',
            card: {
                background: 'bg-white/80 shadow-lg',
                border: 'border-gray-200',
                glow: 'shadow-primary-200',
                number: 'text-gray-900',
                numberGradient: 'from-primary-600 to-secondary-600',
                label: 'text-gray-700',
                icon: 'text-primary-600',
            },
            orbs: [
                {
                    color: 'bg-primary-300/30',
                    position: 'top-20 left-20',
                    size: 'w-72 h-72',
                },
                {
                    color: 'bg-orange-300/20',
                    position: 'bottom-20 right-20',
                    size: 'w-96 h-96',
                },
                {
                    color: 'bg-gradient-to-r from-primary-300/20 to-orange-300/20',
                    position:
                        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                    size: 'w-[500px] h-[500px]',
                },
            ],
            grid: 'opacity-[0.03]',
        },

        // Programs Section
        programs: {
            background: 'bg-gray-50',
            sectionTitle: 'text-gradient',
            sectionSubtitle: 'text-gray-600',
            card: {
                background: 'bg-white',
                border: 'border-gray-200',
                hover: 'hover:border-primary-300 hover:shadow-primary-200',
                badge: {
                    background: 'bg-primary-100',
                    text: 'text-primary-700',
                },
                image: {
                    overlay:
                        'bg-gradient-to-t from-white via-white/50 to-transparent',
                },
                title: 'text-gray-900',
                description: 'text-gray-700',
                price: 'text-primary-600',
                levelBadge: {
                    beginner: 'bg-green-500',
                    intermediate: 'bg-yellow-500',
                    advanced: 'bg-red-500',
                },
                button: 'btn-outline',
                features: {
                    icon: 'text-green-600',
                    text: 'text-gray-700',
                },
            },
        },

        // Testimonials Section
        testimonials: {
            background: 'bg-white',
            sectionTitle: 'text-gray-900',
            sectionSubtitle: 'text-gray-600',
            card: {
                background: 'bg-gray-50',
                border: 'border-gray-200',
                hover: 'hover:border-primary-300',
                quote: 'text-gray-700',
                author: {
                    name: 'text-gray-900',
                    role: 'text-gray-600',
                    avatar: 'bg-primary-100',
                },
                stars: 'text-yellow-500',
            },
        },

        // FAQ Section
        faq: {
            background: 'bg-gray-50',
            sectionTitle: 'text-gray-900',
            sectionSubtitle: 'text-gray-600',
            item: {
                background: 'bg-white',
                border: 'border-gray-200',
                hover: 'hover:border-primary-300',
                question: 'text-gray-900',
                answer: 'text-gray-700',
                icon: {
                    closed: 'text-primary-600',
                    open: 'text-primary-600',
                },
            },
        },

        // Pricing Section
        pricing: {
            background: 'bg-white',
            sectionTitle: 'text-gray-900',
            sectionSubtitle: 'text-gray-600',
            card: {
                background: 'bg-gray-50',
                border: 'border-gray-200',
                hover: 'hover:border-primary-300',
                featured: {
                    background: 'bg-gradient-to-br from-primary-50 to-white',
                    border: 'border-primary-300',
                    badge: {
                        background: 'bg-primary-600',
                        text: 'text-white',
                    },
                },
                title: 'text-gray-900',
                price: 'text-gray-900',
                priceUnit: 'text-gray-600',
                description: 'text-gray-700',
                button: {
                    primary: {
                        background: 'bg-primary-600',
                        hover: 'hover:bg-primary-700',
                        text: 'text-white',
                    },
                    secondary: {
                        background: 'bg-gray-200',
                        hover: 'hover:bg-gray-300',
                        text: 'text-gray-900',
                    },
                },
                features: {
                    icon: 'text-green-600',
                    text: 'text-gray-700',
                },
            },
        },

        // Partners Section
        partners: {
            background: 'bg-gray-50',
            sectionTitle: 'text-gradient',
            sectionSubtitle: 'text-gray-600',
            logo: {
                background: 'bg-white',
                border: 'border-gray-200',
                hover: 'hover:border-primary-300',
                filter: 'grayscale hover:grayscale-0',
                opacity: 'opacity-60 hover:opacity-100',
            },
        },

        // Footer Section
        footer: {
            background: 'bg-gray-50',
            border: 'border-gray-200',
            title: 'text-gray-900',
            text: 'text-gray-600',
            link: 'text-gray-600 hover:text-primary-600',
            social: {
                background: 'bg-white',
                hover: 'hover:bg-primary-600',
                icon: 'text-gray-600 hover:text-white',
            },
            copyright: 'text-gray-500',
        },

        // Scroll to Top Button
        scrollToTop: {
            background: 'bg-primary-600',
            hover: 'hover:bg-primary-700',
            icon: 'text-white',
            shadow: 'shadow-primary-300',
        },
    },
}

// Helper function to get theme
export const getTheme = (isDark) => {
    return isDark ? themeSchema.dark : themeSchema.light
}

// Helper function to get section theme
export const getSectionTheme = (isDark, section) => {
    const theme = isDark ? themeSchema.dark : themeSchema.light
    return theme[section] || theme.global
}
