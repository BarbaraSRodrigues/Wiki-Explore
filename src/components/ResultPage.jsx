import React from 'react';

// Components
import NavBar from './NavBar';
import SearchBarResult from './SearchBarResult';
import Controls from './Controls';

const ResultPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <SearchBarResult></SearchBarResult>
      <Controls></Controls>
    </>
  )
}

export default ResultPage