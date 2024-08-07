import imagenContacto from '../assets/images/imagen-contacto.webp';
import iconowhatsapp from '../assets/images/icono-whatsapp.svg';
import iconoinstagram from '../assets/images/icono-instagram.svg';
import iconofacebook from '../assets/images/icono-facebook.svg';
import iconoemail from '../assets/images/icono-email.svg';
import FontSizeChanger from 'react-font-size-changer';
import { Formulario } from '../components/Formulario';
import { useTranslation } from 'react-i18next';

export const Contacto = () => {
	const [t] = useTranslation('global');
	return (
		<section>
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
			<div
				id='contenedor'
				className='flex flex-col md:flex-row lg:flex-row items-center md:pt-0 lg:pt-0 pt-16'
			>
				<div className='md:my-6 lg:my-6'>
					<img
						src={imagenContacto}
						alt={t('contactAltText.img-1')}
						tabIndex={0}
						className='rounded-r-lg'
					/>
				</div>
				<div className='md:w-2/6 lg:w-2/6 w-full h-2/6 p-8'>
					<h1
						className='titulo text-blue-900 font-bold md:text-2xl lg:text-2xl text-xl text-center leading-relaxed'
						tabIndex={0}
					>
						{t('contactUs.titleForm')}
					</h1>
					<Formulario />
					<div className='flex justify-center p-4 md:mt-10'>
						<a
							href='https://api.whatsapp.com/send?phone=573153410641&text=%C2%A1Hola!%20La%20Finca%20de%20Todos%20'
							target='_blank'
							rel='noreferrer'
						>
							<img
								className='m-2 md:w-auto w-8 h-8'
								src={iconowhatsapp}
								alt={t('reusable.iconWhatsapp')}
							/>
						</a>
						<a
							href='https://instagram.com/fincadetodos?igshid=YmMyMTA2M2Y='
							target='_blank'
							rel='noreferrer'
						>
							<img
								className='m-2 md:w-auto w-8 h-8'
								src={iconoinstagram}
								alt={t('reusable.iconInstagram')}
							/>
						</a>

						<a
							href='https://www.facebook.com/profile.php?id=100089133646096'
							target='_blank'
							rel='noreferrer'
						>
							<img
								className='m-2 md:w-auto w-8 h-8'
								src={iconofacebook}
								alt={t('reusable.iconFacebook')}
							/>
						</a>

						<a
							href='mailto:finca.todos@gmail.com'
							target='_blank'
							rel='noreferrer'
						>
							<img
								className='m-2 md:w-auto w-8 h-8'
								src={iconoemail}
								alt={t('reusable.iconEmail')}
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
