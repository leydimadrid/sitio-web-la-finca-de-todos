import FontSizeChanger from 'react-font-size-changer';
// import { useTranslation } from 'react-i18next';

export const OpcionDonaciones = () => {
	// const [t] = useTranslation('global');
	return (
		<div className='fondoOpcionDonaciones md:bg-cover bg-cover bg-no-repeat'>
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
			<section
				id='contenedor'
			>
				<div className='md:flex flex-row items-center justify-center md:pt-20 m-24'>
					<div className='max-w-xl md:p-6 p-8 font-medium'>
						<h1
							className='titulo font-bold md:text-2xl text-lg text-center mb-4 leading-relaxed text-blue-900'
							tabIndex={0}
						>
							¿En qué se van a invertir los recursos?
						</h1>
						<p
							className='titulo text-gray-800 md:text-xl text-base text-justify leading-relaxed'
							tabIndex={0}
						>
							is simply dummy text of the printing is simply dummy, is simply
							dummy text of the printing is simply dummy.
						</p>
						<div className='mt-20 flex flex-col justify-center'>
							<h1
								className='titulo font-bold md:text-2xl text-lg text-center mb-4 leading-relaxed text-blue-900'
								tabIndex={0}
							>
								¿Cómo quieres hacer tu donación?
							</h1>
							<div>
								<p
									className='titulo text-gray-800 md:text-xl text-base text-center leading-relaxed'
									tabIndex={0}
								>
									Desde Colombia
								</p>
								<div className='text-center mt-3'>
									<button className='bg-gray-900 text-white w-36 py-2 px-8 rounded-lg'>
										Wompi
									</button>
								</div>
							</div>
                            <div className='mt-6'>
							<p
								className='titulo text-gray-800 md:text-xl text-base text-center leading-relaxed'
								tabIndex={0}
							>
								Desde el Exterior
							</p>
							<div className='text-center mt-3'>
								<button className='bg-gray-900 text-white w-36 py-2 px-8 rounded-lg'>
									Paypal
								</button>
							</div>
                            </div>
						</div>
					</div>
					<div className='cajitaGracias md:m-1 bg-blue-900 w-96 h-80 flex flex-col justify-center items-center rounded-lg'>
						<p className=' text-white text-6xl font-bold'>Gracias</p>
						<p className=' text-white text-4xl'>por tu ayuda</p>
					</div>
				</div>
			</section>
		</div>
	);
};
