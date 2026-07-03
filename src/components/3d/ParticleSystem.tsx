import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useThemeStore } from '../../store/themeStore'
import { themes } from '../../data/themes'

export default function ParticleSystem() {
    const pointsRef = useRef<THREE.Points>(null)
    const currentTheme = useThemeStore((state) => state.currentTheme)
    const camera = useThree((state) => state.camera)

    // Fixed particle count to avoid buffer resizing
    const particleCount = 500

    const { positions, velocities } = useMemo(() => {
        const pos = new Float32Array(particleCount * 3)
        const vel = new Float32Array(particleCount * 3)

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3
            
            // Random positions around the gallery
            pos[i3] = (Math.random() - 0.5) * 30
            pos[i3 + 1] = Math.random() * 15
            pos[i3 + 2] = (Math.random() - 0.5) * 30

            // Random velocities
            vel[i3] = (Math.random() - 0.5) * 0.1
            vel[i3 + 1] = (Math.random() - 0.5) * 0.1
            vel[i3 + 2] = (Math.random() - 0.5) * 0.1
        }

        return { positions: pos, velocities: vel }
    }, [])

    useFrame((state) => {
        if (!pointsRef.current) return

        const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array
        const cameraPos = camera.position

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3

            // Update position
            posArray[i3] += velocities[i3]
            posArray[i3 + 1] += velocities[i3 + 1]
            posArray[i3 + 2] += velocities[i3 + 2]

            // Wrap around boundaries
            if (Math.abs(posArray[i3]) > 25) velocities[i3] *= -1
            if (posArray[i3 + 1] < 0 || posArray[i3 + 1] > 20) velocities[i3 + 1] *= -1
            if (Math.abs(posArray[i3 + 2]) > 25) velocities[i3 + 2] *= -1

            // Slight repulsion from camera (cursor effect)
            const dx = posArray[i3] - cameraPos.x
            const dy = posArray[i3 + 1] - cameraPos.y
            const dz = posArray[i3 + 2] - cameraPos.z
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

            if (dist < 5) {
                const force = (5 - dist) * 0.01
                velocities[i3] -= (dx / dist) * force
                velocities[i3 + 1] -= (dy / dist) * force
                velocities[i3 + 2] -= (dz / dist) * force
            }
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true
    })

    const theme = themes[currentTheme]

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                key={`particle-material-${currentTheme}`}
                size={0.1}
                sizeAttenuation
                color={theme.particles.color}
                transparent
                opacity={0.6}
            />
        </points>
    )
}
