'use client'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export function MonLogo(props) {
    const { scene, nodes, materials } = useGLTF('/monlogo.gltf')
    const meshRef = useRef()

    return <mesh ref={meshRef} rotation={[1.3, 0.1, 0]} castShadow receiveShadow geometry={nodes.HT.geometry} material={materials['Dore']} />
}