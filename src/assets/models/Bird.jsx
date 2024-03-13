/* eslint-disable react/no-unknown-property */
/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-02-28 04:35:36
 * @modify date 2024-02-28 04:35:36
 * @desc 3d 모델
 */

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/Bird.glb')
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Bone} />
      <primitive object={nodes.Bone011} />
      <skinnedMesh geometry={nodes.Bird_Hand.geometry} material={materials.Bird_Skin} skeleton={nodes.Bird_Hand.skeleton} />
      <skinnedMesh geometry={nodes.Bird_Legs.geometry} material={materials.Bird_Legs} skeleton={nodes.Bird_Legs.skeleton} />
    </group>
  )
}

useGLTF.preload('/Bird.glb')
