import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import "./App.css";
function App() {
  return (
    <>
      <div className="App">
        <Canvas>
          <color attach="background" args={["#000"]} />
          <Experience />
        </Canvas>
      </div>
    </>
  );
}

export default App;
