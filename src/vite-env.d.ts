/// <reference types="vite/client" />

declare module "@/assets/img/pc/logo.png" {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  VITE_APP_ENV: string;
  VITE_ARTICLELIST: string;
  VITE_ARTICLELISTCategory: string;
  VITE_ARTICLEPAGE: string;
  VITE_BEAUTYLIST: string;
  VITE_AESTHETICS: string;
  VITE_NEWSLIST: string;
  VITE_VIDEOLIST: string;
  VITE_RECOMMEND: string;
}
