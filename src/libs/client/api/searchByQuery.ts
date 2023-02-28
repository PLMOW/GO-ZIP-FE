import api from 'libs/client/api/axiosIstance';
import { END_POINT, METHOD } from 'libs/client/constants/api';

interface queryType {
  city: string;
  town: string;
  house_type: string;
}

const searchByQuery = async (searchData: queryType) => {
  const query = Object.entries(searchData)
    .map(([key, value]) => {
      return !!value ? `${key}=${value}` : '';
    })
    .filter((v) => v)
    .join('&');

  const res = await api({
    method: METHOD.GET,
    url: END_POINT.SEARCH(query),
  });

  return res;
};

export default searchByQuery;
