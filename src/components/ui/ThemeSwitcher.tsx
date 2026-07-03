import { useState } from 'react'
import { useThemeStore } from '../../store/themeStore'
import { themes } from '../../data/themes'
import { ChevronRight } from 'lucide-react'

export default function ThemeSwitcher() {
    const { currentTheme, toggleTheme } = useThemeStore()
    const [isOpen, setIsOpen] = useState(false)
    const theme = themes[currentTheme]

    const themeList = Object.entries(themes)

    return (
        <div className="fixed top-6 right-6 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-lg backdrop-blur-md border transition-all duration-300"
                style={{
                    backgroundColor: `${theme.colors.primary}20`,
                    borderColor: theme.colors.primary,
                    color: theme.colors.text,
                }}
            >
                <div className="flex items-center gap-2">
                    <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.colors.primary }}
                    />
                    <span className="text-sm font-semibold">{theme.displayName}</span>
                </div>
            </button>

            {/* Theme dropdown menu */}
            {isOpen && (
                <div
                    className="absolute top-14 right-0 bg-white dark:bg-slate-900 rounded-lg shadow-xl border overflow-hidden w-48 backdrop-blur-md"
                    style={{
                        borderColor: theme.colors.primary,
                    }}
                >
                    {themeList.map(([key, t]) => (
                        <button
                            key={key}
                            onClick={() => {
                                useThemeStore.setState({ currentTheme: t.name })
                                setIsOpen(false)
                            }}
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-opacity-50 transition-all text-left"
                            style={{
                                backgroundColor: currentTheme === key ? `${t.colors.primary}30` : 'transparent',
                                color: t.colors.text,
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: t.colors.primary }}
                                />
                                <span className="text-sm">{t.displayName}</span>
                            </div>
                            {currentTheme === key && (
                                <ChevronRight size={16} />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
