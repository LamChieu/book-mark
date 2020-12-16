import Header from './components/Header'
import Categories from './components/Categories'
import Comptrol from './components/CompControl'
import React from 'react'
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Google",
        // description: "google.com.vn.ahihi",
        // folder: "Internet"
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-bookmark container">
          <Categories />
          <Comptrol 
            todos={this.state.todos}
          />

        </div>
      </div>
    );
  }
};

export default App;
