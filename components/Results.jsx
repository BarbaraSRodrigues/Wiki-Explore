import './Results.css';

const Results = (props) => {

  const {data} = props;
  console.log(data);

  return (
    <>
      {data.map((item, index) => (
      <div key={index} className='result-group'>
        <div className='result'>
          <h1 className='title'>{item.title}</h1>
          <a className='result-link' href={item.url}>{item.url}</a>
          <p className='result-resume'>Lorem <span className='word-searched'>ipsum</span> dolor sit amet consectetur adipisicing elit. Fugiat, dicta odio exercitationem dolor nesciunt ullam commodi earum quidem recusandae ab natus sequi iure rem nemo, aliquam omnis non, ea quam.</p>
        </div>

        <div className='result-info'>
          <p>Published in Set 20, 2002 </p>
          <span className='dot'></span>
          <p> Reading time: {item.reading_time}</p>
        </div>
        <div className='break-content break-content-result'>
          <hr/>
        </div>
      </div>
      ))};
    </>
  )
}

export default Results;