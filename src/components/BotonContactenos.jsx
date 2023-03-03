import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const BotonContactenos = () => {
	const [t] = useTranslation('global');
	return (
		<div>
			<Link
				to='/contacto'
				className='md:text-xl text-base font-semibold bg-blue-900 text-white hover:text-white py-2 px-6 rounded-lg inline-flex items-center shadow-lg'
			>
				{t('titleWorkshop.buttoncontactUs')}
			</Link>
		</div>
	);
};
