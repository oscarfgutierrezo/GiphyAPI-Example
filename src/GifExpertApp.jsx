import { useState } from 'react';
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [category, setCategories] = useState('')
    
  return (
    <>
      <header>
        <h1>Giphy API</h1>
        <p>Search Gifs</p>
      </header>
      <AddCategory onNewCategory={ (value) => setCategories(value) } />
      <GifGrid key={ category } category={category} />
    </>
  )
}
