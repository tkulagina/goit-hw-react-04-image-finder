import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export function Searchbar({ onSubmit }) {
  const [searchData, setSearchData] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(searchData);
  };

  const handleChange = evt => {
    const { value } = evt.target;
    setSearchData(value);
  };

    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }

  Searchbar.protoType = {
    onSubmit: PropTypes.func.isRequired,
  };