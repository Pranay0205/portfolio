import logo from "../../../assets/img/Logo_bg.png";

export default function footer() {
  return (
    <footer className="footer footer-center text-primary-content flex justify-center border border-gray-800 bg-gray-900/40 p-2 text-center">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="logo"
          className="h-16 w-auto self-center sm:h-12"
        />
        <p className="text-lg font-bold sm:text-base">Pranay Ghuge</p>
        <p className="text-sm sm:text-xs">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </footer>
  );
}
