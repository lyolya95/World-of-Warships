import { TShip } from '../types';

export const mappingData = (data: TShip): TShip[] =>
  Object.entries(data).map((item) => {
    return {
      id: item[0],
      ...(item[1] as object)
    } as TShip;
  });
