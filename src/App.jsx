import Teoria from "./components/Teoria";

function App() {
  // aqui agrego la logica del componente
  const comision = 23;
  const modulo = "módulo 2";

  return (
    <main className="container my-3">
      <h1 className="text-center">Hola mundo con react</h1>
      {/* <Teoria ></Teoria> */}
      <Teoria comisionProps={comision} moduloProps={modulo} />
    </main>
  );
}

export default App;
