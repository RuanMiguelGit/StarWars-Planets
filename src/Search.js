import React, { useContext } from 'react';
import DataContext from './DataContext';
import './App.css';

export default function Search() {
  const { q, setQ } = useContext(DataContext);

  function changeHandler(e) {
    const text = e.target.value;
    setQ(text);
  }

  return (
    <div>

      <input
        className='InputA'
        data-testid="name-filter"
        type="text"
        placeholder="search on"
        value={q}
        onChange={changeHandler}
      />
    </div>
  );
}
