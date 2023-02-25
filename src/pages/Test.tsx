import axios from 'axios';

const Test = () => {
  const clickHandler = async () => {
    console.log('Send GET Method');
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ROUTE}/api/tryget`
    );
    console.log('res : ', res);
  };

  return (
    <>
      <button onClick={clickHandler}>GET</button>
    </>
  );
};

export default Test;
