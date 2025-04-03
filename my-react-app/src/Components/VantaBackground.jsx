import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Required for Vanta.js
import WAVES from "vanta/dist/vanta.waves.min";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = WAVES({
      el: vantaRef.current,
      THREE,
      color: 0x3498db, // Blue color
      shininess: 50,
      waveHeight: 20,
      waveSpeed: 1.2,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute w-full h-full z-[-1]" />;
};

export default VantaBackground;
