import { useState, useEffect } from "react";
import Header from "@/components/Header";
import InputGroup from "@/components/Form/InputGroup";
import InputCheckbox from "@/components/Form/InputCheckbox";
import Button from "@/components/Form/Button";

import registerBgc from "@/assets/img/pc/register.png";
import lineBgc_pc from "@/assets/img/pc/line3.png";
import lineBgc_mb from "@/assets/img/mb/line.png";

import { isMobile } from "../../../subPublic/ts/public";
import { postAxios } from "../../../subPublic/ts/api";
import { checkEmail, checkPassword } from "../../../subPublic/ts/verify";

function App() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [errorCheck, setErrorCheck] = useState({
    email: false,
    password: false,
  });

  function onInputChange(key: string, value: string | boolean): void {
    console.log("onInputChange", key, value);
    setLogin({ ...login, [key]: value });
  }

  function postLogin() {
    const emailError = checkEmail(login.email);
    const passwordError = checkPassword(login.password);

    setErrorCheck({
      ...errorCheck,
      email: emailError,
      password: passwordError,
    });

    if (!emailError && !passwordError) {
      postAxios("/user/login", login)
        .then(() => {
          console.log("登入成功");
          window.location.href = "/index";
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  }

  useEffect(() => {
    console.log(login);
  }, [login]);

  return (
    <>
      <Header />
      <div className="grid min-h-[calc(100vh_-_81.39px)] grid-cols-1 overflow-hidden bg-black-120 md:grid-cols-2">
        <div className="col-span-1 hidden md:block">
          <img
            className="h-full w-full object-cover"
            src={registerBgc}
            alt="註冊背景圖"
          />
        </div>
        <div className="relative col-span-1 p-6 md:p-10">
          <img
            className="absolute left-0 right-0 top-5   md:left-0 md:top-auto md:w-full"
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
                <div className="form-group flex-row items-center justify-between">
                  <InputCheckbox
                    check={false}
                    label="記住帳號"
                    id="remainder"
                    onInputChange={onInputChange}
                  />
                  <button className="link" type="button">
                    忘記密碼?
                  </button>
                </div>
              </div>
              <Button label="會員登入" onButtonClick={postLogin} />
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
