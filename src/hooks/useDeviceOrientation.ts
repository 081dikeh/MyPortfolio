import { useEffect, useRef } from 'react'

interface DeviceOrientation {
    alpha: number // z axis rotation (0-360)
    beta: number  // x axis rotation (-180 to 180)
    gamma: number // y axis rotation (-90 to 90)
}

export function useDeviceOrientation() {
    const orientationRef = useRef<DeviceOrientation>({
        alpha: 0,
        beta: 0,
        gamma: 0,
    })

    useEffect(() => {
        const handleOrientation = (event: DeviceOrientationEvent) => {
            orientationRef.current = {
                alpha: event.alpha || 0,
                beta: event.beta || 0,
                gamma: event.gamma || 0,
            }
        }

        const handlePermissionRequest = () => {
            if (typeof DeviceOrientationEvent !== 'undefined') {
                // For iOS 13+, we need to request permission
                if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
                    (DeviceOrientationEvent as any)
                        .requestPermission()
                        .then((permissionState: string) => {
                            if (permissionState === 'granted') {
                                window.addEventListener('deviceorientation', handleOrientation)
                            }
                        })
                        .catch(console.error)
                } else {
                    // Non-iOS 13 devices
                    window.addEventListener('deviceorientation', handleOrientation)
                }
            }
        }

        // Try to add listener on first interaction
        const handleFirstInteraction = () => {
            handlePermissionRequest()
            document.removeEventListener('click', handleFirstInteraction)
            document.removeEventListener('touchstart', handleFirstInteraction)
        }

        document.addEventListener('click', handleFirstInteraction)
        document.addEventListener('touchstart', handleFirstInteraction)

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation)
            document.removeEventListener('click', handleFirstInteraction)
            document.removeEventListener('touchstart', handleFirstInteraction)
        }
    }, [])

    return orientationRef
}