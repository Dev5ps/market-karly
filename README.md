# Vanilla Script - Market karly

❤️ 오조의 마법사 (5조) - 장지훈, 임철진, 정용우, 유하리, 조소린 ❤️

---

## ⭐️ 프로젝트 사용법

```
npm install

npm run all


<!-- 정상 작동 안될 시 아래와 같이 설치해주세요 -->

npm install -D live-server

npm install -D json-server

npm install sass

npm install -D npm-run-all
```

---

## [👉🏻 Wiki Home](https://github.com/Dev5ps/market-karly/wiki)

---

## [👉🏻 프로젝트 발표 자료](https://docs.google.com/presentation/d/13eXj9ZFejSSjgW5m5k-wk28RsCuU6WVdq-wcgisAU-o/edit#slide=id.p)

---

## 📓 프로젝트간 사용한 기술

<img src="https://images.velog.io/images/vvsogi/post/0e2059e7-0dcb-4433-8e8a-83be6e9b1ba2/html.webp" width="220" height="150"/>
<img src="https://velog.velcdn.com/images/ahn-sujin/post/97b66d26-1525-4764-bc97-f330033841d9/image.png" width="280" height="150"/>
<img src="https://res.cloudinary.com/devdevil/image/upload/v1606462633/illunex_blog/2020-11-27-thumb.jpg" width="200" height="150"/>
<img src="https://images.velog.io/images/leehaeun0/post/524ca7a7-cac1-4753-9577-132705a27f20/git%20(1).png" width="250" height="150"/>
<img src="https://blog.kakaocdn.net/dn/cwfjTP/btraGHcNx6d/EhZulPwWdKIanh1zFikY00/img.png" width="280" height="150"/>
<img src="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6.fit_scale.size_760x427.v1569479844.jpg" width="280" height="150"/>
<img src="https://play-lh.googleusercontent.com/3zprDaMF45riHFTe2Bx7e9xYJbddnMD46xLc_TiH1UXeeF4WIZeP5d6NXH4Sr3kehfC1" width="160" height="150"/>

---

## 📑 프로젝트 목표

- Vanilla 프로젝트 요구사항에 맞게 작업
- 멋쟁이 사자처럼 프론트엔드 과정에서 학습한 HTML5, CSS3, Sass, Javascript 에 관한 지식들을 활용하여 프로젝트를 진행
- 팀원들과 정해놓은 컨벤션(코드 컨벤션, 커밋 컨벤션 등)을 지키며 작업
- 웹표준에 적합한 코드를 활용하여 웹페이지를 구현
- 웹접근성을 고려하여 누구나 사용가능한 웹페이지 구현을 위해 노력
- js 수업간에 만들어본 라이브러리를 적극적으로 활용
- 완성보다는 과정에 중요도를 주고 경험을 쌓기
- Sass를 사용하여 협업의 편의성 증가 및 성능에도 신경쓰기
- 이미지 파일 최적화 및 스프라이트 이미지를 활용하여 성능 올리기

---

## 📑 페이지별 주요 기능

- cart : 해당 상품의 장바구니 버튼 클릭 시, 로컬 스토리지에 set하고, 이를 장바구니 페이지에서 볼 수 있다.
- login : 로그인 시, ajax 통신을 통해 회원 정보가 있는지 확인하고 로컬 스토리지에 로그인을 한 회원의 unique id를 set하고 로그인 성공(main으로 리디렉션) 후 로그인 된 회원 이름을 보여준다.
- main : 메인 페이지 내에서의 배너와 상품 리스트 렌더링과 스와이프 기능, 최근 본 상품을 로컬 스토리지에 set하고 스와이프 기능 및 스크롤 기능이 가능한 창을 보여준다.
- popup : 상품 상세 페이지 내에서의 상품 후기 작성 버튼 클릭 시, 팝업 창으로 보여준다.
- product-detail : 상세 페이지에서 수량 조절 기능, 수량 조절에 따른 총 합 계산, 찜하기, 알림 아이콘 누를 시 알림 창 기능 추가
- product-list : 상품 리스트 페이지에서 네비게이션 드롭 다운 기능과 ajax 통신을 통해 상품 리스트를 렌더링한다.
- register : 회원가입 시, 회원이 입력한 회원정보를 통해 정규표현식을 활용한 유효성 검사 통과시, ajax 통신을 통해 회원 정보를 생성한다. (main으로 리디렉션)
