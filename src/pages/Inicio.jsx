import { BotonLaFinca } from '../components/BotonLaFinca';
import { VideoInicio } from '../components/VideoInicio';
import FontSizeChanger from 'react-font-size-changer';
import { useTranslation } from 'react-i18next';

export const Inicio = () => {
	const [t] = useTranslation('global');

	return (
		<main className='bienvenidos md:bg-cover lg:bg-cover bg-no-repeat'>
			{/* Inicio Modificador de texto  */}
			<section className='flex justify-end'>
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
			</section>
			{/* Fin Modificador de texto */}

			<article id='contenedor'>
				<section className='titulo grid place-items-center'>
					<VideoInicio />
					<p
						className='text-xs md:text-md lg:text-md w-10/12 leading-relaxed'
						tabIndex={0}
					>
						<span className='font-semibold'>
							{t('inicio.alttextvideohome-bold')}
						</span>
						{t('inicio.alttextvideohome')}
					</p>
				</section>
				<h1
					className='titulo md:text-4xl text-3xl text-center text-blue-900 font-bold tracking-wide mt-24'
					tabIndex={0}
				>
					{t('inicio.welcome')}
				</h1>
				<div className='max-w-md my-auto mx-auto pt-6 md:pb-10 pb-6 text-center md:text-xl text-base font-medium text-gray-800'>
					<p
						className='titulo leading-relaxed md:px-0 lg:px-0 px-4'
						tabIndex={0}
					>
						{t('inicio.openingparagraph-1')}
						<span className='text-blue-900'>{t('reusable.logo')}</span>
						{t('inicio.openingparagraph-2')}
					</p>
				</div>
				<div className='titulo text-center md:pb-20 pb-10'>
					<BotonLaFinca />
				</div>
			</article>
		</main>
	);
};
