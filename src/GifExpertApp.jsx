import { useState } from 'react';
import { AddCategory, GifGrid, NavSearch } from './components'

export const GifExpertApp = () => {
  const [category, setCategory] = useState('')
    
  return (
    <>
      <header>
        <h1>Giphy API</h1>
        <p>Search Gifs</p>
      </header>
      <AddCategory onNewCategory={ (value) => setCategory(value) } />
      <NavSearch onNewCategory={ (value) => setCategory(value) } category={category} />
      <GifGrid key={ category } category={category} />
    </>
  )
}
