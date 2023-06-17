import { useEffect } from 'react'

export const useKakaoScript = (): void => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}

interface KakaoShareButtonProps {
  size?: string
  onClick?: () => void
}

export const KakaoShareButton: React.FC<KakaoShareButtonProps> = ({
  size,
  onClick,
}) => {
  useKakaoScript()

  return (
    <button
      type="button"
      style={{
        width: size ? size : '36px',
        height: size ? size : '36px',
        minWidth: size ? size : '36px',
        minHeight: size ? size : '36px',
        border: 'none',
        padding: 0,
        backgroundColor: 'transparent',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size ? size : '36px'}
        height={size ? size : '36px'}
        viewBox="0 0 22 22"
      >
        <g id="kakao-symbol" transform="translate(-1021.291 -683.291)">
          <circle
            id="타원_703"
            data-name="타원 703"
            cx="11"
            cy="11"
            r="11"
            transform="translate(1021.291 683.291)"
            fill="#fee500"
          />
          <path
            id="path696"
            d="M205.692,143.579c-3.142,0-5.69,2.012-5.69,4.494a4.381,4.381,0,0,0,2.64,3.794l-.536,2a.165.165,0,0,0,.041.171.157.157,0,0,0,.215.01l2.305-1.557a7.241,7.241,0,0,0,1.025.075c3.142,0,5.69-2.011,5.69-4.494s-2.548-4.494-5.69-4.494"
            transform="translate(826.592 545.578)"
            fill="#3c1e1e"
          />
        </g>
      </svg>
    </button>
  )
}

//
//// click
interface KakaoClipboardProps {
  title: string
  content: string
  image?: string
  APIKEY: string | undefined
}

declare global {
  interface Window {
    Kakao: any // 또는 필요한 타입으로 변경하세요
  }
}

export function kakaoClipboard({
  title,
  content,
  image,
  APIKEY,
}: KakaoClipboardProps): void {
  const KAKAOAPI: string | undefined = APIKEY

  if (window.Kakao) {
    const kakao = window.Kakao
    if (!kakao.isInitialized()) {
      kakao.init(KAKAOAPI)
    }

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: content,
        imageUrl: image
          ? image
          : 'https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/1448b2bc-67cb-4046-95c9-e3814a4e7e00/public',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '바로가기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    })
  }
}
