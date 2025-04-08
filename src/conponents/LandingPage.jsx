import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Experience } from "./Experience";
import { Suspense } from "react";
import { Loader } from "./Loader";
import '../styles/LandingPage.css';
import { LandingButton } from "./LandingButton";

 const LandingPage = ()=>{
    return(
      <>
       <Canvas className="landingPage" shadows camera={{ position: [0, 0, 8], fov: 42 }}>
            <Suspense fallback={<Loader/>}>
             <color attach="background" args={["#171720"]} />
            <fog attach="fog" args={["#171720",10,30]} />
             <Experience />
             <EffectComposer>
               <Bloom mipmapBlur intensity={1.2}/>
             </EffectComposer>
             </Suspense>
           </Canvas>
           <LandingButton/>
      </>
       
    )

}

export default LandingPage;