import { useContext } from 'react'
import { DataContext } from '../contexts/data/DataContext'

export const useData = () => {
    const context = useContext(DataContext)
    if (!context) {
        throw new Error('useTheme must be used within DataProvider')
    }
    return context
}
