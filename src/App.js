import Header from './components/header'
import './App.scss';
import "bootstrap/dist/css/bootstrap.css";
import SpinningMesh from './shapes/box'
import SpinningMeshSphere from "./shapes/sphere";
import React from 'react';
import {Canvas} from 'react-three-fiber'
import {softShadows, OrbitControls} from "@react-three/drei";

softShadows()

function App() {

    return (
        <>
            <Header/>
            <Canvas
                colorManagment
                camera={{position: [-5, 2, 10], fov: 60}}
            >
                <ambientLight intensity={0.3} />
                <directionalLight
                    position={[0, 10, 0]}
                    intensity={1}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <pointLight position={[-10, 0, -20]} intensity={0.5}/>
                <pointLight position={[0, -10, 0]} intensity={1.5}/>
                <group>
                    <mesh
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -3, 0]}
                    >
                        <planeBufferGeometry attach='geometry' args={[100,100]}/>
                        <shadowMaterial attach='material' opacity={0.3}/>
                    </mesh>
                </group>
                <SpinningMesh position={[0, 0, 0]} color={'#222'} args={[3, 2, 1]} speed={6}/>
                <SpinningMesh position={[7, 0, -2]} color={'#A00'} args={[2, 2, 3]} speed={3} />
                <SpinningMesh position={[7, -3, -7]} color={'orangered'} args={[3, 3, 5]} speed={1}/>
                <SpinningMeshSphere position={[15, -2, -5]} color={'yellow'} args={[2, 30]} speed={6} factor={1}/>
                <SpinningMesh position={[-5, -2, -7]} color={'#AAA'} args={[3, 3, 5]} speed={1}/>
                <SpinningMeshSphere
                    position={[0, 0, -10]}
                    color={'orangered'}
                    args={[5, 360]}
                    speed={6}
                    factor={0.6}
                />
            <OrbitControls />
            </Canvas>
        </>
    );
}

export default App;
