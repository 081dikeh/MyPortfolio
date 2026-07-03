export type ThemeName = 'artdeco' | 'cyberpunk' | 'minimalist'

export interface Theme {
    name: ThemeName
    displayName: string
    colors: {
        primary: string
        secondary: string
        accent: string
        background: string
        text: string
        glow: string
    }
    lighting: {
        ambientIntensity: number
        ambientColor: string
        directionalIntensity: number
        directionalColor: string
        pointLightColor: string
    }
    particles: {
        color: string
        emissive: string
        count: number
    }
    environment: {
        backgroundColor: string
        fogColor: string
        fogNear: number
        fogFar: number
    }
}

export const themes: Record<ThemeName, Theme> = {
    artdeco: {
        name: 'artdeco',
        displayName: 'Art Deco',
        colors: {
            primary: '#D4AF37',      // Gold
            secondary: '#FFFFFF',    // White
            accent: '#000000',       // Black
            background: '#F5F5F5',   // Off-white
            text: '#1a1a1a',
            glow: '#D4AF37',
        },
        lighting: {
            ambientIntensity: 0.6,
            ambientColor: '#FFF8E7',
            directionalIntensity: 1.2,
            directionalColor: '#FFEB99',
            pointLightColor: '#D4AF37',
        },
        particles: {
            color: '#D4AF37',
            emissive: '#FFD700',
            count: 200,
        },
        environment: {
            backgroundColor: '#F5F5F5',
            fogColor: '#E8E8E8',
            fogNear: 10,
            fogFar: 100,
        },
    },
    cyberpunk: {
        name: 'cyberpunk',
        displayName: 'Cyberpunk',
        colors: {
            primary: '#00FF00',      // Neon Green
            secondary: '#00FFFF',    // Cyan
            accent: '#FF0080',       // Magenta
            background: '#0A0E27',   // Dark blue
            text: '#00FF00',
            glow: '#00FFFF',
        },
        lighting: {
            ambientIntensity: 0.4,
            ambientColor: '#0A0E27',
            directionalIntensity: 0.8,
            directionalColor: '#00FFFF',
            pointLightColor: '#FF0080',
        },
        particles: {
            color: '#00FFFF',
            emissive: '#FF0080',
            count: 300,
        },
        environment: {
            backgroundColor: '#0A0E27',
            fogColor: '#1a1a3e',
            fogNear: 5,
            fogFar: 150,
        },
    },
    minimalist: {
        name: 'minimalist',
        displayName: 'Minimalist',
        colors: {
            primary: '#FFFFFF',      // White
            secondary: '#E0E0E0',    // Light gray
            accent: '#808080',       // Gray
            background: '#FAFAFA',   // Off-white
            text: '#333333',
            glow: '#CCCCCC',
        },
        lighting: {
            ambientIntensity: 0.8,
            ambientColor: '#FFFFFF',
            directionalIntensity: 0.9,
            directionalColor: '#F0F0F0',
            pointLightColor: '#FFFFFF',
        },
        particles: {
            color: '#CCCCCC',
            emissive: '#AAAAAA',
            count: 100,
        },
        environment: {
            backgroundColor: '#FAFAFA',
            fogColor: '#F0F0F0',
            fogNear: 20,
            fogFar: 120,
        },
    },
}
