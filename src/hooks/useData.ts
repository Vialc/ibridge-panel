import { useQuery } from 'react-query';
import { useApi } from './useApi';

const api = useApi();

export const useData = () => {

  
  return useQuery(['data'], api.getDataFromApi)
}