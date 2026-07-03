import { useRef, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { useThemeStore } from '../../store/themeStore'
import { themes } from '../../data/themes'

export default function Environment() {
    const { scene } = useThree()
    const currentTheme = useThemeStore((state) => state.currentTheme)
    const ambientLightRef = useRef<THREE.Light>(null)
    const directionalLightRef = useRef<THREE.Light>(null)

    useEffect(() => {
        const theme = themes[currentTheme]

        // Set scene background
        scene.background = new THREE.Color(theme.environment.backgroundColor)
        
        // Set fog
        scene.fog = new THREE.Fog(
            theme.environment.fogColor,
            theme.environment.fogFar,
            theme.environment.fogNear
        )
    }, [currentTheme, scene])

    return (
        <>
            <ambientLight
                ref={ambientLightRef}
                color={themes[currentTheme].lighting.ambientColor}
                intensity={themes[currentTheme].lighting.ambientIntensity}
            />
            <directionalLight
                ref={directionalLightRef}
                position={[5, 10, 7]}
                intensity={themes[currentTheme].lighting.directionalIntensity}
                color={themes[currentTheme].lighting.directionalColor}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight
                position={[3, 5, 3]}
                intensity={0.8}
                color={themes[currentTheme].lighting.pointLightColor}
            />
            <pointLight
                position={[-3, 5, -3]}
                intensity={0.6}
                color={themes[currentTheme].colors.glow}
            />
            
            {/* Ground */}
            <mesh
                position={[0, -0.5, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                receiveShadow
            >
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial
                    color={themes[currentTheme].colors.secondary}
                    roughness={0.6}
                    metalness={0.1}
                />
            </mesh>
        </>
    )
}
