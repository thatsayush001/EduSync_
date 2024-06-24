import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { extend, Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { easing } from 'maath'
import { useControls } from 'leva'
import './Background.css'
import { Hero } from '../HeroSection/Hero'
// import './App.css'

extend({ MeshLineGeometry, MeshLineMaterial })

export default function Background() {
  // const { dash, count, radius } = useControls({
  //   dash: { value: 0.9, min: 0, max: 0.99, step: 0.01 },
  //   count: { value: 50, min: 0, max: 200, step: 1 },
  //   radius: { value: 50, min: 1, max: 100, step: 1 }
  // })
  return (

    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 90 }}>
        <color attach="background" args={['#101020']} />
        <Lines colors={[[10, 0.5, 2], [1, 2, 10], '#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff']} />
        <Rig />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.6} />
        </EffectComposer>
      </Canvas>
      {/* <Hero /> */}
    </>
  )
}

function Lines({ dash = 0.9, count = 50, colors, radius = 50, rand = THREE.MathUtils.randFloatSpread }) {
  const lines = useMemo(() => {
    return Array.from({ length: count }, () => {
      const pos = new THREE.Vector3(rand(radius), rand(radius), rand(radius))
      const points = Array.from({ length: 10 }, () => pos.add(new THREE.Vector3(rand(radius), rand(radius), rand(radius))).clone())
      const curve = new THREE.CatmullRomCurve3(points).getPoints(200)
      return {
        color: colors[parseInt(colors.length * Math.random())],
        width: Math.max(radius / 100, (radius / 50) * Math.random()),
        speed: Math.max(0.1, 1 * Math.random()),
        curve: curve.flatMap((point) => point.toArray())
      }
    })
  }, [colors, count, radius])
  return lines.map((props, index) => <Fatline key={index} dash={dash} {...props} />)
}

function Fatline({ curve, width, color, speed, dash }) {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.material.dashOffset -= (delta * speed) / 10))
  return (
    <mesh ref={ref}>
      <meshLineGeometry points={curve} />
      <meshLineMaterial transparent lineWidth={width} color={color} depthWrite={false} dashArray={0.25} dashRatio={dash} toneMapped={false} />
    </mesh>
  )
}

function Rig({ radius = 20 }) {
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, [Math.sin(state.pointer.x) * radius, Math.atan(state.pointer.y) * radius, Math.cos(state.pointer.x) * radius], 0.25, dt)
    state.camera.lookAt(0, 0, 0)
  })
}