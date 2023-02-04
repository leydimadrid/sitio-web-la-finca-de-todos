import Logo from "../assets/images/logo.svg";
import { NavBar } from "../Routes/NavBar";

export const Header = () => {
  return (
    <header className="bg-white items-center py-4 md:px-10 px-7 shadow-md w-full top-0 left-0 md:flex place-content-center fixed">
      <section className="md:w-11/12 justify-between md:flex">
      <div className="cursor-pointer flex items-center">
        <a href="/inicio">
        <img src={Logo} alt="logo la finca de todos" />
        </a>
      </div>
      <div className="md:flex md:items-center ">
      <NavBar />
      </div>
      </section>
    </header>
  );
};
