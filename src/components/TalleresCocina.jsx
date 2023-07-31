/* eslint-disable react/prop-types */
import imagen from '../assets/images/talleres-cocina.webp';
import { useTranslation } from 'react-i18next';

export const TalleresCocina = () => {
	const [t] = useTranslation('global');
	return (
		<section className='p-4'>
			<div className='bg-white '>
				<div className='fondoCardsActividades md:flex flex-row items-center rounded-lg shadow-lg md:max-w-5xl '>
					<div className=' flex flex-wrap items-center p-6 leading-normal'>
						<h5
							className='mb-2 md:text-2xl text-lg font-bold tracking-tight text-blue-900 leading-relaxed'
							tabIndex={0}
						>
							{t('educationalWorkshops.workshops-4')}
						</h5>
						<div className='font-normal md:text-xl text-base text-gray-800'>
							<p className='leading-relaxed' tabIndex={0}>
							{t('educationalWorkshops.paragraphWorkshops-4')}
							</p>
						</div>
					</div>
					<img
						className='md:w-auto w-full rounded-lg md:rounded-lg'
						src={imagen}
						alt={t('workshopsAltText.card-4')}
						tabIndex={0}
					/>
				</div>
			</div>
		</section>
	);
};
