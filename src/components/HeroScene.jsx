import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshTransmissionMaterial, Float, Stars } from '@react-three/drei';

function Crystal() {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.x = t * 0.2;
            mesh.current.rotation.y = t * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Icosahedron args={[1, 0]} scale={2.5} ref={mesh}>
                <MeshTransmissionMaterial
                    backside
                    samples={16}
                    thickness={2}
                    chromaticAberration={0.05}
                    anisotropy={0.1}
                    distortion={0.1}
                    distortionScale={0.1}
                    temporalDistortion={0.1}
                    iridescence={1}
                    iridescenceIOR={1}
                    iridescenceThicknessRange={[0, 1400]}
                    roughness={0}
                    color="#e0e0e0"
                />
            </Icosahedron>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
                <spotLight position={[-10, -10, -10]} intensity={2} color="#ffffff" />

                <Crystal />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
}
