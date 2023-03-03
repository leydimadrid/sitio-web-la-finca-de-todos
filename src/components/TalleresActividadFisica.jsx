/* eslint-disable react/prop-types */
import imagen from '../assets/images/talleres-actividad-fisica.jpg';

export const TalleresActividadFisica = () => {
	return (
		<section className='p-4'>
			<div className='bg-white '>
				<div className='fondoCardsActividades md:flex flex-row items-center rounded-lg shadow-lg md:max-w-5xl '>
					<div className=' flex flex-wrap items-center p-6 leading-normal'>
						<h5
							className='mb-2 md:text-2xl text-lg font-bold tracking-tight text-blue-900 leading-relaxed'
							tabIndex={0}
						>
							Actividad física
						</h5>
						<div className='font-normal md:text-xl text-base text-gray-800'>
							<p className='leading-relaxed' tabIndex={0}>
								Con una variedad de actividades en equipo y logros individuales,
								mucha diversión te espera en La Finca de Todos. El énfasis está
								en la amistad, no en el puntaje final y siempre está la opción
								de tomar un descanso para los que prefieren apoyar y no
								participar.
							</p>
						</div>
					</div>
					<img
						className='md:w-auto w-full rounded-b-lg md:rounded-r-lg'
						src={imagen}
						alt='Personas realizando actividad física, por medio de juegos'
						tabIndex={0}
					/>
				</div>
			</div>
		</section>
	);
};
