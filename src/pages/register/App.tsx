import { useState, useEffect, ChangeEvent } from "react";
import Header from "@/components/Header";
import StepsList from "@/components/StepsList";
import InputGroup from "@/components/Form/InputGroup";
import InputCheckbox from "@/components/Form/InputCheckbox";
import Button from "@/components/Form/Button";

import registerBgc from "@/assets/img/pc/register.png";
import lineBgc_pc from "@/assets/img/pc/line3.png";
import lineBgc_mb from "@/assets/img/mb/line.png";

import cityCounty from "@/assets/api/CityCount.json";

import axios from "axios";

function App() {
  const [step, setStep] = useState(1);
  const steps = ["輸入信箱及密碼", "填寫基本資料"];

  // 表單
  const [register, setRegister] = useState({
    email: "",
    password: "",
    checkPassword: "",
    name: "",
    phone: "",
    birthday: "2024/1/1",
    address: {
      zipcode: 100,
      detail: "",
    },
  });

  function onInputChange(key: string, value: string | boolean): void {
    console.log("onInputChange", key, value);
    setRegister({ ...register, [key]: value });
  }

  function onButtonClick(): void {
    setStep(2);
  }

  function onChangeBirthday(
    id: string,
    event: ChangeEvent<HTMLSelectElement>,
  ): void {
    let change: string = "";

    if (id === "year") {
      change = register.birthday.split("/")[0];
    } else if (id === "month") {
      change = register.birthday.split("/")[1];
    } else {
      change = register.birthday.split("/")[2];
    }
    const changeData = register.birthday.replace(change, event.target.value);
    setRegister({ ...register, ["birthday"]: changeData });
  }

  type Area = {
    ZipCode: string;
    AreaName: string;
    AreaEngName: string;
  };
  const [countries, setCountries] = useState<Area[] | undefined>([]);

  function onChangeAddress(
    id: string,
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
  ): void {
    if (id === "city") {
      const findCity = cityCounty.find((city) => {
        return city.CityName === event.target.value;
      });
      setCountries(findCity?.AreaList);
    } else if (id === "country") {
      setRegister({
        ...register,
        ["address"]: {
          ...register.address,
          zipcode: Number(event.target.value),
        },
      });
    } else {
      setRegister({
        ...register,
        ["address"]: {
          ...register.address,
          detail: event.target.value,
        },
      });
    }
  }

  //功能
  async function postAxios() {
    try {
      const res: unknown = await axios.post(
        "http://localhost:3005/api/v1/user/signup",
        {
          name: "Rikkubook",
          email: "Rikkubook.murphy@example.com",
          password: "123456qq",
          phone: "(663) 742-3828",
          birthday: "1982/2/4",
          address: {
            zipcode: 802,
            detail: "文山路23號",
          },
        },
      );
      console.log(res);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("Error:", err.response?.data.message);
      }
    }
  }

  // 畫面顯示用
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

  const cities = cityCounty.map((city) => city.CityName);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    const findCity = cityCounty.find((city) => city.CityName === "高雄市");
    setCountries(findCity?.AreaList);
  }, []);

  return (
    <>
      <Header />
      <div className="grid min-h-[calc(100vh_-_81.39px)] grid-cols-1 bg-black-120 md:grid-cols-2">
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
                  <div className="form-group">
                    <InputGroup
                      label="電子信箱"
                      type="text"
                      id="email"
                      placeholder="hello@exsample.com"
                      onInputChange={onInputChange}
                      currentStep={1}
                    />
                  </div>
                  <div className="form-group">
                    <InputGroup
                      label="密碼"
                      type="password"
                      id="password"
                      placeholder="請輸入密碼"
                      onInputChange={onInputChange}
                      currentStep={1}
                    />
                  </div>
                  <div className="form-group">
                    <InputGroup
                      label="確認密碼"
                      type="password"
                      id="checkPassword"
                      placeholder="請輸入確認密碼"
                      onInputChange={onInputChange}
                      currentStep={1}
                    />
                  </div>
                </div>
                <Button label="下一步" onButtonClick={onButtonClick} />
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
                    <InputGroup
                      label="姓名"
                      type="text"
                      id="name"
                      placeholder="請輸入姓名"
                      onInputChange={onInputChange}
                      currentStep={2}
                    />
                  </div>
                  <div className="form-group">
                    <InputGroup
                      label="手機號碼"
                      type="phone"
                      id="phone"
                      placeholder="請輸入手機號碼"
                      onInputChange={onInputChange}
                      currentStep={2}
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
                        onChange={(e) => onChangeBirthday("year", e)}
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
                        onChange={(e) => onChangeBirthday("month", e)}
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
                        onChange={(e) => onChangeBirthday("day", e)}
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
                        id="city"
                        defaultValue="高雄市"
                        onChange={(e) => onChangeAddress("city", e)}
                      >
                        {cities.map((city) => (
                          <option value={city} key={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                      <select
                        className="form-select"
                        name=""
                        id="country"
                        defaultValue="新興區"
                        onChange={(e) => onChangeAddress("country", e)}
                      >
                        {countries?.map((country) => (
                          <option
                            value={country.ZipCode}
                            key={country.AreaName}
                          >
                            {country.AreaName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <input
                      className="form-input"
                      type="text"
                      id="address"
                      placeholder="請輸入詳細地址"
                      autoComplete="new-password"
                      onChange={(e) => onChangeAddress("address", e)}
                    />
                  </div>
                  <div className="form-group">
                    <InputCheckbox
                      check={false}
                      label="我已閱讀並同意本網站個資使用規範"
                      id="agree"
                      onInputChange={onInputChange}
                    />
                  </div>
                </div>
                <Button label="完成註冊" />
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
