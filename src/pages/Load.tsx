import styled from "styled-components";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Load = () => {
  const [imageFile, setImageFile] = useState("");
  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setImageFile(URL.createObjectURL(event.target.files[0]));
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(imageFile);
    setImageFile("");
  };

  const structure = ["원룸", "투룸", "아파트", "빌라", "오피스텔"];

  // const [detailAddress, setDetailAddress] = useState('');

  const [data, setData] = useState({
    title: "",
    img: "",
    house_type: "",
    description: "",
  });
  const onChangeDescHandler = (e: any) => {
    setData({
      ...data,
      description: e.target.value,
    });
  };

  const onChangeTitleHandler = (e: any) => {
    setData({
      ...data,
      title: e.target.value,
    });
  };
  // const onChangeAdressHandler = (e: any) => {
  //     setData({
  //         ...data, title: e.target.value
  //     })
  // }
  const navigate = useNavigate();

  return (
    <div
      style={{
        marginTop: "95px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px 50px",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!data.description || !data.house_type || !data.title) {
            return alert("공백이요");
          }
          setData({
            title: "",
            img: "",
            house_type: "",
            description: "",
          });
          console.log(data);
        }}
      >
        <InputWrapper>
          <Input
            value={data.title}
            onChange={onChangeTitleHandler}
            placeholder="제목을 입력해주세요"
          ></Input>
        </InputWrapper>

        <SelectWrap>
          <Select style={{ outline: "none" }}>
            <Option>서울시</Option>
          </Select>
          <Select style={{ outline: "none" }}>
            <Option>강남구</Option>
          </Select>
          <Select style={{ outline: "none" }}>
            <Option>청담동</Option>
          </Select>
        </SelectWrap>
        {/* <InputWrapper > 
                <Input value={''} onChange={onChangeAdressHandler} placeholder='상세주소'></Input> 
            </InputWrapper> */}
        <ImageContainer>
          <MainImage></MainImage>
          <SmallImgWrap>
            <SmallImgBox>
              <img alt="sample" src={imageFile} style={{ margin: "auto" }} />
            </SmallImgBox>
            <SmallImgBox></SmallImgBox>
            <SmallImgBox></SmallImgBox>
          </SmallImgWrap>
        </ImageContainer>
        {/* 이미지파일 올리기 실험 */}
        <input type="file" accept="img/*" onChange={saveFileImage}></input>
        {/* <Btn onClick={handleButtonClick} type='button'>파일 업로드</Btn> */}

        <div
          style={{
            marginTop: "20px",
            width: "100%",
            height: "60px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {structure.map((item, i) => {
            return (
              <Btn
                key={i}
                onClick={() => {
                  setData({
                    ...data,
                    house_type: item,
                  });
                }}
                type="button"
              >
                {item}
              </Btn>
            );
          })}
        </div>
        <TextArea
          placeholder="해당 방에 대한 상세정보를 입력해주세요."
          spellCheck="false"
          value={data.description}
          onChange={onChangeDescHandler}
        ></TextArea>
        <div style={{ display: "flex", margin: "20px 0", gap: "40px" }}>
          <Btn>등록하기</Btn>
          <Btn
            onClick={() => {
              navigate("/");
            }}
            type="button"
          >
            취소하기
          </Btn>
        </div>
      </form>
    </div>
  );
};

export default Load;

const Option = styled.option``;

const TextArea = styled.textarea`
  /* marginTop: '30px', width: '97%', height: '300px', padding: '20px 10px 0px', border: '1px solid lightgray' */
  margin-top: 30px;
  width: 97%;
  height: 300px;
  padding: 20px 10px 0px;
  border: 1px solid lightgray;
  outline: none;
`;

// const BtnWrap = styled.div`
//      /* backgroundColor: 'red', marginTop: '30px', width: '100%',
//             height: '60px', display: 'flex', alignItems: 'center' */
// background-color: red;
// margin-top: 30px;
// width: 100%;
// height: 60px;
// display: flex;
// align-items: center;
// `

const Btn = styled.button`
  /* style={{ width: '100px', height: '40px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }} */
  font-size: 0.8rem;
  letter-spacing: -0.2px;
  width: 100px;
  height: 40px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
`;

const MainImage = styled.div`
  /* style={{ width: '500px', height: '400px', backgroundColor: 'green' }} */
  width: 500px;
  height: 400px;
  border: 1px solid lightgray;
`;

const ImageContainer = styled.div`
  /* marginTop: '40px', display:
                'flex', gap: '10px' */

  margin-top: 40px;
  display: flex;
  gap: 10px;
`;
const SmallImgWrap = styled.div`
  /* width: '200px', height: '400px', backgroundColor: 'red', display: 'flex', justifyContent: 'center', flexDirection: 'column' */
  width: 200px;
  height: 400px;
  border: 1px solid lightgray;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const SmallImgBox = styled.div`
  /* width: '80%', height: '30%', backgroundColor: 'white', margin: '20px' */
  margin: 20px;
  width: 80%;
  height: 30%;
  border: 1px solid lightgray;
  overflow: hidden;
`;

const SelectWrap = styled.div`
  margin: 10px 0 0;
  display: flex;
  /* justify-content: center; */
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  height: 50px;
`;
const Select = styled.select`
  width: 100px;
  height: 40px;
  text-align: center;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid black;
`;

const Input = styled.input`
  width: 95%;
  height: 60%;
  outline: none;
  border: none;
  background-color: inherit;
`;

const InputWrapper = styled.div`
  border-radius: 3px;
  background-color: white;
  border: 1px solid lightgray;
  width: 70%;
  height: 35px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const MainBody = styled.div`
// position: relative;
// top: 95px;
// width:100vw;
// height: 100vh;
// `

// const Container = styled.div`
//  position   : relative;
// margin-left: 40px;
// `
