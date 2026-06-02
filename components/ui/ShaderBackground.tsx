"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
varying vec2 vUv;

// Noise function
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 st = gl_FragCoord.xy / uResolution.xy;
  st.x *= uResolution.x / uResolution.y;

  // React to mouse
  vec2 mouseEffect = uMouse * 0.1;
  
  float n = snoise(vec2(st.x * 2.0 + uTime * 0.1 + mouseEffect.x, st.y * 2.0 + uTime * 0.1 + mouseEffect.y));
  float n2 = snoise(vec2(st.x * 4.0 - uTime * 0.05, st.y * 4.0 - uTime * 0.05));
  
  float finalNoise = n * 0.5 + n2 * 0.5;
  
  // Color palette: Deep obsidian / Midnight Blue background
  vec3 bg = vec3(0.01, 0.01, 0.02); // #030305 base
  
  // Accents
  vec3 accent1 = vec3(0.23, 0.51, 0.96); // Electric Blue #3B82F6
  vec3 accent2 = vec3(0.55, 0.36, 0.96); // Cyber Purple #8B5CF6
  vec3 accent3 = vec3(0.0, 0.1, 0.2); // Darker blue depth
  
  // Mix based on noise
  vec3 color = mix(bg, accent3, finalNoise + 0.5);
  color = mix(color, accent1, smoothstep(0.6, 1.0, finalNoise + 0.5) * 0.5);
  color = mix(color, accent2, smoothstep(0.8, 1.0, finalNoise + 0.5) * 0.3);

  // Add subtle glow around mouse
  float dist = distance(st, uMouse + vec2(uResolution.x/uResolution.y * 0.5 - 0.5, 0.0));
  color += accent1 * smoothstep(0.5, 0.0, dist) * 0.15;

  gl_FragColor = vec4(color, 1.0);
}
`;

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: 1.0 - e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined" && materialRef.current) {
      materialRef.current.uniforms.uResolution.value.set(
        window.innerWidth,
        window.innerHeight
      );
    }
    
    const handleResize = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.uResolution.value.set(
          window.innerWidth,
          window.innerHeight
        );
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      // Interpolate mouse for smooth movement
      materialRef.current.uniforms.uMouse.value.lerp(
        new THREE.Vector2(mouse.x, mouse.y),
        0.05
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export function ShaderBackground() {
  return (
    <div className="fixed inset-0 -z-20 h-full w-full bg-[#030305]">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <ShaderPlane />
      </Canvas>
      {/* Subtle vignette/noise overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-10" 
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, #030305 150%)',
        }}
      />
    </div>
  );
}
