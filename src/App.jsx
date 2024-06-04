import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css'

import IndexPage from './components/IndexPage';
import ResultPage from './components/ResultPage';

function App() {

  const[data, setData] = useState([]);

  const returnDocuments = (value) =>{
    setData(value);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<IndexPage callback = {returnDocuments}/>} />
          <Route path="/result" element={<ResultPage data={data}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
