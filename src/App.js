import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';

import Top from './components/Top'; 
import Settings from './components/Settings';
import Memory from './components/Memory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} /> 
          <Route path="/Memory" element={<Memory />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
