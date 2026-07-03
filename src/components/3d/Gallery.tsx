import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import Exhibit from './Exhibit'
import ExhibitLabel from './ExhibitLabel'
import CameraController from './CameraController'
import { curatedProjects } from '../../data/curatedProjects'

export default function Gallery() {
    const groupRef = useRef<THREE.Group>(null)

    // Position exhibits in a circular arrangement
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
            // Gentle animation of the group
            groupRef.current.rotation.y += 0.0001
        }
    })

    return (
        <>
            <CameraController />
            <group ref={groupRef}>
                {curatedProjects.map((project, index) => {
                    const pos = positions[index % positions.length] as [number, number, number]
                    return (
                        <group key={project.id}>
                            <Exhibit
                                project={project}
                                position={pos}
                            />
                            <ExhibitLabel
                                title={project.title}
                                subtitle={project.subtitle}
                                position={pos}
                            />
                        </group>
                    )
                })}
            </group>
        </>
    )
}
