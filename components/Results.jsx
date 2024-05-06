import './Results.css';

const Results = () => {
  return (
    <>
      <div className='result-group'>
        <div className='result'>
          <h1 className='title'>Título</h1>
          <a className='result-link' href="https://www.google.com">https://www.google.com</a>
          <p className='result-resume'>Lorem <span className='word-searched'>ipsum</span> dolor sit amet consectetur adipisicing elit. Fugiat, dicta odio exercitationem dolor nesciunt ullam commodi earum quidem recusandae ab natus sequi iure rem nemo, aliquam omnis non, ea quam.</p>
        </div>

        <div className='result-info'>
          <p>Published in Set 20, 2002 </p>
          <span className='dot'></span>
          <p> Reading time</p>
        </div>
      </div>
      <div className='break-content break-content-result'>
        <hr />
      </div>
    </>
  )
}

export default Results;