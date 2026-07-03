import { createContext, useContext, ReactNode, useState } from 'react'

interface GalleryContextType {
    selectedProjectId: number | null
    setSelectedProjectId: (id: number | null) => void
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined)

export function GalleryProvider({ children }: { children: ReactNode }) {
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)

    return (
        <GalleryContext.Provider value={{ selectedProjectId, setSelectedProjectId }}>
            {children}
        </GalleryContext.Provider>
    )
}

export function useGallery() {
    const context = useContext(GalleryContext)
    if (!context) {
        throw new Error('useGallery must be used within GalleryProvider')
    }
    return context
}
