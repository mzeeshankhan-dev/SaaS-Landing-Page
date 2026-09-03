import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Nodes({ count = 46, color = '#8B5CF6' }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3.4 + Math.random() * 1.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.045
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.045} sizeAttenuation transparent opacity={0.85} />
    </points>
  )
}

function DriftRing({ radius, color, speed, tilt }) {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed
  })
  return (
    <mesh ref={ref} rotation={[tilt, 0.3, 0]}>
      <torusGeometry args={[radius, 0.006, 8, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.35} />
    </mesh>
  )
}

export default function AINodeField({ className = '' }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <Nodes />
        <DriftRing radius={3.8} color="#818CF8" speed={0.05} tilt={0.9} />
        <DriftRing radius={4.4} color="#22D3EE" speed={-0.03} tilt={1.3} />
      </Canvas>
    </div>
  )
}
