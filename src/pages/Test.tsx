import axios from 'axios';

const Test = () => {
  const clickHandler = async () => {
    const res = await axios.get('http://13.125.193.128:8080/api/tryget');
    console.log('res : ', res);
  };

  return (
    <>
      <button onClick={clickHandler}>GET</button>
    </>
  );
};

export default Test;
