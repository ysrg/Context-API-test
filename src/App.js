import React, { Component, createContext } from 'react';
import './App.css';

const AppContext = createContext();

export default class AppProvider extends Component {
  state = {
    address: '14 Baker St',
    city: 'London'
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          changeAddress: () => {
            this.setState({
              address: 'Downing St'
            });
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

function City(props) {
  return (
    <AppContext.Consumer>
      {function(context) {
        return (
          <React.Fragment>
            <p>{context.state.address}</p>
            <p>{context.state.city}</p>
            <button onClick={context.changeAddress}>Change address</button>
          </React.Fragment>
        );
      }}
    </AppContext.Consumer>
  );
}

function Country() {
  return <City />;
}

class App extends Component {
  render() {
    return (
      <AppProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React Context Example</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Country />
        </div>
      </AppProvider>
    );
  }
}
