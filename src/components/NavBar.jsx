import { useState } from 'react'
import { ButtonDonar } from './ButtonDonar';
import Logo from "../assets/logo.svg";


export const NavBar = () => {

    let Links =[
      {name:"Inicio",link:"/"},
      {name:"Nosotros",link:"/"},
      {name:"La Finca",link:"/"},
      {name:"Actividades",link:"/"},
      {name:"Ubicación",link:"/"},
      {name:"Contacto",link:"/"},
    ];
    let [open,setOpen]=useState(false);

    return (
      <section className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='cursor-pointer flex items-center
        text-gray-800'>
          <img src={Logo}/>
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
  
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0  md:w-auto w-full md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-2 md:my-0 my-7 font-[Metropolis] font-medium text-lg'>
                <a href={link.link} className=' hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded-md'>{link.name}</a>
              </li>
            ))
          }
          <ButtonDonar>QUIERO DONAR</ButtonDonar>
          
        </ul>
        </div>
      </section>
    )
  }
  
