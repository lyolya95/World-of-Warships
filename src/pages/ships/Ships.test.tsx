import React from 'react';
import { render, screen } from '@testing-library/react';
import { Ships } from './Ships';
import {TShip} from "../../types";

const ships = [
    {
        id: '1',
        name: 'Ship 1',
        nation: 'Nation 1',
        icons: {
            large: 'large.png',
        },
    },
    {
        id: '2',
        name: 'Ship 2',
        nation: 'Nation 2',
        icons: {
            large: 'large.png',
        },
    },
    {
        id: '3',
        name: 'Ship 3',
        nation: 'Nation 3',
        icons: {
            large: 'large.png',
        },
    },
    {
        id: '4',
        name: 'Ship 4',
        nation: 'Nation 4',
        icons: {
            large: 'large.png',
        },
    },
    {
        id: '5',
        name: 'Ship 5',
        nation: 'Nation 5',
        icons: {
            large: 'large.png',
        },
    },
    {
        id: '6',
        name: 'Ship 6',
        nation: 'Nation 6',
        icons: {
            large: 'large.png',
        },
    },
    {
        id: '7',
        name: 'Ship 7',
        nation: 'Nation 7',
        icons: {
            large: 'large.png',
        },
    }
];

describe('Ships', () => {
    test('renders a list of ships', () => {
        render(<Ships ships={ships as TShip[]} />);
        expect(screen.getByText('Ship 1')).toBeInTheDocument();
        expect(screen.getByText('Ship 2')).toBeInTheDocument();
        expect(screen.getByText('Ship 3')).toBeInTheDocument();
        expect(screen.queryByText('Ship 7')).not.toBeInTheDocument();
    });
});
