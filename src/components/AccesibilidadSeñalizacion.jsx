import imagen from '../assets/images/senalizacion-clara.jpg';
import { useTranslation } from 'react-i18next';

export const AccesibilidadSeñalizacion = () => {
	const [t] = useTranslation('global');
	return (
		<section className='mt-6 max-w-sm p-4'>
			<div className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-white'>
				<img
					className='w-full'
					src={imagen}
					alt='Pies en una señalización para personas con discapacidad'
					tabIndex={0}
				/>
				<div className='px-2 py-4 text-center'>
					<h1
						className='font-bold text-lg text-blue-900 leading-normal'
						tabIndex={0}
					>
						{t('theFarm.Cards-4')}
					</h1>
				</div>
			</div>
		</section>
	);
};
