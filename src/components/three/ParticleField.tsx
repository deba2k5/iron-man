"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Icosahedron } from "@react-three/drei";
import type { Group } from "three";

function sphereField(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random());
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

type Props = { scrollRef: React.RefObject<number> };

export function ParticleField({ scrollRef }: Props) {
  const groupRef = useRef<Group>(null);
  const positions = useMemo(() => sphereField(1500, 5.6), []);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;
    const t = state.clock.elapsedTime;
    const scroll = scrollRef.current;
    group.rotation.y = t * 0.055 + scroll * 0.0009;
    group.rotation.x = Math.sin(t * 0.12) * 0.09 + scroll * 0.00012;
    group.position.z = Math.sin(t * 0.08) * 0.4;
  });

  return (
    <group ref={groupRef}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#d4a22f"
          size={0.026}
          sizeAttenuation
          depthWrite={false}
          opacity={0.55}
        />
      </Points>
      <Icosahedron args={[2.05, 1]}>
        <meshBasicMaterial color="#d4a22f" wireframe transparent opacity={0.14} />
      </Icosahedron>
      <Icosahedron args={[3.6, 0]}>
        <meshBasicMaterial color="#e4e4e7" wireframe transparent opacity={0.05} />
      </Icosahedron>
    </group>
  );
}
