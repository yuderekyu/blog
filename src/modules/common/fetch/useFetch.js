import { useQuery } from 'react-query';
import { fetchData } from '.';

const useFetch = (endpoint, queryKey) => useQuery([queryKey, endpoint], () => fetchData(endpoint));

export default useFetch;
