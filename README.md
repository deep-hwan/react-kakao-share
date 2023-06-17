# <div align="center">

<div align="center" style="width: 100px;" >
<img src="https://github.com/deep-hwan/react-kakao-share/blob/main/public/kakao-img.png" style="width: 100px;" alt="Title Image">
</div>
<h1 align="center">react-kakao-share</h1>

<p align="center">
내가 작성한 게시글 또는 피드를 카카오톡에 공유하는 SDK 라이브러리입니다.
</p>
</div>

## Install

    npm install react-kakao-share
    # or
    yarn add react-kakao-share

## Install Step

### 카카오톡 공유하기의 KEY 발급받기

1. https://developers.kakao.com/ 접속
2. 내 애플리케이션 메뉴 클릭
3. 내 애플리케이션 선택 or 애플리케이션 추가
4. 앱키 에서 JavaScript 키 기억하기

---

## Simple Usage

### 전역에서 카카오 SDK 불러오기

###### 전역 레이아웃에 **카카오 SDK인 useKakaoScript를 적용**합니다.

- 예시)
  - react.js > Index.js or Index.ts
  - next.js > \_app.js or \_app.ts

```jsx
import React from 'react'
import { useKakaoScript } from 'react-kakao-share'

export default function Index() {
  useKakaoScript()

  return <>....</>
}
```

---

### 카카오톡 공유하기

###### 현재 페이지(URL)를 공유하기 위해서는 kakaoClipboard를 가져와 **제목,내용,공유 이미지,key 전달이 필요**합니다.

```jsx
import { kakaoClipboard } from 'react-kakao-share'

function App() {
  const clipData = {
    title: '제목',
    content: '내용',
    image: 'example_image.png',
    APIKEY: KAKAO_JAVASCRIPT_KEY,
  }

  return (
    <button type="button" onClick={() => kakaoClipboard(clipData)}>
      현재 페이지 공유하기
    </button>
  )
}
```

---

### 카카오톡 공유하기 > 심볼 타입 (아이콘)

###### 카카오톡 아이콘을 클릭하여 현재페이지를 공유합니다.

###### 단, 아이콘 타입의 카카오톡 공유하기 버튼을 사용할 시 카카오 SDK인 **useKakaoScript를 전역 레이아웃에 설정할 필요없습니다.**

```jsx
import { KakaoShareButton, kakaoClipboard } from 'react-kakao-share'

function App() {
  const clipData = {
    title: '제목',
    content: '내용',
    image: 'example_image.png',
    APIKEY: KAKAO_JAVASCRIPT_KEY,
  }

  return <KakaoShareButton onClick={() => kakaoClipboard(clipData)} />
}
```
