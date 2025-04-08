import { CameraControls, Environment, Float, MeshReflectorMaterial, OrbitControls, RenderTexture, Text } from "@react-three/drei";
import { Camping } from "./Camping";
import { degToRad } from "three/src/math/MathUtils.js";
import { useEffect, useRef } from "react";
import { Color } from "three";
import { FantasyWolf } from "./FantasyWolf";

const bloomColor= new Color("#fff");
bloomColor.multiplyScalar(1.5);

export const Experience = () => {

const controls = useRef();

//for Animatin of camera from far to near
const intro = async () => {
  controls.current.dolly(-22);
  controls.current.smoothTime=1.6;
  controls.current.dolly(22,true);
}

useEffect(  ()=>{
    intro();
  },[]
)

  return (
    <>
      <CameraControls ref={controls} />
      
      
      <Text 
      font={"fonts/Poppins-Black.ttf"} 
      position-x={-1.9}
      position-y={-0.5} 
      position-z={0.5} 
      lineHeight={0.8} 
      textAlign="center" 
      rotation-y={degToRad(30)}
      anchorY={"bottom"}
      >
       REMUS{"\n"} THE WOLF
        <meshBasicMaterial color={bloomColor} toneMapped={false}>
          <RenderTexture attach="map">
            <color attach="background" args={["#fff"]} />
            <Environment preset="sunset" />
           <Float floatIntensity={4} rotationIntensity={5}>
            <Camping
            scale={1.6}
            rotation-y={degToRad(25)}
            rotation-x={degToRad(40)}
            position-y={-0.5}
            />
            </Float>
          </RenderTexture>
          </meshBasicMaterial>
      </Text>
      //scale meaning the size of the model
      //rotation-y meaning the rotation of the model
      //position-x meaning the position of the model
      {/* <group rotation-y={degToRad(-26)} position-x={3}>
      <Camping scale={0.6} />
      </group> */}

      <group 
      rotation-y={degToRad(-50)} 
      rotation-x={degToRad(80)} 
      rotation-z={degToRad(90)} 
      position-x={3} 
      position-y={-1}
      >
      <FantasyWolf scale={0.3} />
      </group>
      <mesh position-y={-0.68} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100,100]} />
        <MeshReflectorMaterial
       blur={[100, 100]} // Blur ground reflections (width, height), 0 skips blur
       resolution={2048} // Off-buffer resolution, lower=faster, higher=better quality, slower
       mixBlur={0.7} // How much blur mixes with surface roughness (default = 0)
       mixStrength={10} // Strength of the reflections
       roughness={1} // Surface roughness
       depthScale={1} // Scale the depth factor (0 = no depth, default = 0)
       opacity={0.5} // Reflection opacity
       transparent
       minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
       maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
       color="#333"
       metalness={0.5}  
        />
      </mesh>
    
      <Environment preset="sunset" />
    </>
  );
};
