import React, {useRef} from "react";
import {useFrame} from "react-three-fiber";
import {MeshWobbleMaterial} from "@react-three/drei";

const SpinningMeshSphere = ({position, color, args, speed, factor}) => {
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
    return (
        <mesh position={position} ref={mesh}>
            <sphereBufferGeometry attach='geometry' args={args}/>
            <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={factor}/>
        </mesh>
    )
}

export default SpinningMeshSphere