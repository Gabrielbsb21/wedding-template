import {render, screen} from '@testing-library/react';
import Header from '.';

describe('Header component', () => {
  test('should render the logo correctly', () => {
    render(<Header />);

    const logo = screen.getByAltText(
      "Logo do casamento de Gabriel e Gabriela, com as letras 'G' entrelaçadas e detalhes florais."
    );

    expect(logo).toBeInTheDocument();

    expect(logo).toHaveAttribute('width', '80');
    expect(logo).toHaveAttribute('height', '50');
  });

  test('should render the navigation links correctly', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');
    expect(links).toBe(6);
  })
})
