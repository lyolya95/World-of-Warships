import {useCallback, useLayoutEffect, useState} from 'react';
import axios from 'axios';
import { TShip } from '../types';
import { mappingData } from '../utils';

type UseGetShips = { ships: TShip[]; loading: boolean };

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://vortex.worldofwarships.eu/api/encyclopedia/en/vehicles/';

export const useGetShips = (): UseGetShips => {
  const [ships, setShips] = useState<TShip[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    const { data } = await axios.get(proxyUrl + apiUrl);
    const ships = await data.data;

    setShips(mappingData(ships));

    setLoading(false);
  }, []);

  useLayoutEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ships, loading };
};
