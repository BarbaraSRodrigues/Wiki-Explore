import React, { useEffect, useState } from 'react';

// Components
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Controls from './Controls';

const ResultPage = (props) => {

  // Extrai diretamente props.data
  const { data: initialData } = props;
  const [data, setData] = useState(initialData);
  const [pagAtual, setPagAtual] = useState();
  const [pagUpdate, setPagUpdate] = useState(1);

  // useEffect para atualizar data quando props.data mudar
  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const updateDocuments = (docs) => {
    // Verifique se docs esta definido antes de atualizar data
    if (docs) {
      setData(docs);
    }
  }

  const updatePage = (value) =>{
    setPagAtual(value);
  };

  return (
    <>
      <NavBar></NavBar>
      <SearchBar callback={updateDocuments} updatePage = {pagAtual} isResultPage={true}/>
      <Controls data = {data} callback={updatePage}/>
    </>
  )
}

export default ResultPage