import { useQuery } from 'react-query';
import { useApi } from './useApi';

const api = useApi();

export const useData = () => useQuery(['data'], api.getDataFromApi)