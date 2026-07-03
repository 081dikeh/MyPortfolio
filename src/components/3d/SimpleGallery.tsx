import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { curatedProjects } from '../../data/curatedProjects'
import { useThemeStore } from '../../store/themeStore'
import { themes } from '../../data/themes'

export default function SimpleGallery() {
    const groupRef = useRef<THREE.Group>(null)
    const currentTheme = useThemeStore((state) => state.currentTheme)
    const theme = themes[currentTheme]

    const positions = [
        [0, 1, -8],
        [-5, 1, -4],
        [-5, 1, 4],
        [0, 1, 8],
        [5, 1, 4],
        [5, 1, -4],
    ]

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.0001
        }
    })

    return (
        <group ref={groupRef}>
            {curatedProjects.map((project, index) => {
                const pos = positions[index % positions.length] as [number, number, number]
                
                return (
                    <group key={project.id} position={pos}>
                        {/* Pedestal */}
                        <mesh position={[0, 0, 0]}>
                            <boxGeometry args={[1.5, 0.5, 1.5]} />
                            <meshPhongMaterial color={theme.colors.primary} emissive={theme.colors.glow} emissiveIntensity={0.5} />
                        </mesh>

                        {/* Display panel */}
                        <mesh position={[0, 1.2, 0]}>
                            <boxGeometry args={[1.8, 2, 0.3]} />
                            <meshPhongMaterial color={theme.colors.accent} emissive={theme.colors.glow} emissiveIntensity={0.7} />
                        </mesh>

                        {/* Glow frame */}
                        <mesh position={[0, 1.2, -0.2]}>
                            <boxGeometry args={[2, 2.4, 0.1]} />
                            <meshPhongMaterial color={theme.colors.accent} emissive={theme.colors.glow} emissiveIntensity={0.6} />
                        </mesh>
                    </group>
                )
            })}

            {/* Ground plane */}
            <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[50, 50]} />
                <meshPhongMaterial color="#1a1a2e" />
            </mesh>
        </group>
    )
}
