import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { HASH_ROUTE } from 'libs/client/constants/hashRoute';

const FloatNav = () => {
  const { hash: currHash } = useLocation();

  return (
    <Wrapper>
      {HASH_ROUTE.map((data) => {
        const { hash, title } = data;

        return (
          <Trigger
            key={`${hash}_${title}`}
            href={hash}
            focus={hash === currHash}
          >
            {title}
          </Trigger>
        );
      })}
    </Wrapper>
  );
};

export default FloatNav;

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  bottom: 10%;
  margin-bottom: -60px;
  left: 5%;
  margin-left: 95px;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.transparentBackground};
  color: ${({ theme }) => theme.color};
  border-radius: 3px;
`;

const Trigger = styled.a<{ focus: boolean }>`
  transition: ${({ theme }) => theme.transitionOption};
  color: ${(props) => (props.focus ? props.theme.background : null)};
  background: ${(props) => (props.focus ? props.theme.color : null)};
  border-radius: 3px;
  padding: 10px;
`;
