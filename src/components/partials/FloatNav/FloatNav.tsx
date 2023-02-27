import styled from 'styled-components';

const FloatNav = () => {
  return (
    <Wrapper>
      <Trigger href="#carousel">Home</Trigger>
      <Trigger href="#content_1">content1</Trigger>
      <Trigger href="#content_2">content2</Trigger>
      <Trigger href="#content_3">content3</Trigger>
      <Trigger href="#content_4">content4</Trigger>
      <Trigger href="#search">search</Trigger>
    </Wrapper>
  );
};

export default FloatNav;

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  //flex-direction: column;
  /* left: 20px;
  top: 100px; */
  //right: 20px;
  //top: calc(50% - 150px);
  bottom: 10%;
  margin-bottom: -60px;
  left: 5%;
  margin-left: 95px;
  gap: 10px;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.transparentBackground};
  color: ${({ theme }) => theme.color};
  border-radius: 3px;
`;

const Trigger = styled.a`
  padding: 10px;
  //border-radius: 5px;
  //background: ${({ theme }) => theme.background};
`;
