import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Container from "./components/Container";
import './App.css';


function App() {
  return (
    <Container>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
