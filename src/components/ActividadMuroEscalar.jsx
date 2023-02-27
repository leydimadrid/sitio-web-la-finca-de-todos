import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import imagen1 from '../assets/images/actividades-muro-de-escalar.jpg';
import imagen2 from '../assets/images/actividades-muro-de-escalar-2.jpg';

export const ActividadMuroEscalar = () => {
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
							alt='Niño subiendo por un muro de escalar'
							tabIndex={0}
						/>
						<div className='items-center p-4 leading-normal lg:w-96 w-64 text-center'>
							<h5
								className='mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-800 leading-relaxed'
								tabIndex={0}
							>
								Parque adaptado y muro de escalar
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
								La zona de juegos inclusivos está diseñada para que visitantes
								de todas las capacidades jueguen juntos. Súbete al muro y
								alcanza nuevas alturas: contamos con equipo de escalar adaptado
								para garantizar tu seguridad.
							</p>
						</div>
						<img
							className='lg:w-96 w-64 lg:rounded-r-lg rounded-b-lg'
							src={imagen2}
							alt='Parque adaptado para personas con discapacidad'
							tabIndex={0}
						/>
					</button>
				</div>
			</section>
		</ReactCardFlip>
	);
};
