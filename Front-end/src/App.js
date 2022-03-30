import React from 'react';

import Header from './components/header'
import Footer from './components/footer'

import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

          <Routes />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;