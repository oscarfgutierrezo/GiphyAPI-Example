import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
  test('Regresa el estado inicial', () => {
    const { result } = renderHook( () => useFetchGifs('One Punch') );
    const { images, isLoading } = result.current;
    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  });
  test('Retorna un arreglo de imágenes e isLoading con valor false', async() => {
    const { result } = renderHook( () => useFetchGifs('One Punch') );
    // Esperar hasta que el length del arreglo de imágenes sea mayor que 0
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect( images.length ).toBe(images.length);
    expect( isLoading ).toBeFalsy();
  });
})