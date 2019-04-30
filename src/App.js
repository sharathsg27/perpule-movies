import React from 'react';
import './App.scss';
import Header from "./components/presentational/header/Header";
import Main from "./components/presentational/main/Main";
import Footer from "./components/presentational/footer/Footer";

function App() {
  return (
      <div className="app">
          <div className="header-grid">
              <Header/>
          </div>
          <div className="main-grid">
              <Main/>
          </div>
          <div className="footer-grid">
              <Footer/>
          </div>
    </div>
  );
}

export default App;
