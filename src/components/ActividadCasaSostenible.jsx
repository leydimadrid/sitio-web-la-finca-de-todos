import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import imagen1 from '../assets/images/actividades-casa-sostenible.webp';
import imagen2 from '../assets/images/actividades-casa-sostenible-2.webp';
import { useTranslation } from 'react-i18next';

export const ActividadCasaSostenible = () => {
	const [t] = useTranslation('global');
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
			<section className='p-4'>
				<div className='bg-white lg:max-w-3xl'>
					<button
						onClick={handleClick}
						className='fondoCardsActividades rounded-lg shadow-lg lg:max-w-3xl flex flex-col items-center md:flex-row '
					>
						<img
							className='lg:w-96 w-64 lg:rounded-l-lg rounded-t-lg'
							src={imagen1}
							alt={t('activities.card-8-img-1')}
							tabIndex={0}
						/>
						<div className='items-center p-4 leading-normal lg:w-96 w-64 text-center'>
							<h5
								className='mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-800 leading-relaxed'
								tabIndex={0}
							>
								{t('weekend.Cards-8')}
							</h5>
						</div>
					</button>
				</div>
			</section>
			<section className='p-4'>
				<div className='bg-white lg:max-w-3xl'>
					<button
						onClick={handleClick}
						className='fondoCardsActividades rounded-lg shadow-lg md:max-w-3xl flex flex-col items-center md:flex-row '
					>
						<div className='items-center p-4 leading-normal md:w-96 w-64 text-center'>
							<p
								className='mb-2 font-normal md:text-xl text-base tracking-tight text-gray-800 leading-relaxed text-left'
								tabIndex={0}
							>
								{t('weekend.paragraphCards-8')}
							</p>
						</div>
						<img
							className='lg:w-96 w-64 lg:rounded-r-lg rounded-b-lg'
							src={imagen2}
							alt={t('activities.card-8-img-2')}
							tabIndex={0}
						/>
					</button>
				</div>
			</section>
		</ReactCardFlip>
	);
};
