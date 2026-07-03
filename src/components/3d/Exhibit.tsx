import { useRef, useState, useEffect } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { useThemeStore } from '../../store/themeStore'
import { themes } from '../../data/themes'
import { CuratedProject } from '../../data/curatedProjects'
import { useGallery } from '../../context/GalleryContext'

interface ExhibitProps {
    project: CuratedProject
    position: [number, number, number]
}

export default function Exhibit({ project, position }: ExhibitProps) {
    const { selectedProjectId, setSelectedProjectId } = useGallery()
    const groupRef = useRef<THREE.Group>(null)
    const pedestalRef = useRef<THREE.Mesh>(null)
    const displayRef = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = useState(false)
    const currentTheme = useThemeStore((state) => state.currentTheme)
    const camera = useThree((state) => state.camera)
    const texture = useTexture(project.image)

    useFrame(() => {
        if (groupRef.current) {
            // Gentle bob animation
            const bobAmount = hovered ? 0.3 : 0.2
            groupRef.current.position.y = position[1] + Math.sin(Date.now() * 0.0005) * bobAmount

            // Float rotation - faster when hovered
            const rotationSpeed = hovered ? 0.005 : 0.002
            groupRef.current.rotation.y += rotationSpeed

            // Scale on hover
            const targetScale = hovered ? 1.1 : 1
            groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
        }
    })

    useEffect(() => {
        if (displayRef.current) {
            const theme = themes[currentTheme]
            gsap.to(displayRef.current.material, {
                emissiveIntensity: hovered ? 1 : 0.5,
                duration: 0.3,
            })
        }
    }, [hovered, currentTheme])

    useEffect(() => {
        if (texture) {
            texture.colorSpace = THREE.SRGBColorSpace
            texture.anisotropy = 8
        }
    }, [texture])

    const handleClick = () => {
        if (selectedProjectId === project.id) return

        setSelectedProjectId(project.id)

        // Animate camera to focus on exhibit
        gsap.to(camera.position, {
            x: position[0],
            y: position[1] + 2,
            z: position[2] + 5,
            duration: 1,
            ease: 'power2.inOut',
        })
    }

    const theme = themes[currentTheme]

    return (
        <group
            ref={groupRef}
            position={position}
        >
            {/* Pedestal */}
            <mesh
                ref={pedestalRef}
                position={[0, 0, 0]}
                castShadow
                receiveShadow
            >
                <boxGeometry args={[1.5, 0.5, 1.5]} />
                <meshPhongMaterial
                    color={theme.colors.primary}
                    emissive={theme.colors.glow}
                    emissiveIntensity={hovered ? 0.8 : 0.3}
                />
            </mesh>

            {/* Display panel */}
            <mesh
                ref={displayRef}
                position={[0, 1.2, 0]}
                castShadow
                receiveShadow
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={handleClick}
            >
                <boxGeometry args={[1.8, 2, 0.3]} />
                <meshPhongMaterial
                    color={theme.colors.accent}
                    emissive={theme.colors.glow}
                    emissiveIntensity={hovered ? 1 : 0.5}
                />
            </mesh>

            <mesh position={[0, 1.2, 0.17]} castShadow receiveShadow>
                <planeGeometry args={[1.6, 1.8]} />
                <meshStandardMaterial
                    map={texture}
                    emissive={theme.colors.glow}
                    emissiveIntensity={0.15}
                    metalness={0.1}
                    roughness={0.9}
                />
            </mesh>

            {/* Glow frame */}
            <mesh position={[0, 1.2, -0.2]}>
                <boxGeometry args={[2, 2.4, 0.1]} />
                <meshPhongMaterial
                    color={theme.colors.accent}
                    emissive={theme.colors.glow}
                    emissiveIntensity={hovered ? 1.2 : 0.6}
                />
            </mesh>
        </group>
    )
}
