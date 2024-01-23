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

import { years, months, dates } from "@/composable/form/day";
import { cities, getTown } from "@/composable/form/cityTown";
import { City, Area } from "@/typescript/types/cityTown";

import { isMobile } from "@/composable/public";
import { postAxios } from "@/composable/api";
import {
  checkEmail,
  checkPassword,
  checkDoubleCheck,
  checkRequired,
  checkCheckbox,
} from "@/composable/verify";

function App() {
  const [step, setStep] = useState(1);
  const steps = ["輸入信箱及密碼", "填寫基本資料"];

  // 表單一
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
    agree: false,
  });

  const [errorCheck, setErrorCheck] = useState({
    email: false,
    password: false,
    checkPassword: false,
    name: false,
    phone: false,
    detail: false,
    agree: false,
  });

  function onInputChange(key: string, value: string | boolean): void {
    console.log("onInputChange", key, value);
    setRegister({ ...register, [key]: value });
  }

  function onButtonClick(): void {
    const emailError = checkEmail(register.email);
    const passwordError = checkPassword(register.password);
    const checkPasswordError = checkDoubleCheck(
      register.password,
      register.checkPassword,
    );

    setErrorCheck({
      ...errorCheck,
      email: emailError,
      password: passwordError,
      checkPassword: checkPasswordError,
    });
    if (!emailError && !passwordError && !checkPasswordError) {
      // 所有字段验证通过，可以进行下一步操作
      setStep(2);
    }
  }

  // 表單二
  function onChangeBirthday(
    id: string,
    event: ChangeEvent<HTMLSelectElement>,
  ): void {
    const birthdayArray = register.birthday.split("/");
    let changeIndex = 0;

    if (id === "year") {
      changeIndex = 0;
    } else if (id === "month") {
      changeIndex = 1;
    } else {
      changeIndex = 2;
    }
    birthdayArray[changeIndex] = event.target.value;
    const changeData = birthdayArray.join("/");
    setRegister({ ...register, ["birthday"]: changeData });
  }

  const [countries, setCountries] = useState<Area[] | undefined>([]);

  function onChangeAddress(
    id: string,
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
  ): void {
    if (id === "city") {
      const findCity = getTown(event.target.value);
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

  function postRegister() {
    const nameError = checkRequired(register.name);
    const phoneError = checkRequired(register.phone);
    const detailError = checkRequired(register.address.detail);
    const checkCheckboxError = checkCheckbox(register.agree);

    setErrorCheck({
      ...errorCheck,
      name: nameError,
      phone: phoneError,
      detail: detailError,
      agree: checkCheckboxError,
    });
    if (!nameError && !phoneError && !detailError && !checkCheckboxError) {
      // 所有字段验证通过，可以进行下一步操作
      postAxios("/user/signup", register)
        .then(() => {
          console.log("註冊成功");
          window.location.href = "/login";
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  }

  useEffect(() => {
    const findCity = cityCounty.find(
      (city: City) => city.CityName === "高雄市",
    );
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
                      isError={errorCheck.email}
                      errorMsg="信箱格式不合"
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
                      isError={errorCheck.password}
                      errorMsg="密碼不可小於8位，且須數字英文混雜"
                    />
                  </div>
                  <div className="form-group">
                    <InputGroup
                      label="確認密碼"
                      type="password"
                      id="checkPassword"
                      placeholder="請輸入確認密碼"
                      onInputChange={onInputChange}
                      isError={errorCheck.checkPassword}
                      currentStep={1}
                      errorMsg="密碼不相同"
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
                      isError={errorCheck.name}
                      errorMsg="此為必填"
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
                      isError={errorCheck.phone}
                      errorMsg="此為必填"
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
                      className={`form-input ${errorCheck.detail && "form-input-error"}`}
                      type="text"
                      id="address"
                      placeholder="請輸入詳細地址"
                      autoComplete="new-password"
                      onChange={(e) => onChangeAddress("address", e)}
                    />
                    {errorCheck.detail && (
                      <p className="form-error">此為必填</p>
                    )}
                  </div>
                  <div className="form-group">
                    <InputCheckbox
                      check={false}
                      label="我已閱讀並同意本網站個資使用規範"
                      id="agree"
                      onInputChange={onInputChange}
                      isError={errorCheck.agree}
                      errorMsg="必須勾選"
                    />
                  </div>
                </div>
                <Button label="完成註冊" onButtonClick={postRegister} />
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
