import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import { useGetShips } from './useGetShips';
import { shipMock } from '../mocks/ship';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const mockResponse = [shipMock];

mock.onGet('https://vortex.worldofwarships.eu/api/encyclopedia/en/vehicles/').reply(200, {
  data: mockResponse
});

jest.mock('axios');

describe('useGetShips', () => {
  it('fetches ships and maps them to array', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValue({ data: { data: mockResponse } });

    const { result, waitForNextUpdate } = renderHook(() => useGetShips());

    await waitForNextUpdate();

    expect(result.current.ships).toEqual(mockResponse);
    expect(result.current.loading).toBeFalsy();
  });
});
