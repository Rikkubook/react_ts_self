import { useState } from "react";
import Header from "@/components/Header";
import registerBgc from "@/assets/img/pc/register.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="grid grid-cols-2 bg-black-120">
        <div className="col-span-1">
          <img
            className="h-full w-full object-cover"
            src={registerBgc}
            alt="註冊背景圖"
          />
        </div>
        <div className="col-span-1 p-10">
          <div className="mt-8">
            <div className="">
              <span className="mb-2 text-primary-100">享樂酒店，誠摯歡迎</span>
              <h1 className="text-white">立即註冊</h1>
            </div>
            {/* step */}
            <div className="relative mb-10 py-4">
              <ul className="flex justify-between">
                <li className="step ">
                  <span>1</span>
                  <p>輸入信箱及密碼</p>
                </li>
                <li className="step step--none">
                  <span>2</span>
                  <p className="text-white">填寫基本資料</p>
                </li>
              </ul>
              <span className="absolute left-1/2 top-1/2 block w-[calc(100%_-_212px)] -translate-x-1/2 border  border-solid border-black-60"></span>
            </div>
            {/* 表單 */}
            <form className="" autoComplete="nope">
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

              <button className="btn mb-4" type="button">
                下一步
              </button>
              <p className=" text-white">
                已經有會員了嗎?
                <a className="link ml-2" href="./login.html">
                  立即登入
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
