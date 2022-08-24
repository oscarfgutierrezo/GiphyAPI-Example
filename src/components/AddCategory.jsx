import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [ inputValue, setInputValue ] = useState('');
  
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const cleanInputValue = inputValue.trim()
    if(cleanInputValue.length < 1) return;
    onNewCategory(cleanInputValue);
    setInputValue('')
  }

  return (
    <form onSubmit={ e => onSubmit(e) } aria-label='form'>
        <input id="search" type="text" placeholder="Type a Search Term" value={ inputValue } onChange={ onInputChange }/>
        <button typeof='submit'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
