import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

interface State {
  monsters: Monster[];
}
interface Props {}
interface Monster {
  name: string;
  id: number;
}
class App extends Component<Props, State> {
  state: State = {
    monsters: [
      {
        name: 'Phyllis',
        id: 1,
      },
      {
        name: 'Louis',
        id: 2,
      },
      {
        name: 'Franklin',
        id: 3,
      },
    ],
  };

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => (
          <h1>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
