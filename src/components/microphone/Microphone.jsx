import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Environment, OrbitControls } from "@react-three/drei"
import Camera from "./Camera"
import Micro from "./Micro"

const Microphone = () => {
  return (
    <Canvas>
      <Camera />
      <pointLight color={"#0000ff"} position={[10, -5, 5]} />
      <pointLight color={"#0000ff"} position={[50, 10, -10]} />
      <pointLight color={"#ffffff"} position={[0, 0, 100]} />
      
      <Suspense fallback={null}>
        <Micro />
        <Environment files={'/hdr/decor_shop_1k.jpg'} preset={"night"} />
      </Suspense>

      <OrbitControls enablePan={false} autoRotate={true} enableZoom={false} />
    </Canvas>
  )
}
export default Microphone
