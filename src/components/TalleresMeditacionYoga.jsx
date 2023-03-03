/* eslint-disable react/prop-types */
import imagen from '../assets/images/talleres-meditacion-y-yoga.jpg';

export const TalleresMeditacionYoga = () => {
	return (
		<section className='p-4'>
			<div className='bg-white '>
				<div className='fondoCardsActividades md:flex flex-row items-center rounded-lg shadow-lg md:max-w-5xl '>
					<div className=' flex flex-wrap items-center p-6 leading-normal'>
						<h5
							className='mb-2 md:text-2xl text-lg font-bold tracking-tight text-blue-900 leading-relaxed'
							tabIndex={0}
						>
							Meditación y Yoga
						</h5>
						<div className='font-normal md:text-xl text-base text-gray-800'>
							<p className='leading-relaxed' tabIndex={0}>
								Nunca es temprano para comenzar a encontrar el equilibrio dentro
								de nosotros mismos. Nuestros espacios tranquilos son aptos para
								enfocarnos en la respiración para lograr una calma merecida en
								este mundo tan agitado. Contamos con instructores con
								experiencia.
							</p>
						</div>
					</div>
					<img
						className='md:w-auto w-full rounded-b-lg md:rounded-r-lg'
						src={imagen}
						alt='Mujer con discapacidad en su pierna, practicando yoga'
						tabIndex={0}
					/>
				</div>
			</div>
		</section>
	);
};
