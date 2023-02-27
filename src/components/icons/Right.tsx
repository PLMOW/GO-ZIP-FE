import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { next } from 'redux/modules/carousel';

const Right = () => {
  const dispatch = useDispatch();
  const nextHandler = () => dispatch(next());

  return (
    <Svg
      onClick={nextHandler}
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
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </Svg>
  );
};

export default Right;

const Svg = styled.svg`
  position: absolute;
  z-index: 1;
  right: 0px;
  top: calc(25% - 10px);
  height: 50%;
  padding: 20px;

  :hover {
    cursor: pointer;
  }
`;
