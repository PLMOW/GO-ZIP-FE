import { createSlice } from '@reduxjs/toolkit';
import img1 from 'assets/img/i1.webp';
import img2 from 'assets/img/i2.webp';
import img3 from 'assets/img/i3.webp';
import img4 from 'assets/img/i4.webp';

const carouselSlicer = createSlice({
  name: 'carouselSlicer',
  initialState: {
    index: 0,
    imgs: [img1, img2, img3, img4],
  },
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
  },
});

export default carouselSlicer.reducer;
export const { next, prev } = carouselSlicer.actions;
