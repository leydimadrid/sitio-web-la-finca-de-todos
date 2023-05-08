import imagenDonaciones from '../assets/images/imagen-donaciones.jpg';
import FontSizeChanger from 'react-font-size-changer';
import { useTranslation } from 'react-i18next';

export const Donaciones = () => {
	const [t] = useTranslation('global');
	return (
		<div>
			{/* Inicio Modificador de texto  */}
			<div className='flex justify-end'>
				<div className='fixed md:m-4 lg:m-4 m-2 z-10'>
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
							buttonsMargin: 10,
						}}
					/>
				</div>
			</div>
			{/* Fin Modificador de texto */}
			<section id='contenedor'>
				<section className='flex md:flex-row lg:flex-row flex-col justify-end items-center'>
					{' '}
					<img
						className='object-cover w-full h-full'
						src={imagenDonaciones}
						alt={t('donateAltText.img-1')}
						tabIndex={0}
					/>
					<div className='md:bg-white lg:bg-white md:max-w-3xl lg:max-w-3xl max-w-xl h-36 md:absolute lg:absolute md:py-24 md:px-16 lg:py-24 lg:px-16  flex flex-col justify-center items-center rounded-l-lg'>
						<p className='titulo font-bold md:text-4xl text-lg text-center leading-relaxed text-blue-900 md:mb-1'>
							Tu apoyo es indispensable{' '}
						</p>
						<p className='titulo font-normal md:text-3xl text-md md:max-w-xl lg:max-w-xl max-w-xs text-center leading-relaxed text-blue-900'>
							para crear el mundo de igualdad en el que queremos vivir.
						</p>
					</div>
				</section>
				<section className='fondoDonaciones bg-cover bg-no-repeat py-36 px-24 flex justify-center'>
					<div className='flex flex-row justify-between max-w-full space-x-60'>
						<div className='fondoCardDonaciones bg-no-repeat max-w-2xl bg-blue-900 py-14 px-6 rounded-lg shadow-lg text-white'>
							<p className='titulo max-w-xs text-3xl font-bold mb-6'>
								Dona hoy y sé parte de la historia!{' '}
							</p>
							<p className='titulo md:text-lg text-lg leading-relaxed max-w-lg text-left'>
								El 100% de tu aporte se destinará para construir el primer
								espacio en la naturaleza totalmente accesible para personas con
								discapacidades en Colombia.
								<p className='titulo md:text-lg text-lg leading-relaxed max-w-lg text-left'>
									Con tu contribución única o mensual estas ayudando a llevar a
									cabo nuestra misión.
								</p>
							</p>
						</div>
            <div className='flex justify-center items-center'>
						<p className='titulo md:text-lg text-lg leading-relaxed max-w-md text-center'>
							La Fundación{' '}
							<span className='text-blue-900 font-semibold'>
								{t('reusable.logo')}
							</span>{' '}
							es una Entidad sin ánimo de Lucro, número de registro 20230143627.
						</p>
            </div>
					</div>
				</section>
			</section>

			{/* <section
				id='contenedor'
				className='fondoUbicacion md:bg-cover bg-cover bg-no-repeat'
			>
				<div className='md:flex flex-row items-center justify-center md:pt-20'>
					<div className='max-w-xl md:p-6 p-8 font-medium'>
						<p
							className='titulo text-gray-800 md:text-xl text-base text-center leading-relaxed'
							tabIndex={0}
						>
							{t('donate.paragraph-1')}
							<span className='titulo colorTextoDonaciones font-bold block leading-relaxed'>
								{t('donate.paragraph-2')}
							</span>
						</p>
						<p
							className='titulo text-center text-gray-800 md:text-xl text-base mt-6 leading-relaxed'
							tabIndex={0}
						>
							{t('donate.paragraph-3')}
							<div className='titulo text-center pt-10 md:text-2xl text-xl leading-relaxed'>
								<BotonAhora />
							</div>
						</p>
					</div>
				</div>
			</section> */}
		</div>
	);
};
