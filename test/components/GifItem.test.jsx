import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {
  
  const title = 'Saitama';
  const url = 'https://one-punch.com/saitama.jpg'

  test('Match con el Snapshot', () => {
    const {container} = render(<GifItem title={title} url={url} />);
    expect( container ).toMatchSnapshot();
  });
  test('Debe mostrar la imagen con el url y el alt indicados', () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test('Se muestra el título en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
})