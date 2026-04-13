import { useState } from "react";

const Contador = () => {
const [numero, setNumero ] = useState(0)
// aqui va la logica
// let numero = 0

const incrementar = ()=>{
    // numero = numero +1
    setNumero(numero + 1)
    console.log(numero)
}

    return (
        // aqui va el html y podria haber un poquito de logica
        <section className="border rounded-3 text-center p-3">
            <h2>Contador</h2>
            <p className="lead ">{numero}</p>
            <button className="btn btn-primary me-3" onClick={incrementar}>+</button>
            <button className="btn btn-danger">-</button>
        </section>
    );
};

export default Contador;