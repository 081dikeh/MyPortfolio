import { motion } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'
import { useThemeStore } from '../../store/themeStore'
import { themes } from '../../data/themes'
import { CuratedProject } from '../../data/curatedProjects'

interface HUDProps {
    selectedProject: CuratedProject | null
    onClose: () => void
    onAbout?: () => void
    onContact?: () => void
}

export default function HUD({ selectedProject, onClose, onAbout, onContact }: HUDProps) {
    const currentTheme = useThemeStore((state) => state.currentTheme)
    const theme = themes[currentTheme]

    return (
        <>
            {/* Navigation */}
            <div className="fixed bottom-6 left-6 z-40 flex gap-3">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onAbout}
                    className="px-4 py-2 rounded-lg backdrop-blur-md border font-semibold text-sm transition-all"
                    style={{
                        backgroundColor: `${theme.colors.primary}20`,
                        borderColor: theme.colors.primary,
                        color: theme.colors.text,
                    }}
                >
                    About
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onContact}
                    className="px-4 py-2 rounded-lg backdrop-blur-md border font-semibold text-sm transition-all"
                    style={{
                        backgroundColor: `${theme.colors.primary}20`,
                        borderColor: theme.colors.primary,
                        color: theme.colors.text,
                    }}
                >
                    Contact
                </motion.button>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 20 }}
                        className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border overflow-hidden max-w-2xl w-full"
                        style={{
                            borderColor: theme.colors.primary,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Project Image */}
                        <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br" style={{ backgroundImage: `url(${selectedProject.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="absolute inset-0 bg-black bg-opacity-30" />
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-md border transition-all"
                                style={{
                                    backgroundColor: `${theme.colors.primary}40`,
                                    borderColor: theme.colors.primary,
                                    color: theme.colors.text,
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Project Details */}
                        <div className="p-6 space-y-4">
                            <div>
                                <h2 className="text-3xl font-bold mb-2" style={{ color: theme.colors.primary }}>
                                    {selectedProject.title}
                                </h2>
                                <p className="text-sm opacity-75">{selectedProject.subtitle}</p>
                            </div>

                            <p className="text-base opacity-90">
                                {selectedProject.description}
                            </p>

                            {/* Tech Stack */}
                            <div>
                                <p className="text-xs font-semibold opacity-75 mb-2">TECH STACK</p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.stack.split(', ').map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full border"
                                            style={{
                                                backgroundColor: `${theme.colors.primary}15`,
                                                borderColor: theme.colors.primary,
                                                color: theme.colors.text,
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 pt-4">
                                <motion.a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 px-4 py-3 rounded-lg border font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                                    style={{
                                        backgroundColor: theme.colors.primary,
                                        color: theme.colors.background,
                                        borderColor: theme.colors.primary,
                                    }}
                                >
                                    <ExternalLink size={16} />
                                    View Live
                                </motion.a>
                                <motion.a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 px-4 py-3 rounded-lg border font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                                    style={{
                                        backgroundColor: `${theme.colors.primary}20`,
                                        color: theme.colors.text,
                                        borderColor: theme.colors.primary,
                                    }}
                                >
                                    <Github size={16} />
                                    GitHub
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}
