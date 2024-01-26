import logo from "@/assets/img/pc/logo.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useMobileStatus } from "../../subPublic/ts/usePublic";

function Header() {
  const isMobile = useMobileStatus();
  const location = useLocation();
  const pathname = location.pathname;
  const [openMenu, setOpenMenu] = useState(false);

  const onChangeMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div
      className={`${pathname === "/" ? "bg-transparent" : "bg-black-120"} relative z-10 flex items-center justify-between px-3 py-4 md:px-20 md:py-6`}
    >
      <h1 className=" inline-block">
        <a className=" inline-block" href="/">
          <img className="h-11 md:h-18" src={logo} alt="首頁Logo" />
        </a>
      </h1>
      {isMobile ? (
        <button className="p-2" onClick={onChangeMenu}>
          <span className="material-symbols-outlined text-7 text-white">
            menu
          </span>
        </button>
      ) : (
        <div className="space-x-2">
          <Link className="btn-transparent !w-auto !p-4" to="/login">
            客房旅宿
          </Link>
          <Link className="btn-transparent !w-auto !p-4" to="/login">
            會員登入
          </Link>
          <Link className="btn !w-auto !p-4" to="/login">
            立即訂房
          </Link>
        </div>
      )}

      {isMobile && openMenu && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 bg-black-120 p-5">
          <button className="ml-auto flex p-2" onClick={onChangeMenu}>
            <span className="material-symbols-outlined text-7 text-white">
              close
            </span>
          </button>
          <ul className="flex h-2/3 flex-col justify-center space-y-4 text-center">
            <li>
              <Link className="btn-transparent !w-auto !p-4" to="/login">
                客房旅宿
              </Link>
            </li>
            <li>
              <Link className="btn-transparent !w-auto !p-4" to="/login">
                會員登入
              </Link>
            </li>
            <li>
              <Link className="btn-primary !p-4" to="/login">
                立即訂房
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
