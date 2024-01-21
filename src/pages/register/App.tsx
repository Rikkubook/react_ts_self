import { useState } from "react";
import Header from "@/components/Header";
import StepsList from "@/components/StepsList";
import InputGroup from "@/components/form/InputGroup";

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

  function onInputChange(key: string, value: string): void {
    setRegister({ ...register, [key]: value });
    console.log(register);
  }

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
        <div className="col-span-1 p-6 md:p-10">
          <div className="md:mt-8">
            <div className="relative">
              <span className="relative z-10 mb-2 text-primary-100">
                享樂酒店，誠摯歡迎
              </span>
              <h1 className="relative z-10 text-white">立即註冊</h1>
              <img
                className="absolute -left-6  top-5 w-[calc(100%_+_48px)] max-w-max md:-left-10 md:top-auto md:w-[calc(100%_+_80px)]"
                src={isMobile ? lineBgc_mb : lineBgc_pc}
                alt="步驟背景圖"
              />
            </div>
            {/* step */}
            <StepsList steps={steps} nowStep={step} />
            {step === 1 ? (
              <form className="" autoComplete="nope">
                {/* 表單 */}
                <div className="mb-10 space-y-4">
                  <InputGroup
                    label="電子信箱"
                    type="text"
                    id="email"
                    placeholder="hello@exsample.com"
                    onInputChange={onInputChange}
                  />
                  <InputGroup
                    label="密碼"
                    type="password"
                    id="password"
                    placeholder="請輸入密碼"
                    onInputChange={onInputChange}
                  />
                  <div className="form-group">
                    <label className="form-label" htmlFor="password">
                      確認密碼
                    </label>
                    <input
                      className="form-input"
                      type="password"
                      id="password"
                      defaultValue="請輸入確認密碼"
                      autoComplete="new-password"
                    />
                  </div>
                </div>
                <button
                  className="btn mb-4"
                  type="button"
                  onClick={() => changeStep(2)}
                >
                  下一步
                </button>
                <p className=" text-white">
                  已經有會員了嗎?
                  <a className="link ml-2" href="./login.html">
                    立即登入
                  </a>
                </p>
              </form>
            ) : (
              <form className="" autoComplete="nope">
                {/* 表單2 */}
                <div className="mb-10 space-y-4">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      姓名
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="name"
                      placeholder="請輸入姓名"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      手機號碼
                    </label>
                    <input
                      className="form-input"
                      type="phone"
                      id="phone"
                      placeholder="請輸入手機號碼"
                      autoComplete="new-password"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="birthday">
                      生日
                    </label>
                    <div className="flex space-x-2">
                      <select
                        className="form-select"
                        name=""
                        id="year"
                        defaultValue="1990年"
                      >
                        {years.map((year) => (
                          <option value={year} key={year}>
                            {year} 年
                          </option>
                        ))}
                      </select>
                      <select
                        className="form-select"
                        name=""
                        id="month"
                        defaultValue="8月"
                      >
                        {months.map((month) => (
                          <option value={month} key={month}>
                            {month} 月
                          </option>
                        ))}
                      </select>
                      <select
                        className="form-select"
                        name=""
                        id="day"
                        defaultValue="15日"
                      >
                        {dates.map((day) => (
                          <option value={day} key={day}>
                            {day} 日
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="password">
                      地址
                    </label>
                    <div className="mb-2 flex space-x-2">
                      <select
                        className="form-select"
                        name=""
                        id="year"
                        defaultValue="高雄市"
                      >
                        <option value="">高雄市</option>
                      </select>
                      <select
                        className="form-select"
                        name=""
                        id="year"
                        defaultValue="新興區"
                      >
                        <option value="">新興區</option>
                      </select>
                    </div>
                    <input
                      className="form-input"
                      type="text"
                      id="address"
                      placeholder="請輸入詳細地址"
                      autoComplete="new-password"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="agree">
                      <input
                        className="form-checkbox"
                        type="checkbox"
                        id="agree"
                      />
                      我已閱讀並同意本網站個資使用規範
                    </label>
                  </div>
                </div>
                <button className="btn mb-4" type="button">
                  完成註冊
                </button>
                <p className=" text-white">
                  已經有會員了嗎?
                  <a className="link ml-2" href="./login.html">
                    立即登入
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
