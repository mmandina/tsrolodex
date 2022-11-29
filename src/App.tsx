import React, { ChangeEvent, ReactNode } from 'react';
import './App.css';
import { Component } from 'react';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
interface MyState {
  monsters: Monster[];
  searchString: string;
}
interface MyProps {}
export interface Monster {
  name: string;
  id: number;
  email: string;
}
class App extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      monsters: [],
      searchString: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchString: searchString };
    });
  };
  render(): ReactNode {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((ele) => {
      return ele.name.toLowerCase().includes(searchString);
    });
    return (
      <div className='App'>
        <h1 className='app-title'> TypeScript Monster Rolodex</h1>
        <SearchBox
          className='monster-search-box'
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
        />

        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
