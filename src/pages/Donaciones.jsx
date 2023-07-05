import imagenDonaciones from '../assets/images/imagen-donaciones.jpg';
import imagenDonaciones2 from '../assets/images/imagenDonaciones2.jpg';
import logoBancolombia from '../assets/images/Logo_Bancolombia.png';
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
				<section className='fondoDonaciones bg-cover bg-no-repeat md:py-36 md:px-24 px-6 flex justify-center'>
					<div className='flex md:flex-row flex-col max-w-full md:space-x-11 lg:space-x-6 xl:space-x-11 2xl:space-x-40'>
						<div className='fondoCardDonaciones bg-no-repeat md:max-w-2xl bg-blue-900 md:py-14 py-8 px-6 rounded-lg shadow-lg text-white'>
							<p className='titulo max-w-xs md:text-3xl text-lg font-bold mb-6'>
								Dona hoy y sé parte de la historia!{' '}
							</p>
							<p className='titulo md:text-lg text-md leading-relaxed max-w-lg text-left'>
								El 100% de tu aporte se destinará para construir el primer
								espacio en la naturaleza totalmente accesible para personas con
								discapacidades en Colombia.
								<p className='titulo md:text-lg text-md leading-relaxed max-w-lg text-left'>
									Con tu contribución única o mensual estas ayudando a llevar a
									cabo nuestra misión.
								</p>
							</p>
						</div>
						<div className='flex justify-center items-center mt-6 mb-6'>
							<p className='titulo md:text-lg text-md leading-relaxed max-w-md text-center'>
								La Fundación{' '}
								<span className='text-blue-900 font-semibold'>
									{t('reusable.logo')}
								</span>{' '}
								es una Entidad sin ánimo de Lucro, NIT 901707795-0.
							</p>
						</div>
					</div>
				</section>
				<section className='bg-gray-100 py-10 '>
					<div className='flex justify-center'>
						<h1
							className='titulo md:text-2xl text-xl font-bold text-blue-900 rounded-lg text-center leading-relaxed px-10'
							tabIndex={0}
						>
							¿Cómo quieres hacer tu donación?
						</h1>
					</div>
					<div className='flex md:flex-row flex-col justify-center md:space-x-6 md:space-y-0 space-y-6 mx-4 items-center '>
						<div className='bg-white border-2 border-gray-300 rounded-lg py-24 px-10 max-w-sm text-center'>
							<h1 className='titulo md:text-xl text-lg text-blue-900 font-semibold'>
								Donaciones desde Colombia
							</h1>
						</div>
						<div className='bg-white border-2 border-gray-300 rounded-lg py-24 px-10 max-w-md text-center'>
							<h1 className='titulo md:text-xl text-lg text-blue-900 font-semibold'>
								Donaciones desde el resto del mundo
							</h1>
							<p>
								*En la plataforma PayPal podrá realizar donaciones mensuales{' '}
							</p>
						</div>
						<div className='bg-white border-2 border-gray-300 rounded-lg py-24 px-10 max-w-md'>
							<h1 className='titulo md:text-xl text-lg text-blue-900 font-semibold text-center'>
								Consignación o transferencia
							</h1>
							<img
								className='mx-auto py-2'
								src={logoBancolombia}
								alt='Logo Bancolombia'
								tabIndex={0}
							/>
							<p className='text-center md:text-lg text-md'>
								<span className='block'>Banco: Bancolombia </span>
								<span className='block'>Tipo: Cuenta de Ahorros </span>
								<span className='block'>Nº de cuenta: XXXXXXX</span>
								<span>Código Banco: (SWIFT/BIC): COLOCOBM</span>
							</p>
						</div>
					</div>
					<div className='titulo flex justify-center pt-5 md:text-lg text-sm leading-relaxed mx-4 text-center'>
						<p>
							*Solicita tu recibo deducible de impuestos e información para
							otras formas de donar al correo finca.todos@gmail.com
						</p>{' '}
					</div>
				</section>
				<section className='fondoDonaciones2 bg-cover bg-no-repeat flex justify-center'>
					<div className='flex flex-col md:flex-row justify-center lg:flex-row py-10 px-4 md:space-x-40 lg:space-x-6'>
						<div className='max-w-4xl'>
							{' '}
							<img
								src={imagenDonaciones2}
								alt='Imagen donaciones sin definir'
								tabIndex={0}
							/>
						</div>
						<div className='grid grid-cols-1 content-center'>
							<div>
								<div className='flex justify-center mt-4'>
									<p
										className='colorTextoDonaciones titulo font-bold md:text-5xl lg:text-4xl text-2xl text-center max-w-xs leading-relaxed'
										tabIndex={0}
									>
										¡Gracias por tu donación!
									</p>
								</div>
								<div className='flex justify-center mt-4'></div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</div>
	);
};
