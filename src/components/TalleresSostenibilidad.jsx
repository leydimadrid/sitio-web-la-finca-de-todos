/* eslint-disable react/prop-types */
import imagen from "../assets/images/talleres-sostenibilidad.jpg"

export const TalleresSostenibilidad = () => {
	return (
		<section className='p-4'>
			<div className='bg-white '>
				<div className='fondoCardsActividades md:flex flex-row items-center rounded-lg shadow-lg md:max-w-5xl '>
					<div className=' flex flex-wrap items-center p-6 leading-normal'>
						<h5 className='mb-2 md:text-2xl text-lg font-bold tracking-tight text-blue-900 leading-relaxed' tabIndex={0}>
						Sostenibilidad
						</h5>
						<div className='font-normal md:text-xl text-base text-gray-800'>
							<p className='leading-relaxed' tabIndex={0}>Is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industrys standard dummy.</p>
						</div>
					</div>
					<img
						className='md:w-auto w-full rounded-b-lg md:rounded-r-lg'
						src={imagen}
						alt="Un niño afrodescendiente y una niña manipulando tierra"
						tabIndex={0}
					/>
				</div>
			</div>
		</section>
	);
};
