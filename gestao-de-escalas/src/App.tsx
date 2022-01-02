import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Gestão de Escalas</h1>
        <div className="App-panel panel-title">
          <div>Funcionário</div>
          <div>Entrada</div>
          <div>Saída</div>
          <div>Escala</div>
          <div>Pausa lanche</div>
          <div>Pausa Descanço</div>
          <div>status</div>
        </div>
        <div className="App-panel">
          <div>Nome Sobrenome</div>
          <div>01/01/2022
            <div>08:10</div>
          </div>
          <div>01/01/2022
            <div>10:31</div>
          </div>  
          <div>08:10 - 14:35</div>
          <div>12:00 - 12:25</div>
          <div>13:30 - 13:40</div>  
          <div>03:04
            <div> <small>Livre</small> </div>  
          </div>       
        </div> 
    </div>
  );
}

export default App;
