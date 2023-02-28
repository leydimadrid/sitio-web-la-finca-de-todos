import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const BotonLaFinca = () => {
	const [t] = useTranslation('global');
	return (
		<div>
			<Link
				to='/lafinca'
				className='botonLaFinca md:text-xl text-base font-semibold text-white hover:text-white py-2 px-4 rounded-xl inline-flex items-center shadow-lg'
			>
				{t('inicio.buttonthefarm')}
			</Link>
		</div>
	);
};
