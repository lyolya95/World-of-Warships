import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { TShip } from '../types';
import { mappingData } from '../utils';

type UseGetShips = { ships: TShip[]; loading: boolean };

export const useGetShips = (): UseGetShips => {
  const [ships, setShips] = useState<TShip[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    const { data } = await axios.get(
      'https://vortex.worldofwarships.eu/api/encyclopedia/en/vehicles/'
    );
    const ships = await data.data;

    setShips(mappingData(ships));

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ships, loading };
};
