import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import imagen1 from '../assets/images/actividades-invernadero.jpg';
import imagen2 from '../assets/images/actividades-invernadero-2.jpg';

export const ActividadInvernadero = () => {
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
						className='fondoCardsActividades rounded-lg shadow-lg lg:max-w-3xl flex flex-col items-center md:flex-row'
					>
						<img
							className='lg:w-96 w-64 lg:rounded-l-lg rounded-t-lg'
							src={imagen1}
							alt='Una mujer y un joven con Sindrome de Down en un invernadero'
							tabIndex={0}
						/>
						<div className='items-center p-4 leading-normal lg:w-96 w-64 text-center'>
							<h5
								className='mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-800 leading-relaxed'
								tabIndex={0}
							>
								Invernadero accesible e inteligente
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
								En nuestro invernadero accesible puedes ver tecnología
								implementada para el menor uso de energía, softwares de control
								de ambiente, y sistema de riego inteligente.
							</p>
						</div>
						<img
							className='lg:w-96 w-64 lg:rounded-r-lg rounded-b-lg'
							src={imagen2}
							alt='Sembrado de tomates'
							tabIndex={0}
						/>
					</button>
				</div>
			</section>
		</ReactCardFlip>
	);
};
