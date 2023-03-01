import { useState } from 'react';
import styled from 'styled-components';
import ADDRESS from 'libs/client/constants/address';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToast from 'hooks/useToast';
import { STRUCTURE, SCOPE } from 'libs/client/constants/address';
import searchByQuery from 'libs/client/api/searchByQuery';
import { useQuery } from 'react-query';
import ProductCard from 'components/ProductCard';

interface searchDataForm {
  house_type: string;
  city: string;
  town: string;
}

const Search = () => {
  const [_, sendToast] = useToast();
  const [searchData, setData] = useState<searchDataForm>({
    city: SCOPE.EMPTY_STRING,
    town: SCOPE.EMPTY_STRING,
    house_type: SCOPE.EMPTY_STRING,
  });
  const { data, isLoading, refetch } = useQuery(
    ['search', searchData],
    () => searchByQuery(searchData),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  const onSearch = () => refetch();
  const cityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({
      ...searchData,
      city:
        e.target.value === SCOPE.CITY_DEFAULT
          ? SCOPE.EMPTY_STRING
          : e.target.value,
      town: SCOPE.EMPTY_STRING,
    });
  };

  const townHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({
      ...searchData,
      town:
        e.target.value === SCOPE.TOWN_DEFAULT
          ? SCOPE.EMPTY_STRING
          : e.target.value,
    });
  };

  return (
    <Body id="search">
      <ToastContainer />
      <TopWrapper>
        <Title>고승유의 집 구하기</Title>
        <SelectWrap>
          <Select onChange={cityHandler} style={{ outline: 'none' }}>
            <option>--도 / 시--</option>
            {Object.keys(ADDRESS).map((v) => (
              <Option key={v}>{v}</Option>
            ))}
          </Select>
          <Select onChange={townHandler} style={{ outline: 'none' }}>
            <option>--구--</option>
            {ADDRESS[searchData.city] &&
              Object.values(ADDRESS[searchData.city]).map((v) => (
                <Option key={v}>{v}</Option>
              ))}
          </Select>
        </SelectWrap>
        <TypeWrapper>
          {STRUCTURE.map((item, i) => {
            return (
              <RadioComp
                isFocus={item === searchData.house_type}
                htmlFor={`${item}_${i}`}
                key={`${item}_${i}`}
                onClick={() => {
                  setData({
                    ...searchData,
                    house_type: item,
                  });
                }}
              >
                {item}
                <input hidden value={item} type="radio" id={`${item}_${i}`} />
              </RadioComp>
            );
          })}
        </TypeWrapper>
        <SearchBtn onClick={onSearch}>검색</SearchBtn>
      </TopWrapper>
      <ProductsWrapper>
        {!isLoading ? (
          data ? (
            data?.data.map((v: any) => <ProductCard data={v} />)
          ) : (
            <None>검색 결과 없음</None>
          )
        ) : (
          <>검색중</>
        )}
      </ProductsWrapper>
    </Body>
  );
};

export default Search;

const None = styled.div``;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const SearchBtn = styled.div`
  width: 567px;
  padding: 10px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border: solid 1px gray;
  transition: ${({ theme }) => theme.transitionOption};
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.color};

  :hover {
    background: ${({ theme }) => theme.pointColor};
    cursor: pointer;
  }
`;

const TypeWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 20px;
`;

const SelectWrap = styled.div`
  margin: 10px 0 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 50px;
`;

const Option = styled.option`
  color: black;
`;

const Select = styled.select`
  color: ${({ theme }) => theme.color};
  width: 100px;
  height: 40px;
  text-align: center;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color};
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.8px;
  margin-bottom: 15px;
  margin-top: -25px;
`;

const TopWrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.background};
  padding: 100px 0 40px 0;
  border-bottom: solid lightgray 1px;
  flex-direction: column;
  align-items: center;
`;

const ProductsWrapper = styled.div`
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
  padding: 50px;
  overflow-y: auto;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

const RadioComp = styled.label<{ isFocus: boolean }>`
  font-size: 0.8rem;
  letter-spacing: -0.2px;
  width: 100px;
  height: 40px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.isFocus ? props.theme.pointColor : props.theme.transparentColor};
  color: ${({ theme }) => theme.background};
  transition: ${({ theme }) => theme.transitionOption};
  border-radius: 3px;
  font-weight: 600;

  :hover {
    cursor: pointer;
  }
`;
