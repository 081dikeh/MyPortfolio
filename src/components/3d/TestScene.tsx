import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function TestScene() {
    const cubeRef = useRef<THREE.Mesh>(null)
    const sphereRef = useRef<THREE.Mesh>(null)

    useFrame(() => {
        if (cubeRef.current) {
            cubeRef.current.rotation.x += 0.01
            cubeRef.current.rotation.y += 0.01
        }
        if (sphereRef.current) {
            sphereRef.current.rotation.y += 0.02
        }
    })

    return (
        <>
            {/* Lights */}
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, 10]} intensity={0.5} />

            {/* Test cube */}
            <mesh ref={cubeRef} position={[-3, 0, 0]}>
                <boxGeometry args={[2, 2, 2]} />
                <meshPhongMaterial color="#ff6600" emissive="#ff3300" />
            </mesh>

            {/* Test sphere */}
            <mesh ref={sphereRef} position={[3, 0, 0]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshPhongMaterial color="#00ff88" emissive="#00ff00" />
            </mesh>

            {/* Ground plane */}
            <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[30, 30]} />
                <meshPhongMaterial color="#1a1a2e" />
            </mesh>
        </>
    )
}
