import React from "react";
import Header from './header.jsx';
import Footer from './footer.jsx';
import Note from './note.jsx';
import Appp from './appp.jsx';
import Createentry from './apppp.jsx';
import test from './test.js';
import Menu from './menu.js';
import { BrowserRouter } from "react-router-dom";
import Gettime from './time.js';


function App() {
  return (
    <div className="App">
      <Header />
      <React.StrictMode>
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
      </React.StrictMode>
      <Gettime />

      <div className="App-content"> 
        <Note />
        <Appp />
        {test.map((props) => (
          <Createentry key={props.id} text={props.text} description={props.description} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
