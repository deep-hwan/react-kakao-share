/// <reference types="react" />
export declare const useKakaoScript: () => void;
interface KakaoShareButtonProps {
    size?: string;
    onClick?: () => void;
}
export declare const KakaoShareButton: React.FC<KakaoShareButtonProps>;
interface KakaoClipboardProps {
    title: string;
    content: string;
    image?: string;
    APIKEY: string | undefined;
}
declare global {
    interface Window {
        Kakao: any;
    }
}
export declare function kakaoClipboard({ title, content, image, APIKEY, }: KakaoClipboardProps): void;
export {};
