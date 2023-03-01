import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import img1 from 'assets/img/i1.webp';
import img2 from 'assets/img/i2.webp';
import img3 from 'assets/img/i3.webp';
import img4 from 'assets/img/i4.webp';

type Title = string;

interface imgsState {
  src: string;
  mainTitle: Title;
  subTitle: Title;
}

interface carouselState {
  index: number;
  imgs: imgsState[];
  intervalRef: NodeJS.Timer | any;
}

const initialState: carouselState = {
  index: 0,
  imgs: [
    { src: img1, mainTitle: 'mainTitle1', subTitle: 'SubTitle1' },
    { src: img2, mainTitle: 'mainTitle2', subTitle: 'SubTitle2' },
    { src: img3, mainTitle: 'mainTitle3', subTitle: 'SubTitle3' },
    { src: img4, mainTitle: 'mainTitle4', subTitle: 'SubTitle4' },
  ],
  intervalRef: null,
};

const carouselSlicer = createSlice({
  name: 'carouselSlicer',
  initialState,
  reducers: {
    next: (state) => {
      state.index = (state.index + 1) % state.imgs.length;
    },
    prev: (state) => {
      const isFirstImg = !state.index;
      isFirstImg
        ? (state.index = state.imgs.length - 1)
        : (state.index = state.index - 1);
    },
    setIntervalRef: (state, action: PayloadAction<NodeJS.Timer>) => {
      state.intervalRef = action.payload;
    },
  },
});

export default carouselSlicer.reducer;
export const { next, prev, setIntervalRef } = carouselSlicer.actions;
