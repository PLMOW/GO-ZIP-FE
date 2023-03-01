import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Product = () => {
  const location = useLocation();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '100px',
      }}
    >
      <Wrap>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Title>제목 들어가는 부분입니다.</Title>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <MainImg
            src={
              'https://i.pinimg.com/564x/e1/08/e9/e108e911d5b3dbad8891ff4e0b7e24de.jpg'
            }
          ></MainImg>
        </div>

        <SmallImgContainer>
          <SmallImg src="https://i.pinimg.com/564x/55/05/80/55058061b8e40569447a4d92be8a9bc5.jpg"></SmallImg>
          <SmallImg src="https://i.pinimg.com/564x/e1/08/e9/e108e911d5b3dbad8891ff4e0b7e24de.jpg"></SmallImg>
          <SmallImg src="https://i.pinimg.com/564x/53/67/eb/5367ebc86460ca0bf3a2df188a596808.jpg"></SmallImg>
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
              💛교통좋은 가성비 최고 풀옵션 원룸!!💛<br></br> 🙆엘리베이터
              있습니다! <br></br>
              🌈풀옵션(냉장고,세탁기,에어컨,인덕션,전자레인지, 붙박이장)
              <br></br>🌈대중교통 이용하시는 분들은 역으로 픽업 가능! <br></br>
              🌈24시간 시간 부담 없이 상담 전화,문자 가능! <br></br>😊철저한
              사전조사와 권리분석을 통해 보다 안전한 거래 약속드립니다!
              <br></br>😊허위매물은 취급하지 않습니다. <br></br>
              😊계약과정,계약완료 사후관리에도 책임감으로 끝까지 함께해
              드립니다. <br></br>😊꼼꼼하고 전문적인 매물검색과 안내로
              보답드리겠습니다. <br></br>😊계약시에 등기부등본, 건축물대장,
              공제증서 등 각종 서류등을 확인 시켜 드리고 있습니다. <br></br>※
              4억원 손해 배상 책임 보증 보험 가입 (한국 공인중개사 협회){' '}
              <br></br>※ ✅본 호실의 면적은 임대인이 안내한 면적임, 사진은
              샘플룸 일때 찍은 사진임<br></br>
              💛교통좋은 가성비 최고 풀옵션 원룸!!💛<br></br> 🙆엘리베이터
              있습니다! <br></br>
              🌈풀옵션(냉장고,세탁기,에어컨,인덕션,전자레인지, 붙박이장)
              <br></br>🌈대중교통 이용하시는 분들은 역으로 픽업 가능! <br></br>
              🌈24시간 시간 부담 없이 상담 전화,문자 가능! <br></br>😊철저한
              사전조사와 권리분석을 통해 보다 안전한 거래 약속드립니다!
              <br></br>😊허위매물은 취급하지 않습니다. <br></br>
              😊계약과정,계약완료 사후관리에도 책임감으로 끝까지 함께해
              드립니다. <br></br>😊꼼꼼하고 전문적인 매물검색과 안내로
              보답드리겠습니다. <br></br>😊계약시에 등기부등본, 건축물대장,
              공제증서 등 각종 서류등을 확인 시켜 드리고 있습니다. <br></br>※
              4억원 손해 배상 책임 보증 보험 가입 (한국 공인중개사 협회){' '}
              <br></br>※ ✅본 호실의 면적은 임대인이 안내한 면적임, 사진은
              샘플룸 일때 찍은 사진임<br></br>
            </div>
          </DescWrap>
        </div>
        <BtnWrap gap="17px">
          <Btn size="small">수정</Btn>
          <Btn size="small">삭제</Btn>
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
  justify-content: center;
  margin-top: 40px;
  gap: ${(props) => props.gap};
`;

const Btn = styled.button<{ size: string }>`
  background-color: black;
  color: white;
  border: none;
  height: 40px;
  width: ${(props) => {
    if (props.size === 'large') {
      return '300px';
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
  border: 1px solid lightgray;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const MainImg = styled.img`
  width: 94%;
  border: 1px solid lightgray;
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
