import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Form/Button";
import BannerBgc from "@/assets/img/pc/banner.png";
import BannerBgc2 from "@/assets/img/pc/room3-3.png";
import BannerBgc3 from "@/assets/img/pc/room3-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

function App() {
  const specialButton = () => {
    return (
      <>
        立即訂房
        <div className="ml-4 w-28 border-b border-black-100 transition-colors group-hover:border-white"></div>
      </>
    );
  };
  return (
    <>
      <div className="relative">
        <div className="home">
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
          <div className="pointer-events-none  relative flex w-full flex-col justify-between px-3 py-10 md:flex-row md:px-20 md:py-48">
            <div className="text-center text-primary-100 md:text-left">
              <h2 className="mb-2 text-2xl md:text-8 lg:text-10">享樂酒店</h2>
              <h3 className="md:text-4 mb-5 text-base leading-10 md:mb-10 lg:text-8 ">
                Enjoyment Luxury Hotel
              </h3>
              <div className="banner-line mb-10 md:mb-0"></div>
            </div>
            <div className="banner-text">
              <div className="text-group">
                <h1 className="md:text-22 lg:text-24 mb-6 text-12 text-white">
                  高雄
                  <br />
                  豪華住宿之選
                </h1>
                <p className="mb-14 text-base leading-relaxed text-white md:text-6 lg:text-8	">
                  我們致力於為您提供無與倫比的奢華體驗與優質服務
                </p>
                <Button addClass="!text-left" label={specialButton()} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
