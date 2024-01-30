import logo from "@/assets/img/pc/logo.png";
import igIcon from "@/assets/img/pc/igIcon.svg";
import lineIcon from "@/assets/img/pc/lineIcon.svg";

function Footer() {
  return (
    <div className="bg-black-120 pb-20 pt-20 md:pb-[120px]">
      <div className="mx-auto max-w-[1296px] justify-between px-3 md:flex">
        <div>
          <a className=" mb-10 inline-block" href="/">
            <img className="h-18 md:h-18" src={logo} alt="首頁Logo" />
          </a>
          <ul className="mb-10 flex space-x-4 md:mb-20">
            <li>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white">
                <img src={lineIcon} alt="lineIcon" />
              </div>
            </li>
            <li>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white">
                <img src={igIcon} alt="igIcon" />
              </div>
            </li>
          </ul>
          <p className="hidden text-white md:block">
            806023 台灣高雄市新興區六角路123號
          </p>
        </div>
        <div className="text-white">
          <ul className=" mb-20 grid gap-x-20 gap-y-4 md:grid-cols-2 md:gap-y-10">
            <li>
              <p className="mb-2 font-bold">TEL</p>
              <p className="text-black-40">+886-7-1234567</p>
            </li>
            <li>
              <p className="mb-2 font-bold">MAIL</p>
              <p className="text-black-40">mailto:elh@hexschool.com</p>
            </li>
            <li>
              <p className="mb-2 font-bold">FAX</p>
              <p className="text-black-40">+886-7-1234567</p>
            </li>
            <li>
              <p className="mb-2 font-bold">WEB</p>
              <p className="text-black-40">www.elhhexschool.com.tw</p>
            </li>
          </ul>
          <p className="mb-4 text-white md:hidden">
            806023 台灣高雄市新興區六角路123號
          </p>
          <p className="text-white md:text-right ">
            © 享樂酒店 2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
