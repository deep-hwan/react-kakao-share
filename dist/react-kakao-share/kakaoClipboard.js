var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
export var useKakaoScript = function () {
    useEffect(function () {
        var script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.async = true;
        document.body.appendChild(script);
        return function () {
            document.body.removeChild(script);
        };
    }, []);
};
export var KakaoShareButton = function (_a) {
    var size = _a.size, onClick = _a.onClick;
    useKakaoScript();
    return (_jsx("button", __assign({ type: "button", style: {
            width: size ? size : "36px",
            height: size ? size : "36px",
            minWidth: size ? size : "36px",
            minHeight: size ? size : "36px",
            border: "none",
            padding: 0,
            backgroundColor: "transparent",
            cursor: "pointer",
        }, onClick: onClick }, { children: _jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: size ? size : "36px", height: size ? size : "36px", viewBox: "0 0 22 22" }, { children: _jsxs("g", __assign({ id: "kakao-symbol", transform: "translate(-1021.291 -683.291)" }, { children: [_jsx("circle", { id: "\uD0C0\uC6D0_703", "data-name": "\uD0C0\uC6D0 703", cx: "11", cy: "11", r: "11", transform: "translate(1021.291 683.291)", fill: "#fee500" }), _jsx("path", { id: "path696", d: "M205.692,143.579c-3.142,0-5.69,2.012-5.69,4.494a4.381,4.381,0,0,0,2.64,3.794l-.536,2a.165.165,0,0,0,.041.171.157.157,0,0,0,.215.01l2.305-1.557a7.241,7.241,0,0,0,1.025.075c3.142,0,5.69-2.011,5.69-4.494s-2.548-4.494-5.69-4.494", transform: "translate(826.592 545.578)", fill: "#3c1e1e" })] })) })) })));
};
export function kakaoClipboard(_a) {
    var title = _a.title, content = _a.content, image = _a.image, APIKEY = _a.APIKEY;
    var KAKAOAPI = APIKEY;
    if (window.Kakao) {
        var kakao = window.Kakao;
        if (!kakao.isInitialized()) {
            kakao.init(KAKAOAPI);
        }
        kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: title,
                description: content,
                imageUrl: image
                    ? image
                    : "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/1448b2bc-67cb-4046-95c9-e3814a4e7e00/public",
                link: {
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href,
                },
            },
            buttons: [
                {
                    title: "바로가기",
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
            ],
        });
    }
}
