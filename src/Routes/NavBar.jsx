import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GoToTop from '../components/GoToTop';
import { BotonDonar } from '../components/BotonDonar';

export const NavBar = () => {
	const [open, setOpen] = useState(false);
	const [t] = useTranslation('global');

	return (
		<>
			<nav>
				<ul
					className={`bg-white py-4 px-4 md:p-0 md:flex md:items-center md:text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-lg text-sm w-full absolute md:static font-medium md:pb-0 left-0  md:w-auto md:pl-0 ${
						open ? 'top-20' : 'top-[-490px]'
					}`}
				>
					<li
						onClick={() => setOpen(!open)}
						className=' md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-3 rounded text-gray-800'
					>
						<Link to='/inicio'> {t('navbar.home')} </Link>
					</li>
					<li
						onClick={() => setOpen(!open)}
						className='md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-3 rounded text-gray-800'
					>
						<Link to='/nosotros'>{t('navbar.aboutUs')}</Link>
					</li>
					<li
						onClick={() => setOpen(!open)}
						className='md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-3 rounded text-gray-800'
					>
						<Link to='/lafinca'>{t('navbar.theFarm')}</Link>
					</li>
					<li
						onClick={() => setOpen(!open)}
						className=' md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-3 rounded text-gray-800'
					>
						<Link to='/findesemana'>{t('navbar.weekendActivities')}</Link>
					</li>
					<li
						onClick={() => setOpen(!open)}
						className='md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-3 rounded text-gray-800'
					>
						<Link to='/talleres'>{t('navbar.educationalWorkshops')}</Link>
					</li>
					<li
						onClick={() => setOpen(!open)}
						className='md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-3 rounded text-gray-800'
					>
						<Link to='/ubicacion'>{t('navbar.location')}</Link>
					</li>
					<li
						onClick={() => setOpen(!open)}
						className='md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-3 rounded text-gray-800'
					>
						<Link to='/contacto'>{t('navbar.contactUs')}</Link>
					</li>
					<li
						onClick={() => setOpen(!open)}					>
						<BotonDonar />
					</li>
				</ul>
				<GoToTop />
				<div
					onClick={() => setOpen(!open)}
					className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
				>
					<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
				</div>
			</nav>
		</>
	);
};
