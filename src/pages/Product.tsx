import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cookies } from 'react-cookie';
import { useQueryClient } from 'react-query';

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    title: '',
    image: '',
    description: '',
    id: '',
  });
  const cookie = new Cookies();
  const queryClient = useQueryClient();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const result = await axios.get(
      `https://sparta-prac-lhb.shop/api/product/${id}`
    );

    setData({
      id: result.data.post_id,
      title: result.data.title,
      image: result.data.images,
      description: result.data.description,
    });
  };

  const onDeleteButtonClickHandler = async () => {
    if (!window.confirm('내용을 삭제하시겠습니까?')) return;
    await axios({
      method: 'DELETE',
      url: `${process.env.REACT_APP_API_BASE_ROUTE}/api/product/${id}`,
      headers: {
        Authorization: `${cookie.get('ACCESS_TOKEN')}`,
      },
    });

    toast.success('Deleted!', {
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    queryClient.invalidateQueries({ queryKey: 'search' });

    setTimeout(() => {
      navigate('/products');
    }, 1500);
  };

  const onEditButtonHandler = () => {
    navigate('/products/edit');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '100px',
      }}
    >
      <ToastContainer />
      <Wrap>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Title>{data.title}</Title>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <MainImg src={data.image[0]}></MainImg>
        </div>

        <SmallImgContainer>
          <SmallImg alt="?" src={data.image[0]}></SmallImg>
        </SmallImgContainer>
        <BtnWrap gap="">
          <Btn size="large">1:1 문의하기</Btn>
        </BtnWrap>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <DescWrap>
            <div
              style={{
                margin: '24px',
                fontWeight: '400',
              }}
            >
              {data.description}
            </div>
          </DescWrap>
        </div>
        <BtnWrap gap="17px">
          <Btn onClick={onEditButtonHandler} size="small">
            수정
          </Btn>
          <Btn onClick={onDeleteButtonClickHandler} size="small">
            삭제
          </Btn>
        </BtnWrap>
      </Wrap>
    </div>
  );
};

export default Product;

const Title = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: -0.2px;
`;
const Wrap = styled.div`
  width: 83%;
  height: 100%;
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SmallImgContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 1.4%;
  justify-content: flex-start;
  margin-left: 3%;
  flex-wrap: wrap;
`;

const BtnWrap = styled.div<{ gap: string | null }>`
  display: flex;
  justify-content: ${(props) => (props.gap === '17px' ? 'flex-end' : 'center')};
  margin-top: 40px;
  gap: ${(props) => props.gap};
  padding-right: ${(props) => props.gap === '17px' && '3%'};
`;

const Btn = styled.button<{ size: string }>`
  background-color: black;
  color: white;
  border: none;
  height: 40px;
  width: ${(props) => {
    if (props.size === 'large') {
      return '94%';
    }
    if (props.size === 'small') {
      return '100px';
    }
    return '50px';
  }};
  cursor: pointer;
`;

const SmallImg = styled.img`
  width: 23%;
  margin-top: 1.4%;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const MainImg = styled.img`
  min-height: 300px;
  width: 94%;
`;
const DescWrap = styled.div`
  width: 94%;
  height: 300px;
  border: 1px solid lightgray;
  margin-top: 20px;
  background-color: #ffffff;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background: gray;
  }
`;
