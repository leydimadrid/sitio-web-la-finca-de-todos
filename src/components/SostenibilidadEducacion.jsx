import imagen from '../assets/images/icono-educacion-calidad.svg';
import { useTranslation } from 'react-i18next';

export const SostenibilidadEducacion = () => {
	const [t] = useTranslation('global');
	return (
		<section className='mt-6 max-w-sm p-4'>
			<div className='bg-white'>
				<div className='cardSostenibilidad max-w-sm rounded shadow-lg'>
					<div className='px-6 py-4 flex justify-center'>
						<img
							className='rounded-full shadow-lg'
							src={imagen}
							alt='Icono educacion de calidad'
							tabIndex={0}
						/>
					</div>
					<div className='px-4 py-2 text-center'>
						<p
							className='font-bold text-lg text-gray-800 leading-normal'
							tabIndex={0}
						>
							{t('theFarm.Cards-objectives-6')}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
