import React, { useContext } from 'react';
import DataContext from './DataContext';
import './App.css';

export default function FiltersCombine() {
  const {
    column,
    setColumn,
    range,
    setRange,
    number,
    setNumber,
    Filter,
    deleted,
    setDeleted,
    filtered,
    setFiltered

  } = useContext(DataContext);

  function columnHandler(e) {
    const text = e.target.value;
    setColumn(text);
  }

  function rangeHandler(e) {
    const text = e.target.value;
    setRange(text);
  }

  function numberHandler(e) {
    const text = e.target.value;
    setNumber(text);
  }

  return (
    <div>
      <label className='box' htmlFor="select-input">
        Filtrar por Colunas
        <select
          className='box select'
          name="select"
          value={column}
          onChange={columnHandler}
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>

        </select>
      </label>

      <label htmlFor="select-input-Range">
        Faixa de Valor
        <select
          name="select-Range"
          value={range}
          onChange={rangeHandler}
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>

        </select>
      </label>

      <input
        className='Input'
        data-testid="input-filter"
        type="number"
        placeholder="number"
        value={number}
        onChange={numberHandler}
      />

      <button
        className='ButtonS'
        data-testid="button-filter"
        type="button"
        onClick={() => setFiltered({ coluna: column, range: range, number: number, })}
      // Filter
      >
        Adicionar Filtro
      </button>
      <button
        className='ButtonD'
        data-testid="button-filter"
        type="button"
        onClick={() => setDeleted([{ column, range, number, Filter }])}
      >
        Delete
      </button>
    </div>
  );
}
