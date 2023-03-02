import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader component', () => {
  it('should render nothing when isLoading is false', () => {
    render(<Loader isLoading={false} />);
    const loader = screen.queryByTestId('loader');
    expect(loader).not.toBeInTheDocument();
  });

  it('should render loader when isLoading is true', () => {
    render(<Loader isLoading={true} />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});
