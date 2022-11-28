import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { serialize } from 'v8';

interface MyState {
  monsters: Monster[];
  searchString: string;
}
interface MyProps {}
interface Monster {
  name: string;
  id: number;
}
class App extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      monsters: [],
      searchString: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
    console.log('ComponentDidMount');
  }
  render() {
    console.log('render');
    const filteredMonsters = this.state.monsters.filter((ele) => {
      return ele.name.toLowerCase().includes(this.state.searchString);
    });
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            const searchString = event.target.value.toLowerCase();
            this.setState(() => {
              return { searchString: searchString };
            });
          }}
        />
        {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
