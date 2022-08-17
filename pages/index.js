import { useState } from "react"
import Base from "./base";

function Home() {
    return (
        <div>
            <Base />
            <h1>Home</h1>
            <Contador />
        </div>
    )
}

export default Home


function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1)
    }

    return (
        <div>
            {contador} <br/>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}


