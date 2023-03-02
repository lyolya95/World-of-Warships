import React, { FC } from 'react';
import { LoaderProps } from './types';
import './Loader.scss';

export const Loader: FC<LoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="wrapper">
      <div className="loader" data-testid="loader"></div>
    </div>
  );
};
