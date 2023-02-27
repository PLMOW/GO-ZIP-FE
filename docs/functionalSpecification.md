# 기능 명세서

### !HotFix

- [x] Image Component 시간 지나야 뜸.
  - [x] new Image를 이용해 JS 동적 CSR preLoading
    - [x] PromiseAll을 이용한 preLoad
    - [x] forEach를 이용한 preLoad => 채택
  - [x] public를 이용한 CSS content preLoading
    - [x] 각 솔루션 효율성 비교 및 실험

### Home

- [x] mainTitleImg 컴포넌트 구현
  - [x] 메인 Title 페이지 carousel(GSAP) 구현
    - [x] background Img Theme에 따른 이미지 overlay
    - [x] carousel에 들어가는 것, img가 아닌 컴포넌트로 구현(carouselComponent)
    - [x] carouselComponent
      - [x] Carousel 컴포넌트 Text 컴포넌트 추가
      - [x] GSAP을 이용한 캐러셀 로직 구현
      - [x] setTimeOut infinity Animation 구현
- [ ] linkNav 추가
  - [ ] 기능 추가 후 overflow-y: hidden;
- [ ] Product 검색 페이지 생성

### Nav

- [x] Nav Router에 따른 border 이동
- [x] Scroll에 따른 Nav 색상(Transparent => color / background) 변경
- [ ] themeToggle 컴포넌트 위치 변경 고려하기
- [x] nav 이동 간, unmount되는 Animate 핸들링 (Background.tsx motion 추가)

### Refactor

- 상시 소프트 코드로 변경

---

## 후순위

### Interative & Global

- [ ] 디바이스별 media-query 작업

### 기타

- [ ] SEO 작업
- [ ] SWR 작업
- [ ] README.md 작성
