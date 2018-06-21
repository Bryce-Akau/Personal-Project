import React, {Component} from 'react';
import './App.css';
import routes from './routes';
import Header from './components/Header';
import Top from './components/Top';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Header />
        {/* <Top /> */}
        {routes}
      </div>
    );
  }
}

export default App;
