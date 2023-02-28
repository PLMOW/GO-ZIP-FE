import styled from 'styled-components';
import { useState, useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import useRouteSpy from 'hooks/useRouteSpy';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import ADDRESS from 'libs/client/constants/address';
import { ToastContainer } from 'react-toastify';
import useToast from 'hooks/useToast';

interface dataForm {
  title: string;
  description: string;
  house_type: string;
  city: string;
  town: string;
}

const Load = () => {
  const route = useLocation();
  const navigate = useNavigate();
  const routeSpy = useRouteSpy(route.pathname, '/');
  const structure = ['원룸', '투룸', '아파트', '빌라', '오피스텔'];
  const [imgData, setImgData] = useState<any>();
  const [data, setData] = useState<dataForm>({
    title: '',
    description: '',
    house_type: '',
    city: '',
    town: '',
  });
  const [myToast, sendToast] = useToast();
  const [imgSrc, setImgSrc] = useState<string | ArrayBuffer | null>('');

  useEffect(() => {
    routeSpy();
  }, []);

  const onChangeDescHandler = (e: any) => {
    setData({
      ...data,
      description: e.target.value,
    });
  };

  const onChangeTitleHandler = (e: any) => {
    setData({
      ...data,
      title: e.target.value,
    });
  };

  const handleUpload = (e: any) => {
    /* Add */
    const {
      target: { files },
    } = e;
    const formData = new FormData();
    for (let i = 0; i <= files.length - 1; i++)
      formData.append('image', files[i]);

    setImgData((prev: any) => formData);

    /* Priview */
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      const resultImage = reader.result;
      setImgSrc(resultImage);
    };
  };

  const uploadProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imgData) return sendToast.image();
    const { title, description, house_type, city, town } = data;
    if (!data.description) return sendToast.description();
    if (!data.house_type) return sendToast.house_type();
    if (!data.title) return sendToast.title();
    if (!data.city) return sendToast.city();
    if (!data.town) return sendToast.town();

    const myFormData = imgData;
    const myData = { title, description, house_type, city, town };
    const json = JSON.stringify(myData);
    const blob = new Blob([json], { type: 'application/json' });
    myFormData.append('data', blob);

    const cookie = new Cookies();
    await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_BASE_ROUTE}/api/product`,
      data: myFormData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `${cookie.get('ACCESS_TOKEN')}`,
      },
    });

    sendToast.fulfilled();
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  const cityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({
      ...data,
      city: e.target.value === '--도 / 시--' ? '' : e.target.value,
      town: '',
    });
  };

  const townHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = e;

    setData({
      ...data,
      town: value,
    });
  };

  return (
    <Body>
      <ToastContainer position="bottom-right" theme="light" />
      <TopWrapper>
        <Title>매물 등록</Title>
        <form onSubmit={uploadProduct}>
          <InputWrapper>
            <Input
              value={data.title}
              onChange={onChangeTitleHandler}
              placeholder="제목을 입력해주세요"
            ></Input>
          </InputWrapper>

          <SelectWrap>
            <Select onChange={cityHandler} style={{ outline: 'none' }}>
              <option>--도 / 시--</option>
              {Object.keys(ADDRESS).map((v) => (
                <Option key={v}>{v}</Option>
              ))}
            </Select>
            <Select onChange={townHandler} style={{ outline: 'none' }}>
              <option>--구--</option>
              {ADDRESS[data.city] &&
                Object.values(ADDRESS[data.city]).map((v) => (
                  <Option key={v}>{v}</Option>
                ))}
            </Select>
          </SelectWrap>
          <ImageContainer>
            <ImageInput htmlFor="image">
              {!imgData ? (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width="100"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </Svg>
              ) : typeof imgSrc === 'string' ? (
                <Img src={imgSrc} />
              ) : null}
            </ImageInput>
            <input
              type="file"
              id="image"
              hidden
              accept="image/png, image/gif, image/jpeg"
              onChange={handleUpload}
            ></input>
          </ImageContainer>
          <div
            style={{
              marginTop: '10px',
              width: '100%',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {structure.map((item, i) => {
              return (
                <Btn
                  isFocus={item === data.house_type}
                  key={`${item}_${i}`}
                  onClick={() => {
                    setData({
                      ...data,
                      house_type: item,
                    });
                  }}
                  type="button"
                >
                  {item}
                </Btn>
              );
            })}
          </div>
          <TextArea
            placeholder="해당 방에 대한 상세정보를 입력해주세요."
            spellCheck="false"
            value={data.description}
            onChange={onChangeDescHandler}
          ></TextArea>
          <div style={{ display: 'flex', margin: '20px 0', gap: '40px' }}>
            <LastBtn>등록하기</LastBtn>
            <LastBtn
              onClick={() => {
                navigate('/');
              }}
              type="button"
            >
              취소하기
            </LastBtn>
          </div>
        </form>
      </TopWrapper>
    </Body>
  );
};

export default memo(Load);

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const Option = styled.option`
  color: black;
  margin-top: 75px;
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  padding: 0px 50px;
  overflow: auto;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
`;

const TopWrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.background};
  padding: 100px 0 40px 0;
  border-bottom: solid lightgray 1px;
  flex-direction: column;
  align-items: center;
`;

const TextArea = styled.textarea`
  margin-top: 10px;
  width: 97%;
  border-radius: 3px;
  height: 300px;
  padding: 20px 10px 0px;
  border: 1px solid lightgray;
  max-width: 557px;
  min-width: 557px;
  min-height: 200px;
  outline: none;
`;

interface BtnProps {
  isFocus?: boolean;
}

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.8px;
  margin-bottom: 15px;
  margin-top: -25px;
`;

const Btn = styled.button<BtnProps>`
  font-size: 0.8rem;
  letter-spacing: -0.2px;
  width: 100px;
  height: 40px;
  border: 1px solid lightgray;
  display: flex;
  border-radius: 3px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(props) =>
    props.isFocus ? props.theme.pointColor : props.theme.transparentColor};
  color: ${({ theme }) => theme.background};
  transition: ${({ theme }) => theme.transitionOption};
`;

const LastBtn = styled.button`
  font-size: 0.8rem;
  letter-spacing: -0.2px;
  width: 100%;
  height: 40px;
  border: 1px solid lightgray;
  display: flex;
  border-radius: 3px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(props) => props.theme.transparentColor};
  color: ${({ theme }) => theme.background};
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.pointColor};
  }
`;

/* ImageUpload */
const ImageInput = styled.label`
  overflow: hidden;
  width: 578px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  background: white;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Svg = styled.svg`
  color: lightgray;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SelectWrap = styled.div`
  margin: 10px 0 0;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  height: 50px;
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

const Input = styled.input`
  width: 95%;
  height: 60%;
  outline: none;
  border: none;
  background-color: inherit;
`;

const InputWrapper = styled.div`
  border-radius: 3px;
  background-color: white;
  border: 1px solid lightgray;
  width: 100%;
  height: 35px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
