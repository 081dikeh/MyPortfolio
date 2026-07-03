export default function MinimalTest() {
    return (
        <>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[2, 2, 2]} />
                <meshPhongMaterial color="#ff6600" />
            </mesh>
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[20, 20]} />
                <meshPhongMaterial color="#1a1a1a" />
            </mesh>
        </>
    )
}
