import React, { useState } from 'react';

// Components
import NavBar from './NavBar';
import SearchBarResult from './SearchBarResult';
import Controls from './Controls';

const ResultPage = (props) => {

  const {data} = props;
  console.log(data);

  return (
    <>
      <NavBar></NavBar>
      <SearchBarResult/>
      <Controls data = {data}/>
    </>
  )
}

export default ResultPage