import Header from "@/components/Header";
import BannerBgc from "@/assets/img/pc/banner.png";
import BannerBgc2 from "@/assets/img/pc/room3-3.png";
import BannerBgc3 from "@/assets/img/pc/room3-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// import "./style.css";

function App() {
  return (
    <>
      <div className="relative">
        <div className="page">
          <Swiper
            className="mySwiper absolute bottom-0 left-0 right-0 top-0 z-0"
            spaceBetween={0}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <img className="banner" src={BannerBgc} alt="BannerBgc" />
              <div className="banner-mock"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="banner" src={BannerBgc2} alt="BannerBgc2" />
              <div className="banner-mock"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="banner" src={BannerBgc3} alt="BannerBgc3" />
              <div className="banner-mock"></div>
            </SwiperSlide>
          </Swiper>
          <Header />
          <div className="pointer-events-none  relative flex w-full flex-col justify-center px-3 py-10 md:flex-row md:px-20 md:py-48">
            <div className="text-center text-primary-100 md:text-left">
              <h2 className="mb-2 text-2xl md:text-10">享樂酒店</h2>
              <h3 className="mb-5 text-base md:mb-10 md:text-6">
                Enjoyment Luxury Hotel
              </h3>
              <div className="banner-line mb-10 md:mb-0"></div>
            </div>
            <div className="banner-text">
              <div className="text-group">
                <h1 className="mb-6 text-8 text-white md:text-12">客房旅宿</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p>房型選擇</p>
          <h2>各種房型，任您挑選</h2>
          <div className="">
            <div className=""></div>
            <div className="">
              <h3>尊爵雙人房</h3>
              <p>
                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
