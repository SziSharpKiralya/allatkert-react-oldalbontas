import Bevezeto from "./components/Bevezeto";
import Fejlec from "./components/Fejlec"
import Lista from "./components/Lista";
import Lablec from "./components/Lablec";
import "./main.css";

function App() {

  return (
    <>
    <div className="container">
      <Fejlec></Fejlec>
      <Bevezeto></Bevezeto>
      <Lista></Lista>
      <Lablec></Lablec>
    </div>
    </>
  )
}

export default App
