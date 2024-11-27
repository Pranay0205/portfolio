import logo from "../../../assets/img/Logo_bg.png";

export default function footer() {
  return (
    <footer className="footer footer-center bg-dark/70 text-primary-content p-2 flex justify-center text-center">
      <div className="flex flex-col">
        <img src={logo} alt="logo" className="w-fit h-16 self-center flex" />
        <p className="font-bold">Pranay Ghuge</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  );
}
