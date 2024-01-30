import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerBgc from "@/assets/img/pc/banner.png";
import BannerBgc2 from "@/assets/img/pc/room3-3.png";
import BannerBgc3 from "@/assets/img/pc/room3-4.png";
import Room1 from "@/assets/img/pc/room2-1.png";
import Room2 from "@/assets/img/pc/room3-1.png";
import Room3 from "@/assets/img/pc/room4-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import HotelCard from "@/components/HotelCard";

function App() {
  return (
    <>
      <div className="relative">
        <div className="page-banner">
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
          <div className="pointer-events-none  relative flex w-full flex-col justify-center px-3 py-10 md:flex-row md:px-20 md:py-48">
            <div className="text-center text-primary-100 md:text-left">
              <h2 className="mb-2 text-2xl md:text-10">享樂酒店</h2>
              <h3 className="mb-5 text-base md:mb-10 md:text-6">
                Enjoyment Luxury Hotel
              </h3>
              <div className="line mb-10 md:mb-0"></div>
            </div>
            <div className="banner-text">
              <div className="text-group">
                <h1 className="mb-6 text-8 text-white md:text-12">客房旅宿</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-20">
        <div className="mx-auto max-w-[1296px] px-3 pb-[168px]">
          <p className="mb-2 pt-10 text-sm md:pt-32 md:text-5">房型選擇</p>
          <h2 className="mb-10 text-8 text-primary-100 md:mb-20 md:text-12">
            各種房型，任您挑選
          </h2>
          <ul className="space-y-12">
            <li>
              <HotelCard
                images={[Room1, Room1, Room1]}
                title="尊爵雙人房"
                desc="享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。"
                content={{
                  space: "24坪",
                  bed: "1張大床",
                  people: "2-4人",
                }}
                price={10000}
              />
            </li>
            <li>
              <HotelCard
                images={[Room2, Room2, Room2]}
                title="景觀雙人房"
                desc="景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。"
                content={{
                  space: "28 坪",
                  bed: "1張大床",
                  people: "2-4人",
                }}
                price={10000}
              />
            </li>
            <li>
              <HotelCard
                images={[Room3, Room3, Room3]}
                title="豪華雅緻房"
                desc="享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。"
                content={{
                  space: "36 坪",
                  bed: "2 張大床",
                  people: "2-4人",
                }}
                price={10000}
              />
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
