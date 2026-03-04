import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function TechNetwork({ pointer, ...props }) {
  const ref = useRef();
  const materialRef = useRef();
  const [sphere] = useState(() =>
    // stride={3}, so 18000 values ~= 6000 rendered points
    random.inSphere(new Float32Array(18000), { radius: 1.75 }),
  );

  useFrame((state, delta) => {
    if (!ref.current || !materialRef.current) return;

    const time = state.clock.elapsedTime;
    const circularX = Math.sin(time * 0.015) * 0.22;
    const circularY = Math.cos(time * 0.015) * 0.28;
    const targetX = circularX + pointer.current.y * 0.22;
    const targetY = circularY + pointer.current.x * 0.32;

    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.04;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.04;
    ref.current.rotation.z += delta * 0.12;
    ref.current.scale.setScalar(1 + Math.sin(time * 0.6) * 0.025);

    const hue = 190 + Math.sin(time * 0.4) * 20;
    materialRef.current.color.set(`hsl(${hue}, 95%, 65%)`);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          ref={materialRef}
          transparent
          color="#77d9ff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  const pointer = useRef({ x: 0, y: 0 });

  return (
    <div className="three-bg">
      <div className="three-bg-gradient" />
      <Canvas
        style={{ position: "relative", zIndex: 1 }}
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => gl.setClearColor("#000000", 0)}
        onPointerMove={(event) => {
          pointer.current = { x: event.pointer.x, y: event.pointer.y };
        }}
      >
        <TechNetwork pointer={pointer} />
      </Canvas>
    </div>
  );
}
