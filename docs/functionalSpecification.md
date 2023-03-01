# 기능 명세서

### !HotFix

- [x] Image Component 시간 지나야 뜸.
  - [x] new Image를 이용해 JS 동적 CSR preLoading
    - [x] PromiseAll을 이용한 preLoad
    - [x] forEach를 이용한 preLoad => 채택
  - [x] public를 이용한 CSS content preLoading
    - [x] 각 솔루션 효율성 비교 및 실험

### ToDo

- [x] 요청할때 헤더에 토큰 넣기 / 토큰 받아서 쿠키 저장
- [x] 로그아웃 구현
- [x] 쿠키값에 따른 조건부 렌더링
- [x] 쿠키값에 따른 status field 선언
- [x] url로 강제접근할 경우 토큰값 확인해서 예외처리하기.
- [x] 시/군/구 데이터 노가다 & Constant 선언
- [x] 등록 페이지 구현
  - [x] login여부에 따른 렌더링
- [x] 검색 페이지 구현
  - [x] 검색 창에서 query 담아서 보내주기(API 명세서)
  - [x] 받아온 데이터 뿌려주기
- [ ] detail 페이지 구현

  - [ ] 수정 기능 구현
  - [ ] delete 기능 구현

- [ ] Carousel useEffect 수정
- [ ] Carousel 텍스트 작성
- [ ] Hash Scroll 페이지 채우기
- [ ] Nav 간소화(SignIn 빼기)
- [x] Nav 색상 변경 및 가시성 올리기

### products

- [ ] 결과물에 Product 컴포넌트에 동적 라우팅 할당
- [ ] 검색결과 없음 svg로 변경
- [ ] media-query 적용

### Home

- [x] mainTitleImg 컴포넌트 구현
  - [x] 메인 Title 페이지 carousel(GSAP) 구현
    - [x] background Img Theme에 따른 이미지 overlay
    - [x] carousel에 들어가는 것, img가 아닌 컴포넌트로 구현(carouselComponent)
    - [x] carouselComponent
      - [x] Carousel 컴포넌트 Text 컴포넌트 추가
      - [x] GSAP을 이용한 캐러셀 로직 구현
      - [x] setTimeOut infinity Animation 구현
- [x] linkNav 추가
  - [x] 기능 추가 후 overflow-y: hidden;
- [ ] Product 검색 페이지 생성

### Nav

- [x] Nav Router에 따른 border 이동
- [x] Scroll에 따른 Nav 색상(Transparent => color / background) 변경
- [x] themeToggle 컴포넌트 위치 변경 고려하기
- [x] nav 이동 간, unmount되는 Animate 핸들링 (Background.tsx motion 추가)

### Refactor

- 상시 소프트 코드로 변경

- [x] Nav 리팩터링
  - [x] Home에 Scroll Interative 작성되어있는 코드들 redux로 변수 선언 후, 관리. (추후 DB에서 관리하면 받아서 렌더링 가능토록)
    - [x] 소프트 코드화
    - [x] 함수 분리. 가능하면 다른 컴포넌트에서 재사용이 가능토록 customHook화

---

## 후순위

### Interative & Global

- [ ] 디바이스별 media-query 작업

### 기타

- [ ] SEO 작업
- [ ] SWR 작업
- [ ] README.md 작성
