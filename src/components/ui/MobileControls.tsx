import { useThemeStore } from '../../store/themeStore'
import { themes } from '../../data/themes'
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

export default function MobileControls() {
    const currentTheme = useThemeStore((state) => state.currentTheme)
    const theme = themes[currentTheme]

    // Note: Camera control is now handled by CameraController inside the Canvas
    // This component is purely UI for mobile device visibility

    return (
        <div className="fixed bottom-20 left-6 z-30 md:hidden">
            <div className="flex flex-col items-center gap-2">
                {/* Up */}
                <button
                    className="p-3 rounded-full backdrop-blur-md border transition-all active:scale-95"
                    style={{
                        backgroundColor: `${theme.colors.primary}20`,
                        borderColor: theme.colors.primary,
                        color: theme.colors.text,
                    }}
                >
                    <ChevronUp size={20} />
                </button>

                {/* Left, Center, Right */}
                <div className="flex gap-2">
                    <button
                        className="p-3 rounded-full backdrop-blur-md border transition-all active:scale-95"
                        style={{
                            backgroundColor: `${theme.colors.primary}20`,
                            borderColor: theme.colors.primary,
                            color: theme.colors.text,
                        }}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div
                        className="w-12 h-12 rounded-full backdrop-blur-md border"
                        style={{
                            backgroundColor: `${theme.colors.primary}10`,
                            borderColor: theme.colors.primary,
                        }}
                    />

                    <button
                        className="p-3 rounded-full backdrop-blur-md border transition-all active:scale-95"
                        style={{
                            backgroundColor: `${theme.colors.primary}20`,
                            borderColor: theme.colors.primary,
                            color: theme.colors.text,
                        }}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Down */}
                <button
                    className="p-3 rounded-full backdrop-blur-md border transition-all active:scale-95"
                    style={{
                        backgroundColor: `${theme.colors.primary}20`,
                        borderColor: theme.colors.primary,
                        color: theme.colors.text,
                    }}
                >
                    <ChevronDown size={20} />
                </button>
            </div>
        </div>
    )
}
