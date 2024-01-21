import logo from "@/assets/img/pc/logo.png";

function Header() {
  return (
    <div className="flex justify-between bg-black-120 px-3 py-4 md:px-20 md:py-6">
      <h1 className=" inline-block">
        <a className=" inline-block" href="/">
          <img className="h-11 md:h-18" src={logo} alt="首頁Logo" />
        </a>
      </h1>
      <button>
        <span className="material-symbols-outlined text-white">menu</span>
      </button>
    </div>
  );
}

export default Header;
