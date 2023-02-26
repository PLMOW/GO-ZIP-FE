import axios from 'axios';
import styled from 'styled-components';

const Test = () => {
  const clickHandler = async () => {
    console.log('Send GET Method');
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ROUTE}/api/tryget`
    );
    console.log('res : ', res);
  };

  return (
    <Wrapper>
      <button onClick={clickHandler}>GET</button>
    </Wrapper>
  );
};

export default Test;

const Wrapper = styled.div`
  margin-top: 230px;
  padding: 10px;
`;
