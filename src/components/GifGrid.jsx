import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem, Spinner, Paginator } from '../components';
import { useState } from 'react';

export const GifGrid = ({ category }) => {
  
  const [ currentPage, setCurrentPage ] = useState(1);
  const { images, isLoading, totalPages } = useFetchGifs(category, currentPage);

  return (
    <div className='result-container'>
      {isLoading && <Spinner />}
      <div className="result-container__card-grid">
        {images.map(( image ) => ( <GifItem key={image.id} {...image} /> ))}
      </div>
      <Paginator totalPages={totalPages} changePage={ (value) => setCurrentPage(value) }/>
    </div>
  )
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
