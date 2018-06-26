import React, {Component} from 'react';
import './App.css';
import routes from './routes';
import Header from './components/Header';
import Top from './components/Top';
import Footer from './components/Footer';
import Home from './components/Home'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Top />
        <Header />
        {routes} 
          <Footer />
      </div>
    );
  }
}

export default App;
