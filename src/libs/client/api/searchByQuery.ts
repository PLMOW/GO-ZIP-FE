import api from 'libs/client/api/axiosIstance';

interface queryType {
  city: string;
  town: string;
  house_type: string;
}
const searchByQuery = async ({ city, town, house_type }: queryType) => {
  const queryData = {
    city,
    town,
    house_type,
  };

  const query = Object.entries(queryData)
    .map(([key, value]) => {
      return !!value ? `${key}=${value}` : '';
    })
    .filter((v) => v)
    .join('&');

  const res = await api({
    method: 'GET',
    url: `api/product/search?${query}`,
  });

  console.log(res);
};

export default searchByQuery;
