import { useMemo } from 'react'
import { useDirection } from '../../hooks/useDirection'
import { DataContext } from './DataContext'
import { siteData } from '../../data/siteData'

export function DataProvider({ children }) {
    const { isRTL } = useDirection()
    const local = isRTL ? 'ar' : 'en'
    const data = useMemo(() => siteData[local], [local])
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}
