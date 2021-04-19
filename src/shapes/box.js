import React, {useRef} from "react";
import {useFrame} from "react-three-fiber";
import {MeshWobbleMaterial} from "@react-three/drei";

const SpinningMesh = ({position, color, args, speed}) => {
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxBufferGeometry attach='geometry' args={args}/>
            <MeshWobbleMaterial
                attach='material'
                color={color}
                speed={speed}
                factor={0.6}
            />
        </mesh>
    )
}

export default SpinningMesh