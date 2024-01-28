import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense } from "react";


function Wave(){
  return (
    <Canvas camera={{fov: 8}}>
      <color attach="background" args={["#181717"]} />
      
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
  )
}

function App() {
  return (
    <>
      <h1>Oceanic Canvas</h1>
      <Wave />
    </>  
  )
}

export default App;
