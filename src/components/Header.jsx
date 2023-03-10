import Logo from "../assets/images/logo.svg";
import { NavBar } from "../Routes/NavBar";
import { Traductor } from '../components/Traductor';

export const Header = () => {
  return (
    <>
    <header className="bg-white items-center py-4 shadow-md w-full top-0 left-0 md:flex justify-center fixed p-4">
      <section className="flex-row flex space-x-10">
      <div className="flex items-center">
        <img src={Logo} alt="logo La Finca De Todos" width={100} height={40} />      
      </div>
      <div className="md:hidden lg:hidden">
      <Traductor/>
      </div>
      <div className="md:flex md:items-center ">
      <NavBar />
      </div>
      <div className="md:flex lg:flex hidden">
      <Traductor/>
      </div>
      </section>
    </header>
    </>
  );
};
