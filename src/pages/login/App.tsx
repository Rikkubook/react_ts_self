import { useState, useEffect } from "react";
import Header from "@/components/Header";
import InputGroup from "@/components/Form/InputGroup";
import InputCheckbox from "@/components/Form/InputCheckbox";
import Button from "@/components/Form/Button";

import registerBgc from "@/assets/img/pc/register.png";
import lineBgc_pc from "@/assets/img/pc/line3.png";
import lineBgc_mb from "@/assets/img/mb/line.png";

function App() {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    checkPassword: "",
    name: "",
    phone: "",
    birthday: "",
  });

  function onInputChange(key: string, value: string | boolean): void {
    console.log("onInputChange", key, value);
    setRegister({ ...register, [key]: value });
  }

  useEffect(() => {
    console.log(register);
  }, [register]);

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
                  <InputGroup
                    label="電子信箱"
                    type="text"
                    id="email"
                    placeholder="hello@exsample.com"
                    onInputChange={onInputChange}
                  />
                </div>

                <div className="form-group">
                  <InputGroup
                    label="密碼"
                    type="password"
                    id="password"
                    placeholder="請輸入密碼"
                    onInputChange={onInputChange}
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
              <Button label="會員登入" />
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
