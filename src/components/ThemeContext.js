import { createContext, useContext, useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material"
// Other JS
import { lightTheme, darkTheme } from "../theme"

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export const useAppTheme = () =>
    useContext(ThemeContext)

export const useAppThemeUpdate = () =>
    useContext(ThemeUpdateContext)

export const AppThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const theme = createTheme(isDarkMode ? darkTheme : lightTheme)

    const updateTheme = () => {
        setIsDarkMode(prev => !prev)
    }

    // useEffect(() =>
    //     setIsDarkMode(localStorage.getItem(THEME_KEY) === "true")
    //     , [])

    return (
        <ThemeContext.Provider value={isDarkMode}>
            <ThemeUpdateContext.Provider value={updateTheme}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}