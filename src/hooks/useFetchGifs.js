import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category, currentPage ) => {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const imagesPerPage = 10;
  const initialIndex = imagesPerPage * (currentPage - 1);
  const finalIndex = initialIndex + 9;

  const getImages = async () => {
    const [newImages, countImages] = await getGifs( category );
    setTimeout(() => {
      console.log(initialIndex);
      setImages(newImages.slice(initialIndex, finalIndex));
      setTotalPages(countImages / 10);
      setIsLoading(false);
    }, 500);
  }

  useEffect( () => {
    getImages();
  }, [currentPage])

  return {
    images,
    isLoading,
    totalPages
  }
}
