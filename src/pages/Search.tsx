import { useState } from 'react';
import styled from 'styled-components';
import address from 'libs/client/constants/address';

const Search = () => {
  const [btnNumber, setBtnNumber] = useState(0);
  const structure = ['원룸', '투룸', '아파트', '빌라', '오피스텔'];
  Object.entries(address).map(([key, item]) => {
    console.log(`key: ${key} item :${item}`);
  });
  // const address = [
  //   {
  //     city: '서울시',
  //     town: {
  //       강남구: ['대치동', '삼성동'],
  //       마포구: ['상수동', '합정동'],
  //       구로구: ['구로동'],
  //     },
  //   },
  //   {
  //     city: '대전시',
  //     town: {
  //       중구: ['용두동', '부사동'],
  //     },
  //   },
  //   {
  //     city: '대구시',
  //     town: {
  //       달서구: ['성당동', '죽전동', '신당동'],
  //     },
  //   },
  //   {
  //     city: '부산시',
  //     town: {
  //       해운대구: ['송정동'],
  //       영도구: ['남항동', '신성동'],
  //     },
  //   },
  // ];

  const [data, setData] = useState({
    city: '',
    town: '',

    house_type: '',
  });
  console.log(data);
  const foundData = Object.entries(address)
    .filter(([key, item]) => {
      if (key === data.city) {
        return item;
      }
    })
    .map((item) => {
      return item[1];
    });
  const guName = foundData[0];

  // const newArr = address.filter((item) => {
  //   if (item.city) {
  //     return item.city === data.city;
  //   }
  //   return;
  // });

  // const gu_name = newArr.map((item) => {
  //   return Object.keys(item.town);
  // });

  const onChangeTownHandler = (e: any) => {
    const { value } = e.target;

    // setData({ ...data, city: value });
    setData((data) => {
      // 중요: 값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옵니다.
      return { ...data, town: value };
    });
  };

  const onChangeCityHandler = (e: any) => {
    const { value } = e.target;

    setData({ ...data, city: value });
    setData((data) => {
      // 중요: 값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옵니다.
      return { ...data, city: value, town: '' };
    });
  };
  const addHouseTypeButtonClickHandler = (item: any) => {
    // setData({ ...data, house_type: item });
    setData((data) => {
      return { ...data, house_type: item };
    });
  };

  return (
    <Body>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
        }}
      >
        <div
          style={{
            overflow: 'hidden',
            width: '100%',
            height: '60vh',
            border: '1px solid lightgray',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: '1.4rem',
              fontWeight: '500',
              letterSpacing: '-.8px',
              marginTop: '50px',
            }}
          >
            고승유의 집구하기
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center ',
              width: '100%',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            <SelectWrap>
              <Select
                onChange={onChangeCityHandler}
                style={{ outline: 'none' }}
              >
                <option>--시선택--</option>
                {Object.entries(address).map(([key]) => {
                  return <option>{key}</option>;
                })}
              </Select>

              <Select
                onChange={onChangeTownHandler}
                style={{ outline: 'none' }}
              >
                <option>--구선택--</option>
                {guName?.map((item) => {
                  return <option>{item}</option>;
                })}
              </Select>
            </SelectWrap>
          </div>
          <div style={{ display: 'flex', marginTop: '20px', gap: '20px' }}>
            {structure.map((item, i) => {
              return (
                <Btn
                  type="button"
                  key={i}
                  onClick={() => addHouseTypeButtonClickHandler(item)}
                >
                  {item}
                </Btn>
              );
            })}
          </div>
          <div style={{ marginTop: '20px' }}>
            <SearchBtn type="submit"> 검색하기</SearchBtn>
          </div>
        </div>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: '95vw',
            display: 'flex',

            flexDirection: 'row',
            flexWrap: 'wrap',

            margin: '30px 20px 0',
            // position: 'relative',
          }}
        >
          <SmallImgBox></SmallImgBox>
          <SmallImgBox></SmallImgBox>
          <SmallImgBox></SmallImgBox>
          <SmallImgBox></SmallImgBox>
          <SmallImgBox></SmallImgBox>
          <SmallImgBox></SmallImgBox>
          <SmallImgBox></SmallImgBox>
          <SmallImgBox></SmallImgBox>
          <SmallImgBox></SmallImgBox>
        </div>
      </div>
    </Body>
  );
};

export default Search;

// const Btn = styled.button`
//   /* style={{ width: '100px', height: '40px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }} */
//   font-size: 0.8rem;
//   letter-spacing: -0.2px;
//   width: 100px;
//   height: 40px;
//   border: 1px solid lightgray;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;

//   &:active {
//     opacity: 0.7;
//   }
// `;
const SearchBtn = styled.button`
  font-size: 0.8rem;
  letter-spacing: -0.2px;
  width: 230px;
  height: 40px;
  border: 1px solid;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
`;

const Btn = styled.button`
  /* style={{ width: '100px', height: '40px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }} */
  font-size: 0.8rem;
  letter-spacing: -0.2px;
  width: 100px;
  height: 40px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: inherit;
`;
const SmallImgBox = styled.div`
  position: static;
  width: 280px;
  height: 280px;
  border: 1px solid lightgray;
  margin: 20px 20px 0;
`;

const Body = styled.div`
  width: 100vw;
  height: 200vh;

  margin: 95px 0;
`;
const SelectWrap = styled.div`
  margin: 10px 0 0;
  display: flex;
  /* justify-content: center; */
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 50px;
`;
const Select = styled.select`
  width: 100px;
  height: 40px;
  text-align: center;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid black;
`;
