import { createContext, useContext, useState, useEffect } from 'react'
import { DirectionContext } from './DirectionContext'

export const DirectionProvider = ({ children }) => {
    const [isRTL, setIsRTL] = useState(() => {
        const saved = localStorage.getItem('direction')
        if (saved) return saved === 'rtl'

        if (typeof window !== 'undefined' && window.navigator) {
            const lang = window.navigator.language || ''
            return lang.startsWith('ar')
        }
        return false
    })

    useEffect(() => {
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
        document.documentElement.lang = isRTL ? 'ar' : 'en'
        localStorage.setItem('direction', isRTL ? 'rtl' : 'ltr')
    }, [isRTL])

    const toggleRTL = () => setIsRTL((prev) => !prev)

    return (
        <DirectionContext.Provider value={{ isRTL, toggleRTL }}>
            {children}
        </DirectionContext.Provider>
    )
}
