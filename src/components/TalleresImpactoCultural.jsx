/* eslint-disable react/prop-types */
import imagen from '../assets/images/talleres-impacto-cultural.jpg';

export const TalleresImpactoCultural = () => {
	return (
		<section className='p-4'>
			<div className='bg-white '>
				<div className='fondoCardsActividades md:flex flex-row items-center rounded-lg shadow-lg md:max-w-5xl '>
					<div className=' flex flex-wrap items-center p-6 leading-normal'>
						<h5
							className='mb-2 md:text-2xl text-lg font-bold tracking-tight text-blue-900 leading-relaxed'
							tabIndex={0}
						>
							Impacto cultural
						</h5>
						<div className='font-normal md:text-xl text-base text-gray-800'>
							<p className='leading-relaxed' tabIndex={0}>
								Conozcamos más sobre las contribuciones de las tribus indígenas
								y los pueblos afrocolombianos en el desarrollo de nuestra patria
								multicultural, tanto en la historia como en el presente.{' '}
							</p>
						</div>
					</div>
					<img
						className='md:w-auto w-full rounded-b-lg md:rounded-r-lg'
						src={imagen}
						alt='Hombre y mujer con vestidos de la cultura Colombiana bailando muy felices'
						tabIndex={0}
					/>
				</div>
			</div>
		</section>
	);
};
