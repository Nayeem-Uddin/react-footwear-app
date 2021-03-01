import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Section from './components/Section';
import { DataProvider } from "./components/Context";


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header></Header>
            <Section></Section>
          </Router>
        </div>
      </DataProvider>
    )
  }
}

export default App;
