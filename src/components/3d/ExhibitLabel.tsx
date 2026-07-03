import { useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { useThemeStore } from '../../store/themeStore'
import { themes } from '../../data/themes'

interface ExhibitLabelProps {
    title: string
    subtitle: string
    position: [number, number, number]
}

export default function ExhibitLabel({ title, subtitle, position }: ExhibitLabelProps) {
    const titleRef = useRef<THREE.Mesh>(null)
    const subtitleRef = useRef<THREE.Mesh>(null)
    const currentTheme = useThemeStore((state) => state.currentTheme)
    const theme = themes[currentTheme]

    useFrame(() => {
        if (titleRef.current) {
            titleRef.current.rotation.y = Math.atan2(
                titleRef.current.position.x,
                titleRef.current.position.z
            )
        }
        if (subtitleRef.current) {
            subtitleRef.current.rotation.y = Math.atan2(
                subtitleRef.current.position.x,
                subtitleRef.current.position.z
            )
        }
    })

    useEffect(() => {
        if (titleRef.current && subtitleRef.current) {
            gsap.to([titleRef.current.material, subtitleRef.current.material], {
                color: new THREE.Color(theme.colors.text),
                duration: 1.5,
            })
        }
    }, [currentTheme, theme.colors.text])

    return (
        <group position={position}>
            <Text
                ref={titleRef}
                position={[0, 2.8, 0]}
                fontSize={0.4}
                font="/fonts/inter-var.woff"
                color={theme.colors.primary}
                anchorX="center"
                anchorY="middle"
                maxWidth={2}
                textAlign="center"
            >
                {title}
            </Text>
            <Text
                ref={subtitleRef}
                position={[0, 2.3, 0]}
                fontSize={0.2}
                font="/fonts/inter-var.woff"
                color={theme.colors.accent}
                anchorX="center"
                anchorY="middle"
                maxWidth={2}
                textAlign="center"
                opacity={0.8}
            >
                {subtitle}
            </Text>
        </group>
    )
}
