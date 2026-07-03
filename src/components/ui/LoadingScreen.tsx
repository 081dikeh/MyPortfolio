import { useThemeStore } from '../../store/themeStore'
import { themes } from '../../data/themes'

export default function LoadingScreen() {
    const currentTheme = useThemeStore((state) => state.currentTheme)
    const theme = themes[currentTheme]

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center flex-col gap-8"
            style={{ backgroundColor: theme.environment.backgroundColor }}
        >
            {/* Animated logo/text */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4" style={{ color: theme.colors.primary }}>
                    Digital Atelier
                </h1>
                <p className="text-sm opacity-75" style={{ color: theme.colors.text }}>
                    Loading your gallery experience...
                </p>
            </div>

            {/* Loading animation */}
            <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="w-3 h-3 rounded-full"
                        style={{
                            backgroundColor: theme.colors.accent,
                            animation: `pulse 1s ease-in-out infinite`,
                            animationDelay: `${i * 0.2}s`,
                        }}
                    />
                ))}
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 0.3; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
            `}</style>
        </div>
    )
}
