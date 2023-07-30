import imagenDonaciones from '../assets/images/imagen-donaciones.jpg';
import imagenDonaciones2 from '../assets/images/imagenDonaciones2.jpg';
import logoBancolombia from '../assets/images/Logo_Bancolombia.png';
import logoPaypal from '../assets/images/logo-paypal.png';
import FontSizeChanger from 'react-font-size-changer';
import { useTranslation } from 'react-i18next';
import tarjetaspaypal from '../assets/images/tarjetas-paypal.png';
import codigoQR from '../assets/images/codigo-qr.jpeg';

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
				<section className='flex md:flex-row lg:flex-row flex-col items-center justify-center md:my-6 lg:my-6 my-0'>
					{' '}
					<img
						className='w-auto h-auto m-4 md:mb-0 lg:mb-0'
						src={imagenDonaciones}
						alt={t('donateAltText.img-1')}
						tabIndex={0}
					/>
					<div className='fondoDonaciones bg-cover bg-no-repeat md:py-36 md:px-24 px-6 justify-center flex md:flex-col flex-col max-w-full'>
						<div className='fondoCardDonaciones bg-no-repeat md:max-w-2xl bg-blue-900 md:py-14 py-8 px-6 rounded-lg shadow-lg text-white' tabIndex={0}>
							<p className='titulo max-w-xs md:text-3xl text-lg font-bold mb-6' tabIndex={0}>
								{t('donate.paragraph-2')}
							</p>
							<p className='titulo md:text-lg text-md leading-relaxed max-w-lg text-left' tabIndex={0}>
								{t('donate.paragraph-2-1')}
								<p className='titulo md:text-lg text-md leading-relaxed max-w-lg text-left' tabIndex={0}>
									{t('donate.paragraph-2-1-2')}
								</p>
							</p>
						</div>
						<div className='flex justify-center items-center mt-6 mb-6'>
							<p className='titulo md:text-lg text-md leading-relaxed max-w-md text-center' tabIndex={0}>
								{t('donate.paragraph-3')}
								<span className='text-blue-900 font-semibold'>
									{t('reusable.logo')}
								</span>{' '}
								{t('donate.paragraph-3-1')}
							</p>
						</div>
					</div>
				</section>

				<section className='bg-gray-100 py-10 justify-center'>
					<h1
						className='titulo md:text-2xl text-xl font-bold text-blue-900 rounded-lg text-center leading-relaxed px-10 mb-8 flex justify-center'
						tabIndex={0}
					>
						{t('donate.paragraph-4')}
					</h1>
					<div className='flex flex-col md:flex-row justify-center gap-y-6 gap-x-10'>
						{/* Card Consignación  */}
						<div className=' bg-white rounded-lg py-8 px-6 md:max-w-4xl lg:max-w-4xl mx-6 md:mx-0 lg:mx-0 shadow-md'>
							<div className='flex md:flex-row flex-col items-center gap-x-12 justify-center'>
								<div>
									<h1 className='titulo md:text-xl text-lg text-blue-900 font-semibold text-center mb-2' tabIndex={0}>
										{t('donate.paragraph-option-3')}
									</h1>
									<img
										className='mx-auto py-2 object-cover md:w-44 lg:w-44 w-40 mb-2'
										src={logoBancolombia}
										alt={t('donateAltText.img-2')}
										tabIndex={0}
									/>
									<p className='text-center md:text-lg text-base' tabIndex={0}>
										<span className='block mb-2' tabIndex={0}>
											{t('donate.paragraph-option-3-1')}{' '}
										</span>
										<span className='block mb-2' tabIndex={0}>
											{t('donate.paragraph-option-3-2')}{' '}
										</span>
										<span className='block mb-2' tabIndex={0}>
											{t('donate.paragraph-option-3-3')}
										</span>
										<span tabIndex={0}>{t('donate.paragraph-option-3-4')}</span>
									</p>
								</div>
								<div className='flex flex-col justify-center'>
									<p className='text-center titulo md:text-xl text-lg text-blue-900 font-semibold mt-2' tabIndex={0}>
										¡Dona aquí!
									</p>
									<p className='titulo text-center mt-2 md:text-lg text-base' tabIndex={0}>Usando el código QR de Bancolombia</p>
									<img
										src={codigoQR}
										alt='codigo QR Bancolombia'
										className='rounded-md w-56 mx-auto mt-4'
										tabIndex={0}
									/>
								</div>
							</div>

							<div>
								<p className='titulo max-w-1xl mt-6' tabIndex={0}>
									El código SWIFT es necesario para hacer transferencias desde
									Bancos fuera de Colombia, corresponde al código internacional
									del Banco (Bancolombia).
								</p>
							</div>
						</div>
						{/* Fin Card Consignación  */}
						{/* Card PayPal  */}
						<div className='bg-white rounded-lg py-8 px-6 max-w-md text-center flex flex-col justify-around items-center shadow-md md:mx-0 lg:mx-0 mx-6 '>
							<div>
								<h1 className='titulo md:text-xl text-lg text-blue-900 font-semibold' tabIndex={0}>
									{t('donate.paragraph-option-2')}
								</h1>
								<img
									className='mx-auto py-2 object-cover md:w-36 lg:w-36 w-32 mb-2'
									src={logoPaypal}
									alt='Logo PayPal'
									tabIndex={0}
								/>
								<div className='flex justify-center mt-6 mb-4'>
									<a
										href='https://www.paypal.com/donate/?hosted_button_id=5HNW3SQ27PUQJ'
										target='_blank'
										rel='noreferrer'
									>
										<button className='boton-paypal' tabIndex={0}>
											{t('reusable.donatePaypal')}
										</button>
										<img
											src={tarjetaspaypal}
											alt={t('reusable.paypalCards')}
											className='mt-2'
											tabIndex={0}
										/>
									</a>
								</div>
							</div>
							<div>
								<p tabIndex={0}>{t('donate.paragraph-option-2-1')}</p>
							</div>
						</div>
						{/* Fin Card PayPal  */}
					</div>
					<div className='titulo flex justify-center pt-5 md:text-lg text-sm leading-relaxed mx-4 text-center'>
						<p>{t('donate.paragraph-5')}</p>{' '}
					</div>
				</section>
				<section className='fondoDonaciones2 bg-cover bg-no-repeat'>
					<div className='flex flex-col md:flex-row justify-center lg:flex-row py-10 px-4 md:space-x-40 lg:space-x-6'>
						{' '}
						<img
							src={imagenDonaciones2}
							alt={t('donateAltText.img-3')}
							tabIndex={0}
							className="rounded-lg"
						/>
						<div className='grid grid-cols-1 content-center'>
							<div className='flex flex-col'>
								<div className='flex justify-center mb-4 mt-4'>
									<p
										className='colorTextoDonaciones titulo font-bold md:text-5xl lg:text-4xl text-2xl text-center'
										tabIndex={0}
									>
										{t('donate.paragraph-6')}
									</p>
								</div>
								<div className='flex justify-center'>
									{/* <p className='titulo font-bold md:text-3xl text-lg text-center leading-relaxed md:mb-1'>
										{t('donate.paragraph-1')}
									</p> */}
									<p className='titulo font-normal md:text-2xl text-md md:max-w-xl lg:max-w-xl max-w-xs text-center leading-relaxed' tabIndex={0}>
										{t('donate.paragraph-1')} {t('donate.paragraph-1-1')}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</div>
	);
};
