import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export interface Monster {
  name: string;
  id: number;
  email: string;
}
const App = () => {
  const [monsters, setMonsters] = useState<Monster[] | []>([]);
  const [searchString, setSearchString] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((ele) => {
        return ele.name.toLowerCase().includes(searchString);
      })
    );
  }, [monsters, searchString]);
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchBoxString = event.target.value.toLowerCase();
    setSearchString(searchBoxString);
  };
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
};

export default App;
