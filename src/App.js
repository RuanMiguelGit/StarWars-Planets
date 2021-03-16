import React from 'react';
import './App.css';
import Table from './Table';
import Search from './Search';
import DataProvider from './DataProvider';

function App() {
  return (
    <DataProvider>
      <div>
        <Search />
        <Table />

      </div>
    </DataProvider>
  );
}

export default App;
