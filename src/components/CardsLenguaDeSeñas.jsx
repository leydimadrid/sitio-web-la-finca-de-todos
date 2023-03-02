import { useTranslation } from 'react-i18next';

export const CardsLenguaDeSeñas = () => {
	const [t] = useTranslation('global');
	return (
		<section className='flex justify-center mt-4'>
			<div className='max-w-4xl bg-white mb-10 shadow-lg rounded-lg mx-4'>
				<div className='fondoCardsActividades  items-center leading-normal text-center rounded-lg md:p-10 p-5'>
					<h5 className='mb-4 md:text-xl text-base font-bold tracking-tight text-gray-800 leading-relaxed' tabIndex={0}>
					{t('weekend.Cards-11')}
					</h5>
					<div className='flex justify-center'>
						<p className='mb-2 md:text-xl text-sm tracking-tight text-gray-800 max-w-3xl text-justify pb-4 leading-relaxed' tabIndex={0}>
						{t('weekend.paragraphCards-11')}
						</p>
					</div>
					<div className='flex justify-center'>
						<div className=' shadow-md max-w-3xl'>
							<iframe
								className='rounded-lg'
								width='768'
								height='432'
								src='https://www.youtube.com/embed/IfS_n2oxOVE'
								title='YouTube video player'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowfullscreen
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
