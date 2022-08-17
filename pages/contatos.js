
import { useState } from 'react';
import { useEffect } from 'react';
import Base from './base';

export default function Contatos() {

    const [contatos, setContatos] = useState([])
    const [isLoading, setLoading] = useState(false)

    // TODO: Refator com SWR
    useEffect(() => {
        setLoading(true);
        let api_host = process.env.API_HOST? process.env.API_HOST: "localhost:5000";
        fetch(`http://${api_host}/contatos_fixo`)
          .then((res) => res.json())
          .then((data) => {
            setContatos(data);
            setLoading(false);
          })
      }, [])

    if (isLoading) return <p>Loading...</p>
    if (!contatos) return <p>Sem dados</p>

    return (
        <div>
            <Base />
            <h1>Lista de contatos</h1>
            <table className="table table-striped">
                <thead>
                <tr> <th>Nome</th> <th>Telefone</th> <th>Data de Nascimento</th> </tr>
                </thead>

                <tbody>
                {contatos.map(contato => {
                    return (
                        <tr>
                            <td>{contato.nome}</td>
                            <td>{contato.telefone}</td>
                            <td>{contato.data_nascimento}</td>
                        </tr>
                    )
                })}
                </tbody>

            </table>    
        </div>
    )

}