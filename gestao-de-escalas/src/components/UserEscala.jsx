import React from "react";

const UserEscala = (props) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th>Funcionário</th>
                    <th>Entrada</th>
                    <th>Saída</th>
                    <th>Escala</th>
                    <th>Pausa Lanche</th>
                    <th>Pausa Descanso</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ?(
                    props.users.map (user =>{ 
                        const{nome,sobrenome,dataEntrada,entrada,dataSaida,saida,escala,pausaLanche,pausaDescanso,tempoStatus,status}= user;
                        return(
                            <tr>
                                <td>{nome} {sobrenome} </td>
                                <td>{dataEntrada}<br></br> {entrada}</td>
                                <td>{dataSaida} <br></br> {saida}</td>
                                <td>{escala}</td>
                                <td>{pausaLanche}</td>
                                <td>{pausaDescanso}</td>
                                <td>{tempoStatus}<br></br> {status}</td>
                            </tr>
                        )                    
                    })
                ):(
                    <tr>
                        <td>Escala não encontrada.</td>
                    </tr>
                )
            }
            </tbody>
            </table> 
    )
}

export default UserEscala;
