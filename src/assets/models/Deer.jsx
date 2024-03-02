/* eslint-disable react/no-unknown-property */
/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-02-28 04:35:36
 * @modify date 2024-02-28 04:35:36
 * @desc 3d 모델 - 주인공
 */
import React, {useRef} from 'react'
// import { useGLTF, useAnimations } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Deer.glb')
  // const { nodes, materials, animations } = useGLTF('/models/Deer.glb')
  // const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone015} />
          <group name="Deer_Hands">
            <skinnedMesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.Deer_Skin} skeleton={nodes.Mesh.skeleton} />
            <skinnedMesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials['Deer_Skin.001']} skeleton={nodes.Mesh_1.skeleton} />
          </group>
          <group name="Deer_Legs">
            <skinnedMesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials.Deer_Skin} skeleton={nodes.Mesh_2.skeleton} />
            <skinnedMesh name="Mesh_3" geometry={nodes.Mesh_3.geometry} material={materials['Deer_Skin.001']} skeleton={nodes.Mesh_3.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Deer.glb')
