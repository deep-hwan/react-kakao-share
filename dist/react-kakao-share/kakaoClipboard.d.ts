/// <reference types="react" />
export declare const useKakaoScript: () => void;
interface KakaoShareButtonProps {
    size?: string;
    onClick?: () => void;
}
export declare const KakaoShareButton: React.FC<KakaoShareButtonProps>;
interface KakaoClipboardProps {
    title: string;
    description: string;
    image?: string;
    APIKEY: string | undefined;
}
declare global {
    interface Window {
        Kakao: any;
    }
}
export declare function kakaoClipboard({ title, description, image, APIKEY, }: KakaoClipboardProps): void;
export {};
