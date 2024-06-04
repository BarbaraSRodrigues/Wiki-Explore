import React, { useEffect, useState } from 'react';

// Components
import NavBar from './NavBar';
import SearchBarResult from './SearchBarResult';
import Controls from './Controls';

const ResultPage = (props) => {

  const [data, setData] = useState([]);
  setData(props);
  //const {data} = props;  
  const updateDocuments = (docs) =>{
    useEffect(() => {
      setData(docs);
    }, [data])
  }

  return (
    <>
      <NavBar></NavBar>
      <SearchBarResult callback={updateDocuments}/>
      <Controls data = {data}/>
    </>
  )
}

export default ResultPage