import styled from 'styled-components';

const Content_1 = () => {
  return (
    <Wrapper id="content_1">
      <div>누적 투자액</div>
      <div>
        <Point>350억</Point> 원 돌파
      </div>
    </Wrapper>
  );
};

export default Content_1;

const Point = styled.span`
  color: ${({ theme }) => theme.pointColor};
`;
const Wrapper = styled.div`
  display: flex;
  font-size: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  gap: 30px;
  font-weight: 600;
  height: 100vh;
  background: #111;
`;
