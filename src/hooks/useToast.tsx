import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TOAST = Object.freeze({
  IMAGE: '이미지를 등록해주세요!' as const,
  DESCRIPTION: '매물에 대한 설명을 등록해주세요!' as const,
  HOUSE_TYPE: '매물의 타입을 선택해주세요!' as const,
  TITLE: '제목을 등록해주세요!' as const,
  CITY: '(도/시)를 선택해주세요!' as const,
  TOWN: '(구/군)을 등록해주세요!' as const,
  FULFILLED: '매물이 등록되었습니다!' as const,
});

const useToast = () => {
  const create = (text: string) => toast(text);
  const createError = (text: string) => toast.error(text);
  const createFullfilled = (text: string) => toast.success(text);
  const err = {
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const fulfilled = {
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const sendToast: any = {
    image: () => toast.error(TOAST.IMAGE, err),
    description: () => toast.error(TOAST.DESCRIPTION, err),
    house_type: () => toast.error(TOAST.HOUSE_TYPE, err),
    title: () => toast.error(TOAST.TITLE, err),
    city: () => toast.error(TOAST.CITY, err),
    town: () => toast.error(TOAST.TOWN, err),
    fulfilled: () => toast.success(TOAST.FULFILLED, fulfilled),
  };

  return [{ create, createError, createFullfilled }, sendToast];
};

export default useToast;
