import { useGLTF } from "@react-three/drei";

function Librero() {
  // R3F buscará este archivo en tu carpeta 'public'
  const modelo = useGLTF('/LibreroV1.glb');
  return (
    <primitive 
      object={modelo.scene} 
      // Lo ponemos en Y: -2, exactamente donde estaba la base de tu cubo
      position={[0, -2, 0]} 
      scale={0.5}
    />
  );
}
export default Librero;