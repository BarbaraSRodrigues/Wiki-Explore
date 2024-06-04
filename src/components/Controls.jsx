import './Controls.css'

import Results from './Results'

const Controls = (props) => {

  const {data} = props;

  return (
    <>
      {/* Barra de Controle Inicial */}
      <div className='control-group control-group-first'>
          <p className='results'>Xs results</p>
          <div className='buttons-group'>
              <p className='pages'>1-10</p>

              <div className='control-buttons-group'>
                  <span>
                    <button className='button button-control button-back'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
                    </button>
                  </span>
                  <span>
                    <button className='button button-control'>
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
      <div className='control-group'>
        <span></span>
          <div className='buttons-group'>
              <p className='pages'>1-10</p>

              <div className='control-buttons-group'>
                  <span>
                    <button className='button button-control button-back'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
                    </button>
                  </span>
                  <span>
                    <button className='button button-control'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                    </button>
                  </span>
              </div>
          </div>
      </div>
      <div className='break-content break-content-controls'>
        <hr />
      </div>
    </>
  )
}

export default Controls