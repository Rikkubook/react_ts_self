import Header from "@/components/Header";
import Button from "./components/Form/Button";
import BannerBgc from "@/assets/img/pc/banner.png";

// import "./style.css";

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
        <div
          style={{ backgroundImage: `url(${BannerBgc})` }}
          className="home-banner"
        >
          <div className="home-banner-mock">
            <Header />

            <div className="relative  flex w-full flex-col justify-between px-3 py-10 md:flex-row md:px-20 md:py-48">
              <div className="text-center text-primary-100 md:text-left">
                <h2 className="mb-2 text-2xl md:text-10">享樂酒店</h2>
                <h3 className="mb-5 text-base md:mb-10 md:text-6">
                  Enjoyment Luxury Hotel
                </h3>
                <div className="home-line mb-10 "></div>
              </div>
              <div className="home-banner-text">
                <div className="home-text-group">
                  <h1 className="mb-6 text-12 text-white md:text-25">
                    高雄
                    <br />
                    豪華住宿之選
                  </h1>
                  <p className="mb-14 text-base leading-relaxed text-white md:text-8	">
                    我們致力於為您提供無與倫比的奢華體驗與優質服務
                  </p>
                  <Button addClass="!text-left" label={specialButton()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
