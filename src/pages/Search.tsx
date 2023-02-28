import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Search = () => {
  const structure = ['원룸', '투룸', '아파트', '빌라', '오피스텔'];

  const address = [
    {
      city: '서울시',
      town: {
        강남구: ['대치동', '삼성동'],
        마포구: ['상수동', '합정동'],
        구로구: ['구로동'],
      },
    },
    {
      city: '대전시',
      town: {
        중구: ['용두동', '부사동'],
      },
    },
    {
      city: '대구시',
      town: {
        달서구: ['성당동', '죽전동', '신당동'],
      },
    },
    {
      city: '부산시',
      town: {
        해운대구: ['송정동'],
        영도구: ['남항동', '신성동'],
      },
    },
  ];

  const [data, setData] = useState({
    city: '',
    town: '',
    street: '',
    house_type: '',
  });

  const newArr = address.filter((item) => {
    if (item.city) {
      return item.city === data.city;
    }
    return;
  });

  const gu_name = newArr.map((item) => {
    return Object.keys(item.town);
  });

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

    // setData({ ...data, city: value });
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
      <div
        style={{
          overflow: 'hidden',
          width: '94%',
          height: '40vh',
          border: '1px solid lightgray',
          padding: '60px 30px',
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
            <Select onChange={onChangeCityHandler} style={{ outline: 'none' }}>
              <option>--시선택--</option>
              {address?.map((item, i) => {
                return <option key={i}>{item.city}</option>;
              })}
            </Select>

            <Select onChange={onChangeTownHandler} style={{ outline: 'none' }}>
              <option>--구선택--</option>
              {gu_name[0]?.map((item, i) => {
                return <option key={i}>{item}</option>;
              })}
            </Select>
            <Select style={{ outline: 'none' }}>
              <option>--동선택--</option>
            </Select>
          </SelectWrap>
        </div>
        <div style={{ display: 'flex', marginTop: '20px', gap: '20px' }}>
          {structure.map((item, i) => {
            return (
              <Btn key={i} onClick={() => addHouseTypeButtonClickHandler(item)}>
                {item}
              </Btn>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',
        }}
      >
        <div
          style={{
            width: '90vw',
            display: 'flex',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '20px',
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
  width: 200px;
  height: 200px;
  border: 1px solid lightgray;
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
