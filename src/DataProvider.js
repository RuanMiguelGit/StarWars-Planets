import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData((json.results)));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (q !== '') {
      const info = data.filter((i) => i.name.toLowerCase().includes(q.toLowerCase()));
      setData(info);
    } else {
      setIsLoading(true);
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((json) => setData((json.results)));
      setIsLoading(false);
    }
  }, [q]);

  return (

    <DataContext.Provider value={ { data, isLoading, q, setQ } }>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default DataProvider;
