import { BotonDonar } from '../components/BotonDonar';
import { Equipo } from '../components/Equipo';
import { Slider } from '../components/Slider';
import iconowhatsapp from '../assets/images/icono-whatsapp.svg';
import iconoinstagram from '../assets/images/icono-instagram.svg';
import iconofacebook from '../assets/images/icono-facebook.svg';
import iconoemail from '../assets/images/icono-email.svg';
import { InfografiaDiscapacidad } from '../components/InfografiaDiscapacidad';
import FontSizeChanger from 'react-font-size-changer';
import { useTranslation } from 'react-i18next';

export const Nosotros = () => {
	const [t] = useTranslation('global');

	return (
		<>
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
				<section className='nuestraMision md:bg-contain bg-auto bg-no-repeat md:pt-24 pt-16'>
					<div>
						<h1
							className='titulo font-bold md:text-2xl text-xl text-center md:pt-30 text-gray-800'
							tabIndex={0}
						>
							{t('aboutUs.ourMission')}
						</h1>
						<hr className='linea-fucsia mx-auto mt-2' tabIndex={0}></hr>
					</div>
					<div className='flex justify-center my-auto pt-6 mb-2 px-4 md:text-xl lg:text-lg text-base font-medium'>
						<p
							className='titulo text-gray-800 md:text-justify text-center md:max-w-5xl lg:max-w-3xl leading-relaxed'
							tabIndex={0}
						>
							<span className='text-blue-900'>{t('reusable.logo')}</span>{' '}
							{t('aboutUs.paragraphMission-1')}{' '}
							<span className='text-blue-900'>{t('reusable.logo')}</span>
							{t('aboutUs.paragraphMission-2')}
						</p>{' '}
					</div>
					<p
						className='titulo text-center font-semibold md:text-xl text-xl text-blue-900'
						tabIndex={0}
					>
						{t('aboutUs.paragraphMission-3')}
					</p>
					<Slider />
				</section>
				<section className='titulo'>
					<InfografiaDiscapacidad />
				</section>
				<div className='titulo text-center pt-10 md:text-2xl text-xl'>
					<BotonDonar />
				</div>
				<div className='titulo'>
					<Equipo />
				</div>
				<div className='flex justify-center p-4 md:mt-10'>
					<a
						href='https://api.whatsapp.com/send?phone=3153410641&text=%C2%A1Hola!%20La%20Finca%20De%20Todos%20'
						target='_blank'
						rel='noreferrer'
					>
						<img
							className='m-2 md:w-auto w-8 h-8'
							src={iconowhatsapp}
							alt='Icono whatsapp'
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
							alt='Icono Instagram'
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
							alt='Icono Facebook'
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
							alt='Icono Email'
						/>
					</a>
				</div>
			</section>
		</>
	);
};
