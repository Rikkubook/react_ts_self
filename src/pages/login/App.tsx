import { useState } from "react";
import Header from "@/components/Header";
import StepsList from "@/components/StepsList";

import registerBgc from "@/assets/img/pc/register.png";
import lineBgc_pc from "@/assets/img/pc/line3.png";
import lineBgc_mb from "@/assets/img/mb/line.png";

function App() {
  const [step, setStep] = useState(1);
  const [register, setRegister] = useState({
    email: "",
    password: "",
    checkPassword: "",
    name: "",
    phone: "",
    birthday: "",
  });

  function changeStep(order: number): void {
    setStep(order);
  }

  const steps = ["輸入信箱及密碼", "填寫基本資料"];

  const years = Array.from(
    { length: 2024 - 1924 + 1 },
    (_, index) => 2024 - index,
  );

  const months = Array.from({ length: 12 }, (_, index) => 1 + index);
  const month = 1;
  const year = 12;

  const buildDay = (month: number, year: number): number => {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
        break;
      case 2:
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
          return 29;
        } else {
          return 28;
        }
        break;
      default:
        return 30;
        break;
    }
  };
  const dateLength = buildDay(month, year);

  const dates = Array.from({ length: dateLength }, (_, index) => 1 + index);

  const myDate = new Date("2023/1/19");
  const unixTimestamp = Math.floor(myDate.getTime() / 1000);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  console.log(isMobile);

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 bg-black-120 md:grid-cols-2">
        <div className="col-span-1 hidden md:block">
          <img
            className="h-full w-full object-cover"
            src={registerBgc}
            alt="註冊背景圖"
          />
        </div>
        <div className="relative col-span-1 p-6 md:p-10">
          <img
            className="absolute -left-6 top-5 w-[calc(100%_+_48px)] max-w-max md:left-0 md:top-auto md:w-full"
            src={isMobile ? lineBgc_mb : lineBgc_pc}
            alt="步驟背景圖"
          />
          <div className="mt-24 md:mt-8">
            <div className="mb-10">
              <span className="relative z-10 mb-2 text-primary-100">
                享樂酒店，誠摯歡迎
              </span>
              <h1 className="relative z-10 text-white">立即開始旅程</h1>
            </div>

            <form className="" autoComplete="nope">
              {/* 表單 */}
              <div className="mb-10 space-y-4">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    電子信箱
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="email"
                    placeholder="hello@exsample.com"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="password">
                    密碼
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    id="password"
                    defaultValue="請輸入密碼"
                    autoComplete="new-password"
                  />
                </div>
                <div className="form-group flex-row items-center justify-between">
                  <label className="form-label mb-0" htmlFor="agree">
                    <input
                      className="form-checkbox"
                      type="checkbox"
                      id="agree"
                    />
                    記住帳號
                  </label>
                  <button className="link" type="button">
                    忘記密碼?
                  </button>
                </div>
              </div>
              <button
                className="btn mb-4"
                type="button"
                onClick={() => changeStep(2)}
              >
                會員登入
              </button>
              <p className=" text-white">
                沒有會員嗎？
                <a className="link ml-2" href="./register.html">
                  前往註冊
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
