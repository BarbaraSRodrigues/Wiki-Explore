import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'

import IndexPage from './components/IndexPage';
import ResultPage from './components/ResultPage';

function App() {

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
