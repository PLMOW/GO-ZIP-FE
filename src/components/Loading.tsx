import styled from 'styled-components';
import LoadingImg from 'assets/img/loading.gif';

const Loading = () => {
  return (
    <Wrapper>
      <Img src={LoadingImg} />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 341px);
`;

const Img = styled.img`
  width: 450px;
`;
