/* eslint-disable react/prop-types */
import imagen from '../assets/images/talleres-el-campo.jpg';

export const TalleresElCampo = () => {
	return (
		<section className='p-4'>
			<div className='bg-white '>
				<div className='fondoCardsActividades md:flex flex-row items-center rounded-lg shadow-lg md:max-w-5xl '>
					<div className=' flex flex-wrap items-center p-6 leading-normal'>
						<h5
							className='mb-2 md:text-2xl text-lg font-bold tracking-tight text-blue-900 leading-relaxed'
							tabIndex={0}
						>
							El campo
						</h5>
						<div className='font-normal md:text-xl text-base text-gray-800'>
							<p className='leading-relaxed' tabIndex={0}>
								Aprendamos cómo llegan a nuestra mesa los productos que
								consumimos. Con las manos en la tierra podemos apreciar el
								trabajo de nuestros campesinos y sumergirnos en la experiencia
								de La Finca.{' '}
							</p>
						</div>
					</div>
					<img
						className='md:w-auto w-full rounded-b-lg md:rounded-r-lg'
						src={imagen}
						alt='Niña sonriendo en el campo, con tomates en su mano'
						tabIndex={0}
					/>
				</div>
			</div>
		</section>
	);
};
