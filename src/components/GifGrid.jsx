import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className='result-container'>
      {isLoading && (<h2>Cargando...</h2>)}
      <div className="result-container__card-grid">
        {images.map(( image ) => ( <GifItem key={image.id} {...image} /> ))}
      </div>
    </div>
  )
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
