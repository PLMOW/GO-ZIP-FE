import axios from 'axios';
import styled from 'styled-components';
import { useState } from 'react';
import { memo } from 'react';
import { Cookies } from 'react-cookie';

const Test = () => {
  const testGet = async () => {
    console.log('EP :', `${process.env.REACT_APP_API_BASE_ROUTE}/api/tryget`);
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ROUTE}/api/tryget`
    );

    console.log('res : ', res);
  };

  /* IMG Upload */
  const [imgData, setImgData] = useState<any>();

  const handleUpload = (e: any) => {
    const {
      target: { files },
    } = e;

    const formData = new FormData();
    for (let i = 0; i <= files.length - 1; i++)
      formData.append('image', files[i]);

    setImgData((prev: any) => formData);
  };

  const testSendImg = async (e: React.FormEvent) => {
    e.preventDefault();
    const myFormData = imgData;
    const myData = {
      title: 'my_title',
      description: 'my_description',
      house_type: 'my_house_type',
      city: 'my_city',
      town: 'my_town',
      street: 'my_street',
    };

    const json = JSON.stringify(myData);
    const blob = new Blob([json], { type: 'application/json' });
    myFormData.append('data', blob);
    myFormData.forEach((v: any) => console.log(v));

    const cookie = new Cookies();
    const res = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_BASE_ROUTE}/api/product`,
      data: myFormData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `${cookie.get('ACCESS_TOKEN')}`,
      },
    });

    console.log(res);
  };

  return (
    <Wrapper>
      <form onSubmit={testSendImg} encType="multipart/form-data">
        <Div>이미지 올리기</Div>
        <input
          type="file"
          name="myImages"
          accept="image/png, image/gif, image/jpeg"
          multiple
          onChange={handleUpload}
        />
        <button>등록 후, 서버로 이미지 요청 보내는 버튼</button>
      </form>

      <Div>GET요청</Div>
      <button onClick={testGet}>GET/api/tryget</button>
    </Wrapper>
  );
};

export default memo(Test);

const Wrapper = styled.div`
  margin-top: 230px;
  padding: 10px;
`;

const Div = styled.div`
  margin: 50px 0 20px 0;
  border-radius: 3px;
  width: 150px;
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  padding: 10px;
`;
