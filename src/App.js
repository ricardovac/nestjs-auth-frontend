import { useState } from 'react';
import './App.css';
import Router from './Component/Router';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Router isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </>
  );
}

export default App;
