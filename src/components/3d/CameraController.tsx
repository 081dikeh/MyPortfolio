import { useRef, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { useDeviceOrientation } from '../../hooks/useDeviceOrientation'

interface CameraControllerProps {
  onCameraUpdate?: (x: number, y: number) => void
}

export default function CameraController({ onCameraUpdate }: CameraControllerProps) {
  const { camera } = useThree()
  const orientationRef = useDeviceOrientation()
  const cameraRef = useRef({
    targetX: 0,
    targetY: 0,
    targetZ: 10,
  })

  // Handle device orientation for mobile "look around"
  useEffect(() => {
    const handleOrientation = () => {
      const { alpha, beta, gamma } = orientationRef.current

      // Map device orientation to camera rotation
      const rotationX = (beta * Math.PI) / 180 * 0.3
      const rotationY = (gamma * Math.PI) / 180 * 0.3

      cameraRef.current.targetY = rotationX
      cameraRef.current.targetX = rotationY
    }

    const interval = setInterval(handleOrientation, 16)
    return () => clearInterval(interval)
  }, [orientationRef])

  // Smooth camera movement
  useEffect(() => {
    const animate = () => {
      if (camera) {
        // Smooth interpolation
        const targetX = cameraRef.current.targetX + 0
        const targetY = cameraRef.current.targetY + 3

        camera.position.x += (targetX - camera.position.x) * 0.1
        camera.position.y += (targetY - camera.position.y) * 0.1
        camera.lookAt(0, 1, 0)

        if (onCameraUpdate) {
          onCameraUpdate(camera.position.x, camera.position.y)
        }
      }
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [camera, onCameraUpdate])

  return null
}

export function useCameraController() {
  return {
    moveCamera: (direction: 'up' | 'down' | 'left' | 'right', cameraRef: any) => {
      const moveAmount = 0.5
      switch (direction) {
        case 'up':
          cameraRef.current.targetY += moveAmount
          break
        case 'down':
          cameraRef.current.targetY -= moveAmount
          break
        case 'left':
          cameraRef.current.targetX -= moveAmount
          break
        case 'right':
          cameraRef.current.targetX += moveAmount
          break
      }
    },
  }
}
