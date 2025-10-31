import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/theme/ThemeProvider.jsx'
import { DataProvider } from './contexts/data/DataProvider.jsx'
import { DirectionProvider } from './contexts/direction/DirectionProvider.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <DirectionProvider>
                <DataProvider>
                    <App />
                </DataProvider>
            </DirectionProvider>
        </ThemeProvider>
    </StrictMode>
)
