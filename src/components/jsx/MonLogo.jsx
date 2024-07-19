'use client'
import { useGLTF, useCursor } from '@react-three/drei'
import { useFrame, } from '@react-three/fiber'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Vector3, Clock, MeshStandardMaterial } from 'three'
import { LoadingContext } from '@/layout'

export function MonLogo(props) {
    const meshRef = useRef(null)
    const { scene, nodes, materials } = useGLTF('/monlogo.gltf')
    const [loading, setLoading] = useContext(LoadingContext)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(function () {
        const onResizeWindow = function (event) {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', onResizeWindow)
        return () => { window.removeEventListener('resize', onResizeWindow) }
    }, [])

    const [rotation, setRotation] = useState([1.3, 0.2, 0])

    const blueMaterial = new MeshStandardMaterial({ color: materials['Dore'].color, roughness: 0 })
    const [hovered, hover] = useState(false)
    useCursor(hovered)

    useFrame(function (state, delta) {
        //console.log(nodes);
    })

    // useFrame((state, delta) => {
    //     const t = state.clock.getElapsedTime()
    //     state.setFrameloop("always")
    //     meshRef.current.rotation.y = 0
    //     meshRef.current.rotation.x = 1.3
    //     meshRef.current.rotation.z -= (0.01)
    // })

    return <mesh
        ref={meshRef}
        scale={(windowWidth < 940) ? 1.1 : 1.1}
        rotation={rotation}
        castShadow receiveShadow
        geometry={nodes.HT.geometry}
        material={hovered ? blueMaterial : materials['Dore']}
        onAfterRender={() => { setLoading(false); }}
        onPointerOver={() => { hover(true) }}
        onPointerOut={() => { hover(false) }}
    />
}