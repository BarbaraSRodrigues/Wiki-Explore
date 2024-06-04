import './Results.css';

const Results = (props) => {

  const {data} = props;

  // Função para formatar a data
  const formatDate = (dateString) => {
    const dateParts = dateString.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                    'Aug', 'Set', 'Oct', 'Nov', 'Dec'];
                    
    // Published on Set 20, 2002
    return `${dateParts[2]} ${months[Number(dateParts[1]-1)]}, ${dateParts[0]}`;
  };

  return (
    <>
      {data.map((item, index) => (

      <div key={index} className='result-group'>
        <div className='result'>
          <h1 className='title'>{item.title}</h1>
          <span className='result-link'><a href={item.url}>{item.url}</a></span>
          <p className='result-resume'>{item.abs}</p>
        </div>

        <div className='result-info'>
          <p>Published on {formatDate(item.dt_creation)} </p>
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