import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { prev } from 'redux/modules/carousel';

const Left = () => {
  const dispatch = useDispatch();
  const prevHandler = () => dispatch(prev());

  return (
    <Svg
      onClick={prevHandler}
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </Svg>
  );
};

export default Left;

const Svg = styled.svg`
  z-index: 1;
  position: absolute;
  left: 0px;
  top: calc(25% - 10px);
  height: 50%;
  padding: 20px;

  :hover {
    cursor: pointer;
  }
`;
