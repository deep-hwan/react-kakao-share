import React from 'react'
import { KakaoShareButton, kakaoClipboard } from './lib'
// import { KakaoShareButton, kakaoClipboard } from 'react-kakao-share'

function App() {
  const clipData = {
    title: '제목',
    content: '내용',
    APIKEY: '24370b96cc5a71343a5be80e63cd8f71',
  }
  return (
    <>
      <KakaoShareButton onClick={() => kakaoClipboard(clipData)} />
    </>
  )
}

export default App
