import React from "react";
import { KakaoShareButton, kakaoClipboard } from "./lib";
// import { KakaoShareButton, kakaoClipboard } from 'react-kakao-share'

function App() {
  const clipData = {
    title: "제목",
    content: "내용",
    APIKEY: "",
  };
  return (
    <div style={{ display: "flex" }}>
      <KakaoShareButton size="200px" onClick={() => kakaoClipboard(clipData)} />
    </div>
  );
}

export default App;
