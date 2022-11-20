const NEXT_PUBLIC_KAKAO_APP_JS_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY || '';
const KAKAO_APP_JS_KEY = process.env.KAKAO_APP_JS_KEY || '';
export const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;
