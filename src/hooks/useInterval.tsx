import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { setIntervalRef } from 'redux/modules/carousel';

const useInterval = (callback: any, time: number, intervalRef: number) => {
  const dispatch = useDispatch();

  const intervalFunc = () => {
    for (let i = intervalRef - 1; i <= intervalRef + 1; i++) clearInterval(i);
    const newInterval = setInterval(callback, time);
    dispatch(setIntervalRef(newInterval));
  };

  return intervalFunc;
};

export default useInterval;
