import { create } from 'zustand'
import { ThemeName, themes } from '../data/themes'

interface ThemeState {
    currentTheme: ThemeName
    isThemeSwitching: boolean
    setTheme: (theme: ThemeName) => void
    toggleTheme: () => void
}

const themeNames: ThemeName[] = ['artdeco', 'cyberpunk', 'minimalist']

export const useThemeStore = create<ThemeState>((set) => ({
    currentTheme: 'artdeco',
    isThemeSwitching: false,
    setTheme: (theme: ThemeName) => set({ currentTheme: theme, isThemeSwitching: true }),
    toggleTheme: () => set((state) => {
        const currentIndex = themeNames.indexOf(state.currentTheme)
        const nextIndex = (currentIndex + 1) % themeNames.length
        return {
            currentTheme: themeNames[nextIndex],
            isThemeSwitching: true,
        }
    }),
}))

export const getCurrentTheme = () => {
    const currentTheme = useThemeStore((state) => state.currentTheme)
    return themes[currentTheme]
}
