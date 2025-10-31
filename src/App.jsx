// Import all components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Videos from './components/Videos'
import Statistics from './components/Statistics'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import Partners from './components/Partners'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
    return (
        <div
        // className={`${isRTL ? 'rtl font-arabic' : 'ltr'} min-h-screen ${
        //     isDark ? 'bg-gray-950' : 'bg-white'
        // } transition-colors duration-500`}
        >
            {/* Scroll to Top Button */}
            <ScrollToTop />
            {/* Header */}
            <Navbar />
            {/* Main Content */}
            <main>
                <Hero />
                <Features />
                <Videos />
                <Statistics />
                <Programs />
                <Testimonials />
                <FAQ />
                <Pricing />
                <Partners />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default App
