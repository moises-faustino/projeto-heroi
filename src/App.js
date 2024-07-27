import axios from "axios";
import React, { useState, useEffect } from "react";
import './index.css'
function App() {
  const [herois, setHerois] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    function getSuperHerois() {
      axios.get('http://homologacao3.azapfy.com.br/api/ps/metahumans')
        .then((r) => {
          const dados = r.data;
          setHerois(dados);
        });
    }
    getSuperHerois()

  }, []);
  const heroisFiltrados = herois.filter(heroi => heroi.name.toLowerCase().trim().startsWith(busca.toLowerCase().trim()));

  return (
    <div>
      <div className="header">
        <header>
          <input
            className="input"
            type="text"
            value={busca}
            onChange={e => setBusca(e.target.value)}
            placeholder="Buscar heróis"
          />
        </header>
      </div>

      <div className="container">
        {heroisFiltrados.map((item) => {
          return (
            <div className="card">
              <img src={item.images.sm} alt={item.name} />
              <h3 className="title">{item.name}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )

}

export default App
