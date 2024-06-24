import './Controls.css'
import { useState, useEffect } from 'react';
import Results from './Results'

const Controls = (props) => {

  const { data, callback } = props; // Desestruturação de props para obter 'data' e 'callback'
  const value = data.length > 0 ? data[0].value : null;
  const [pagAtual, setPagAtual] = useState(1);
  
  const handlePageUp = () => {
    if(pagAtual < 10){
      setPagAtual(prevPagAtual => {
        callback(prevPagAtual + 1); // Passa o valor atualizado para a callback
        return prevPagAtual + 1; // Retorna o valor atualizado para setPagAtual
      });
    }
  }
  
  const handlePageDown = () => {
    if(pagAtual > 1){
      setPagAtual(prevPagAtual => {
        callback(prevPagAtual - 1); // Passa o valor atualizado para a callback
        return prevPagAtual - 1; // Retorna o valor atualizado para setPagAtual
      });
    }
  }

    
  return (
    <>
      {/* Barra de Controle Inicial */}
      <div className='control-group control-group-first'>
          <p className='results'>{value} results</p>
          <div className='buttons-group'>
              <p className='pages'>{pagAtual}-10</p>

              <div className='control-buttons-group'>
                  <span>
                    <button className='button button-control button-back' onClick={handlePageDown}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
                    </button>
                  </span>
                  <span>
                    <button className='button button-control' onClick={handlePageUp}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                    </button>
                  </span>
              </div>
          </div>
      </div>
      <div className='break-content break-content-controls'>
        <hr />
      </div>

      {/* Resultados */}
      <Results data = {data}/>

      {/* Barra de Controle Final */}
      <div className='control-group-final'>
        <span></span>
          <div className='buttons-group'>
              <p className='pages'>{pagAtual}-10</p>

              <div className='control-buttons-group'>
                  <span>
                    <button className='button button-control button-back' onClick={handlePageDown}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
                    </button>
                  </span>
                  <span>
                    <button className='button button-control' onClick={handlePageUp}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                    </button>
                  </span>
              </div>
          </div>
      </div>
      <div className='break-content break-content-controls break-content-final'>
        <hr />
      </div>
    </>
  )
}

export default Controls