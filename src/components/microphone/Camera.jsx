import { PerspectiveCamera } from "@react-three/drei"

const Camera = () => {
   return <PerspectiveCamera makeDefault fov={12} position={[-10, 5, -5]} />
}

export default Camera