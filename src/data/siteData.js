import {
    FaRocket,
    FaChartLine,
    FaUsers,
    FaLightbulb,
    FaShieldAlt,
    FaGraduationCap,
} from 'react-icons/fa'

export const siteData = {
    en: {
        hero: {
            badge: '🎯 New Cohort Starting Soon',
            title: 'Turn Your Expertise Into',
            highlight: 'Profitable Online Courses',
            subtitle: 'The Complete System for Creators & Experts',
            description:
                'Learn the exact blueprint to package your knowledge, build your audience, and generate consistent revenue with digital products',
            ctaButton: {
                text: 'Get Instant Access',
                link: '#pricing',
            },
            secondaryButton: {
                text: 'Watch Free Training',
                link: '#videos',
            },
            features: [
                '30-Day Money Back Guarantee',
                'Lifetime Access & Updates',
                'Private Community Access',
            ],
        },
        feature: {
            title: 'Why Choose Our Program',
            subtitle:
                'Everything you need to build and launch your successful online course',
            features: [
                {
                    icon: FaRocket,
                    title: 'Quick Launch',
                    description:
                        'Start your course in weeks, not months with our proven step-by-step system',
                },
                {
                    icon: FaChartLine,
                    title: 'Scalable Growth',
                    description:
                        'Proven strategies to grow your audience and revenue sustainably',
                },
                {
                    icon: FaUsers,
                    title: 'Supportive Community',
                    description:
                        'Join a network of like-minded creators and experts',
                },
                {
                    icon: FaLightbulb,
                    title: 'Proven Content',
                    description:
                        'Templates and frameworks tested over years of success',
                },
                {
                    icon: FaShieldAlt,
                    title: 'Ongoing Support',
                    description:
                        'Get help from experts at every step of your journey',
                },
                {
                    icon: FaGraduationCap,
                    title: 'Learn from the Best',
                    description:
                        'Training from course creators who have made millions',
                },
            ],
        },
        videos: {
            title: 'Success Stories & Projects',
            subTitle:
                'Watch our students achievements and outstanding projects',
            videoItem: [
                {
                    _id: '1',
                    title: "Ahmed's Success Story",
                    description:
                        'From beginner to professional developer in 6 months',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    thumbnail:
                        'https://img.youtube.com/vi/5MgBikgcWnY/hqdefault.jpg',
                    category: 'Success Stories',
                },
                {
                    _id: '2',
                    title: 'Outstanding Graduation Project',
                    description: 'Smart task management app using React',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    thumbnail:
                        'https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg',
                    category: 'Projects',
                },
                {
                    _id: '3',
                    title: 'Learning Journey with Academy',
                    description:
                        "Student's experience from start to employment",
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    thumbnail:
                        'https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg',
                    category: 'Experiences',
                },
            ],
        },
        statistics: {
            title: 'Numbers That Speak Success',
            subtitle:
                'Our achievements in numbers reflect our commitment to excellence',
            stItem: [
                {
                    _id: '1',
                    number: '5000',
                    label: 'Graduates',
                    icon: '🎓',
                    order: 1,
                },
                {
                    _id: '2',
                    number: '150',
                    label: 'Training Courses',
                    icon: '📚',
                    order: 2,
                },
                {
                    _id: '3',
                    number: '95',
                    label: 'Employment Rate %',
                    icon: '💼',
                    order: 3,
                },
                {
                    _id: '4',
                    number: '24/7',
                    label: 'Technical Support',
                    icon: '🤝',
                    order: 4,
                },
            ],
        },
        programs: {
            title: 'Our Training Programs',
            subtitle:
                'Choose the right program for you and start your journey in tech',
            program: [
                {
                    _id: '1',
                    title: 'Full Stack Web Development',
                    description:
                        'Learn web development from scratch to professional using latest technologies',
                    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
                    duration: '6 months',
                    level: 'intermediate',
                    price: 1299,
                    features: [
                        'React',
                        'Node.js',
                        'MongoDB',
                        'Express',
                        'TypeScript',
                    ],
                    order: 1,
                },
                {
                    _id: '2',
                    title: 'Mobile App Development',
                    description:
                        'Master iOS and Android app development using React Native',
                    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
                    duration: '4 months',
                    level: 'intermediate',
                    price: 999,
                    features: [
                        'React Native',
                        'Firebase',
                        'Redux',
                        'Expo',
                        'API Integration',
                    ],
                    order: 2,
                },
                {
                    _id: '3',
                    title: 'Data Science & AI',
                    description: 'Explore the world of data and AI with Python',
                    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
                    duration: '8 months',
                    level: 'advanced',
                    price: 1599,
                    features: [
                        'Python',
                        'TensorFlow',
                        'Pandas',
                        'Machine Learning',
                        'Deep Learning',
                    ],
                    order: 3,
                },
            ],
            labels: {
                beginner: 'Beginner',
                intermediate: 'Intermediate',
                advanced: 'Advanced',
            },
            btnText: 'Enroll Now',
        },
        testimonial: {
            title: 'What Our Students Say',
            subtitle: 'Real experiences from our successful graduates',
            testimonials: [
                {
                    _id: '1',
                    name: 'Ahmed Mohammed',
                    role: 'Full Stack Developer',
                    company: 'Tech Solutions',
                    content:
                        'Amazing experience with the academy. Excellent educational content and professional instructors. Got my dream job right after graduation.',
                    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80',
                    rating: 5,
                },
                {
                    _id: '2',
                    name: 'Fatima Ali',
                    role: 'Mobile App Developer',
                    company: 'Innovation Hub',
                    content:
                        'Professionally designed courses and continuous support from the team helped me a lot. I recommend everyone to join.',
                    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80',
                    rating: 5,
                },
                {
                    _id: '3',
                    name: 'Mohammed Salem',
                    role: 'Data Engineer',
                    company: 'DataCorp',
                    content:
                        'Comprehensive and updated curriculum with latest technologies. Practical application and real projects added valuable experience.',
                    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
                    rating: 5,
                },
            ],
        },
        faq: {
            title: 'Frequently Asked Questions',
            subtitle: 'Answers to the most common questions from our students',
            faqs: [
                {
                    _id: '1',
                    question: 'What is the duration of training courses?',
                    answer: 'Course duration ranges from 3 to 8 months depending on the program and specialization. Each program is designed to meet market needs and job requirements.',
                    category: 'general',
                    order: 1,
                },
                {
                    _id: '2',
                    question: 'Can I study remotely?',
                    answer: 'Yes, all our courses are available for remote study with the same quality as in-person education. We provide an advanced learning platform with live and recorded sessions.',
                    category: 'general',
                    order: 2,
                },
                {
                    _id: '3',
                    question: 'What are the admission requirements?',
                    answer: 'Requirements vary by program, but generally we need basic computer knowledge and English language. We will assess your level in the interview.',
                    category: 'admission',
                    order: 3,
                },
                {
                    _id: '4',
                    question:
                        'Do you provide job opportunities after graduation?',
                    answer: 'Yes, we have partnerships with over 50 tech companies and help our graduates find suitable job opportunities. Our employment rate exceeds 95%.',
                    category: 'career',
                    order: 4,
                },
                {
                    _id: '5',
                    question: 'How can I pay the fees?',
                    answer: 'We provide flexible payment options including full payment or monthly installments. We accept all electronic and bank payment methods.',
                    category: 'payment',
                    order: 5,
                },
                {
                    _id: '6',
                    question: 'Are the certificates accredited?',
                    answer: 'Yes, all our certificates are accredited by recognized international and local entities in the job market. We also provide certificates from major tech companies.',
                    category: 'certification',
                    order: 6,
                },
            ],
        },
        pricing: {
            title: 'Pricing Plans',
            subtitle:
                'Choose the right plan for your needs and start your learning journey',
            pricingPlans: [
                {
                    _id: '1',
                    title: 'Basic',
                    price: 130,
                    currency: '$',
                    period: 'month',
                    features: [
                        'One course at a time',
                        'Email support',
                        'Basic learning materials',
                        'Completion certificate',
                    ],
                    isPopular: false,
                    order: 1,
                },
                {
                    _id: '2',
                    title: 'Professional',
                    price: 250,
                    currency: '$',
                    period: 'month',
                    features: [
                        'Unlimited courses',
                        '24/7 instant support',
                        'Practical projects',
                        'Resume review',
                        'Personal career guidance',
                        'Accredited certificates',
                    ],
                    isPopular: true,
                    order: 2,
                },
                {
                    _id: '3',
                    title: 'Enterprise',
                    price: 0,
                    currency: '',
                    period: 'custom',
                    features: [
                        'Custom plan for companies',
                        'Team training',
                        'Custom content',
                        'Dedicated account manager',
                        'Reports and analytics',
                        'Priority support',
                    ],
                    isPopular: false,
                    order: 3,
                },
            ],
        },
    },
    ar: {
        hero: {
            badge: '🎯 الفوج الجديد يبدأ قريباً',
            title: 'حول خبرتك إلى',
            highlight: 'دورات مربحة عبر الإنترنت',
            subtitle: 'النظام الكامل للمبدعين والخبراء',
            description:
                'تعلم الخطة الدقيقة لتحزيم معرفتك، وبناء جمهورك، وتحقيق إيرادات ثابتة من المنتجات الرقمية',
            ctaButton: {
                text: 'احصل على الوصول الفوري',
                link: '#pricing',
            },
            secondaryButton: {
                text: 'شاهد التدريب المجاني',
                link: '#demo',
            },
            features: [
                'ضمان استرداد الأموال لمدة 30 يومًا',
                'وصول مدى الحياة والتحديثات',
                'الوصول إلى المجتمع الخاص',
            ],
        },
        feature: {
            title: 'لماذا تختار برنامجنا',
            subtitle: 'كل ما تحتاجه لبناء وإطلاق دورتك الناجحة عبر الإنترنت',
            features: [
                {
                    icon: 'FaRocket',
                    title: 'إطلاق سريع',
                    description:
                        'ابدأ دورتك في أسابيع، وليس أشهر بنظامنا المثبت خطوة بخطوة',
                },
                {
                    icon: 'FaChartLine',
                    title: 'نمو قابل للتطوير',
                    description:
                        'استراتيجيات مثبتة لتنمية جمهورك وإيراداتك بشكل مستدام',
                },
                {
                    icon: 'FaUsers',
                    title: 'مجتمع داعم',
                    description:
                        'انضم إلى شبكة من المبدعين ذوي التفكير المماثل والخبراء',
                },
                {
                    icon: 'FaLightbulb',
                    title: 'محتوى مثبت',
                    description:
                        'قوالب وأطر عمل تم اختبارها على مدار سنوات من النجاح',
                },
                {
                    icon: 'FaShieldAlt',
                    title: 'دعم متواصل',
                    description: 'احصل على مساعدة من خبراء في كل خطوة من رحلتك',
                },
                {
                    icon: 'FaGraduationCap',
                    title: 'تعلم من الأفضل',
                    description:
                        'تدريب من منشئي الدورات الذين حققوا ملايين الدولارات',
                },
            ],
        },
        videos: {
            title: 'قصص نجاح ومشاريع',
            subTitle: 'شاهد إنجازات طلابنا ومشاريعهم المتميزة',
            videoItem: [
                {
                    _id: '1',
                    title: 'قصة نجاح أحمد',
                    description: 'من مبتدئ إلى مطور محترف في 6 أشهر',
                    videoUrl: 'https://www.youtube.com/embed/5MgBikgcWnY', // TED - The first 20 hours
                    thumbnail:
                        'https://img.youtube.com/vi/5MgBikgcWnY/hqdefault.jpg',
                    category: 'قصص نجاح',
                },
                {
                    _id: '2',
                    title: 'مشروع تخرج متميز',
                    description: 'تطبيق ذكي لإدارة المهام باستخدام React',
                    videoUrl: 'https://www.youtube.com/embed/w7ejDZ8SWv8', // React Crash Course
                    thumbnail:
                        'https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg',
                    category: 'مشاريع',
                },
                {
                    _id: '3',
                    title: 'رحلة التعلم مع الأكاديمية',
                    description: 'تجربة طالب من البداية حتى التوظيف',
                    videoUrl: 'https://www.youtube.com/embed/Ke90Tje7VS0', // ReactJS official tutorial
                    thumbnail:
                        'https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg',
                    category: 'تجارب',
                },
            ],
        },

        statistics: {
            title: 'أرقام تتحدث عن النجاح',
            subtitle: 'إنجازاتنا في أرقام تعكس التزامنا بالتميز',
            stItem: [
                {
                    _id: '1',
                    number: '5000',
                    label: 'طالب متخرج',
                    icon: '🎓',
                    order: 1,
                },
                {
                    _id: '2',
                    number: '150',
                    label: 'دورة تدريبية',
                    icon: '📚',
                    order: 2,
                },
                {
                    _id: '3',
                    number: '95',
                    label: 'نسبة التوظيف %',
                    icon: '💼',
                    order: 3,
                },
                {
                    _id: '4',
                    number: '24/7',
                    label: 'دعم فني',
                    icon: '🤝',
                    order: 4,
                },
            ],
        },
        programs: {
            title: 'برامجنا التدريبية',
            subtitle: 'اختر البرنامج المناسب لك وابدأ رحلتك في عالم التقنية',
            program: [
                {
                    _id: '1',
                    title: 'تطوير الويب الكامل',
                    description:
                        'تعلم تطوير المواقع من الصفر حتى الاحتراف باستخدام أحدث التقنيات',
                    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
                    duration: '6 أشهر',
                    level: 'intermediate',
                    price: 1299,
                    features: [
                        'React',
                        'Node.js',
                        'MongoDB',
                        'Express',
                        'TypeScript',
                    ],
                    order: 1,
                },
                {
                    _id: '2',
                    title: 'تطوير تطبيقات الموبايل',
                    description:
                        'احترف تطوير تطبيقات iOS و Android باستخدام React Native',
                    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
                    duration: '4 أشهر',
                    level: 'intermediate',
                    price: 999,
                    features: [
                        'React Native',
                        'Firebase',
                        'Redux',
                        'Expo',
                        'API Integration',
                    ],
                    order: 2,
                },
                {
                    _id: '3',
                    title: 'علم البيانات والذكاء الاصطناعي',
                    description:
                        'اكتشف عالم البيانات والذكاء الاصطناعي مع Python',
                    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
                    duration: '8 أشهر',
                    level: 'advanced',
                    price: 1599,
                    features: [
                        'Python',
                        'TensorFlow',
                        'Pandas',
                        'Machine Learning',
                        'Deep Learning',
                    ],
                    order: 3,
                },
            ],

            labels: {
                beginner: 'مبتدئ',
                intermediate: 'متوسط',
                advanced: 'متقدم',
            },
            btnText: 'سجل الآن',
        },
        testimonial: {
            title: 'ماذا يقول طلابنا',
            subtitle: 'قصص نجاح حقيقية من طلاب حققوا أحلامهم',
            testimonials: [
                {
                    _id: '1',
                    name: 'أحمد محمد',
                    role: 'مطور Full Stack',
                    company: 'Tech Solutions',
                    content:
                        'كانت تجربة رائعة مع الأكاديمية. المحتوى التعليمي ممتاز والمدربون محترفون. حصلت على وظيفة أحلامي بعد التخرج مباشرة.',
                    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80',
                    rating: 5,
                },
                {
                    _id: '2',
                    name: 'فاطمة علي',
                    role: 'مطورة تطبيقات موبايل',
                    company: 'Innovation Hub',
                    content:
                        'الدورات مصممة بشكل احترافي والدعم المستمر من الفريق ساعدني كثيراً. أنصح الجميع بالانضمام.',
                    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80',
                    rating: 5,
                },
                {
                    _id: '3',
                    name: 'محمد سالم',
                    role: 'مهندس بيانات',
                    company: 'DataCorp',
                    content:
                        'المنهج شامل ومحدث بأحدث التقنيات. التطبيق العملي والمشاريع الحقيقية أضافت لي خبرة قيمة.',
                    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
                    rating: 5,
                },
            ],
        },

        faq: {
            title: 'الأسئلة الشائعة',
            subtitle: 'إجابات على أكثر الأسئلة شيوعاً من طلابنا',
            faqs: [
                {
                    _id: '1',
                    question: 'ما هي مدة الدورات التدريبية؟',
                    answer: 'تتراوح مدة الدورات من 3 إلى 8 أشهر حسب البرنامج والتخصص. كل برنامج مصمم ليناسب احتياجات السوق ومتطلبات الوظائف.',
                    category: 'general',
                    order: 1,
                },
                {
                    _id: '2',
                    question: 'هل يمكنني الدراسة عن بعد؟',
                    answer: 'نعم، جميع دوراتنا متاحة للدراسة عن بعد بنفس جودة التعليم الحضوري. نوفر منصة تعليمية متطورة مع جلسات مباشرة ومسجلة.',
                    category: 'general',
                    order: 2,
                },
                {
                    _id: '3',
                    question: 'ما هي متطلبات القبول؟',
                    answer: 'المتطلبات تختلف حسب البرنامج، لكن بشكل عام نحتاج إلى معرفة أساسية بالكمبيوتر واللغة الإنجليزية. سنقوم بتقييم مستواك في المقابلة.',
                    category: 'admission',
                    order: 3,
                },
                {
                    _id: '4',
                    question: 'هل توفرون فرص عمل بعد التخرج؟',
                    answer: 'نعم، لدينا شراكات مع أكثر من 50 شركة تقنية ونساعد خريجينا في الحصول على فرص عمل مناسبة. نسبة التوظيف لدينا تتجاوز 95%.',
                    category: 'career',
                    order: 4,
                },
                {
                    _id: '5',
                    question: 'كيف يمكنني دفع الرسوم؟',
                    answer: 'نوفر خيارات دفع مرنة تشمل الدفع الكامل أو التقسيط الشهري. كما نقبل جميع وسائل الدفع الإلكترونية والبنكية.',
                    category: 'payment',
                    order: 5,
                },
                {
                    _id: '6',
                    question: 'هل الشهادات معتمدة؟',
                    answer: 'نعم، جميع شهاداتنا معتمدة من جهات دولية ومحلية معترف بها في سوق العمل. كما نوفر شهادات من شركات التقنية الكبرى.',
                    category: 'certification',
                    order: 6,
                },
            ],
        },
        pricing: {
            title: 'خطط الأسعار',
            subtitle: 'اختر الخطة المناسبة لاحتياجاتك وابدأ رحلتك التعليمية',
            pricingPlans: [
                {
                    _id: '1',
                    title: 'الأساسية',
                    price: 130,
                    currency: '$',
                    period: 'شهرياً',
                    features: [
                        'دورة واحدة في المرة',
                        'دعم عبر البريد الإلكتروني',
                        'المواد التعليمية الأساسية',
                        'شهادة إتمام',
                    ],
                    isPopular: false,
                    order: 1,
                },
                {
                    _id: '2',
                    title: 'الاحترافية',
                    price: 250,
                    currency: '$',
                    period: 'شهرياً',
                    features: [
                        'دورات غير محدودة',
                        'دعم فوري 24/7',
                        'مشاريع عملية',
                        'مراجعة السيرة الذاتية',
                        'إرشاد مهني شخصي',
                        'شهادات معتمدة',
                    ],
                    isPopular: true,
                    order: 2,
                },
                {
                    _id: '3',
                    title: 'المؤسسات',
                    price: 0,
                    currency: '',
                    period: 'مخصص',
                    features: [
                        'خطة مخصصة للشركات',
                        'تدريب الفرق',
                        'محتوى مخصص',
                        'مدير حساب مخصص',
                        'تقارير وتحليلات',
                        'دعم الأولوية',
                    ],
                    isPopular: false,
                    order: 3,
                },
            ],
        },
    },
}
