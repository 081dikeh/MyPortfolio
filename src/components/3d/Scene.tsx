import { Canvas } from '@react-three/fiber'
import SimpleGallery from './SimpleGallery'

export default function Scene() {
    return (
        <Canvas
            camera={{
                position: [0, 3, 10],
                fov: 75,
                near: 0.1,
                far: 1000,
            }}
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <color attach="background" args={['#0a0a0a']} />
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <SimpleGallery />
        </Canvas>
    )
}
