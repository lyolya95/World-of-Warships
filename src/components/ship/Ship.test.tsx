import React from 'react';
import { render, screen } from '@testing-library/react';
import { Ship } from './Ship';
import { shipMock } from '../../mocks/ship';

describe('Ship component', () => {
  it('should render the ship name', () => {
    render(<Ship ship={shipMock} />);
    const nameElement = screen.getByText(shipMock.name);
    expect(nameElement).toBeInTheDocument();
  });

  it('should render the ship nation', () => {
    render(<Ship ship={shipMock} />);
    const nationElement = screen.getByText(shipMock.nation);
    expect(nationElement).toBeInTheDocument();
  });

  it('should render the ship image with the correct source and alt text', () => {
    render(<Ship ship={shipMock} />);
    const imageElement = screen.getByAltText(shipMock.name);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toBe(
      `https://glossary-wows-global.gcdn.co/icons/${shipMock.icons.large}`
    );
  });
});
