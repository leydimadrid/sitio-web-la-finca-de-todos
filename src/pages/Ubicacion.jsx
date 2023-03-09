import imagenUbicacion from '../assets/images/imagen-ubicacion.jpg';
import mapaCali from '../assets/images/ubicacion-mapa-cali.jpg';
import FontSizeChanger from 'react-font-size-changer';
import Logo from '../assets/images/logo.svg';
import { useTranslation } from 'react-i18next';
import { Traductor } from '../components/Traductor';

export const Ubicacion = () => {
	const [t] = useTranslation('global');
	return (
		<div>
			{/* Inicio Modificador de texto  */}
			<div className='flex justify-end'>
				<div className='fixed md:m-4 lg:m-4 m-2 z-10'>
					<Traductor />
					<FontSizeChanger
						targets={['#contenedor .titulo']}
						onChange={(element, newValue, oldValue) => {
							console.log(element, newValue, oldValue);
						}}
						options={{
							stepSize: 2,
							range: 3,
						}}
						customButtons={{
							up: (
								<button
									style={{
										fontSize: '22px',
										color: 'white',
										fontFamily: 'sans-serif',
									}}
								>
									A<sup className='font-semibold'>+</sup>
								</button>
							),
							down: (
								<button
									style={{
										fontSize: '22px',
										color: 'white',
										fontFamily: 'sans-serif',
									}}
								>
									A<sup className='font-semibold'>-</sup>
								</button>
							),
							style: {
								backgroundColor: '#2F52A0',
								color: 'white',
								WebkitBoxSizing: 'border-box',
								WebkitBorderRadius: '60px',
								border: 'none',
								width: '40px',
							},
							buttonsMargin: 6,
						}}
					/>
				</div>
			</div>

			{/* Fin Modificador de texto */}

			<section
				id='contenedor'
				className='fondoUbicacion md:bg-cover bg-cover bg-no-repeat'
			>
				<div className='md:flex flex-row items-center justify-center md:pt-20 pt-16'>
					<div className='max-w-xl md:p-6 p-8 md:mr-28 lg:mr-1'>
						<p
							className='titulo text-gray-800 md:text-xl text-base text-center leading-relaxed'
							tabIndex={0}
						>
							{t('location.paragraph-1')}
							<span className='titulo font-bold block text-blue-900 leading-relaxed'>
								{t('location.paragraph-2')}
							</span>
						</p>
						<p
							className='titulo text-center text-gray-800 md:text-xl text-base mt-6 leading-relaxed'
							tabIndex={0}
						>
							<span className='titulo font-bold block text-gray-800 leading-relaxed'>
								{t('location.paragraph-3')}
							</span>{' '}
							{t('location.paragraph-4')}
						</p>
						<p
							className='titulo text-gray-800 font-bold md:text-xl text-base text-center mt-6 leading-relaxed'
							tabIndex={0}
						>
							{t('location.paragraph-5')}
						</p>
					</div>
					<div className='md:m-1'>
						{' '}
						<img
							className='p-4'
							src={imagenUbicacion}
							alt='Hombre en silla de ruedas, subiendo a un carro accesible'
							tabIndex={0}
						/>
					</div>
				</div>
				<div className='flex flex-col md:flex-row  justify-center lg:flex-row lg:space-x-10 md:space-x-15 xl:space-x-40 m-4'>
					<div className='shadow-lg'>
						{' '}
						<img src={mapaCali} alt='Mapa de Cali' tabIndex={0} />
					</div>
					<div className='grid grid-cols-1 content-center'>
						<div>
							<div className='flex justify-center mt-4'>
								<p
									className='titulo text-gray-800 font-bold md:text-xl text-base text-center max-w-xs leading-relaxed'
									tabIndex={0}
								>
									{t('location.paragraph-6')}
								</p>
							</div>
							<div className='flex justify-center mt-4'>
								<img
									className='md:w-60 lg:w-60 w-56'
									src={Logo}
									alt='Logo de La Finca De Todos'
									tabIndex={0}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
