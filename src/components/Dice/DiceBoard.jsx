/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-03 01:41:25
 * @modify date 2024-03-03 01:41:25
 * @desc 3D 주사위 띄우기
 */
/* eslint-disable react/no-unknown-property */
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from '@react-three/drei';
import { usePlane, Physics, useBox } from "@react-three/cannon";
import { useEffect } from "react";
import { Box3, Vector3, Quaternion, Euler } from "three";

function Dice() {
  const gltf = useLoader(GLTFLoader, "/models/dice.glb");

  const box = new Box3().setFromObject(gltf.scene);
  const size = box.getSize(new Vector3());

  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, size.y / 2, 0],
    args: [size.x, size.y, size.z],
  }));

  const rollDice = () => {
    const randomForce = [Math.random() - 0.5, 0, Math.random() - 0.5].map(v => v * 2000);
    api.applyForce([150, 0, -650], [0, 0, 0]);
    console.log('force', randomForce);
  };

  useEffect(() => {
    rollDice();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (api.body) { // api.body가 정의되었는지 확인
        const { x, y, z, w } = api.body.quaternion;
        const quaternion = new Quaternion(x, y, z, w);
        const euler = new Euler().setFromQuaternion(quaternion);
        console.log('rotation', euler.x * (180 / Math.PI), euler.y * (180 / Math.PI), euler.z * (180 / Math.PI));
      }
    }, 500);

    return () => clearInterval(interval);
  }, [api]);

  return <primitive ref={ref} object={gltf.scene} onClick={rollDice} />;
}

function Wall({ position, args }) {
  const [ref] = useBox(() => ({ type: 'Static', args, position }));
  return <mesh ref={ref} />;
}

function Plane(props) {
  const [ref] = usePlane(() => ({
    ...props,
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

function CameraControls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  useEffect(() => {
    camera.position.set(0, 10, 0);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <OrbitControls
      target={[0, 0, 0]}
      args={[camera, domElement]}
    />
  );
}

function DiceBoard() {
  return (
    <div style={{width: '430px', height: '872px', margin: '52px auto'}}>
      <Canvas>
        <ambientLight intensity={Math.PI * 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI * 2} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Physics gravity={[0, -9.8, 0]}>
          <Plane position={[0, 0, 0]} />
          <Dice />
          <Wall position={[-5, 0, 0]} args={[1, 10, 10]} />
          <Wall position={[5, 0, 0]} args={[1, 10, 10]} />
          <Wall position={[0, 0, -5]} args={[10, 10, 1]} />
          <Wall position={[0, 0, 5]} args={[10, 10, 1]} />
        </Physics>
        <CameraControls />
      </Canvas>
    </div>
  );
}

export default DiceBoard;
