import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css'

import IndexPage from './components/IndexPage';
import ResultPage from './components/ResultPage';

function App() {

  const[message, SetMessage] = useState("");

  useEffect(() => {
    fetch('/wikiexplorer/search?query=square') .then(response => response.json()).then(data => {SetMessage(data)}).catch(error => {console.log("erro", error)});
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<IndexPage/>} />
          <Route path="/result" element={<ResultPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
