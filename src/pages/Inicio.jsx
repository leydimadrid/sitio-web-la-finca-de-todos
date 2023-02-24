import { BotonLaFinca } from '../components/BotonLaFinca';
import { VideoInicio } from '../components/VideoInicio';
import FontSizeChanger from 'react-font-size-changer';

export const Inicio = () => {
	return (
		<main className='bienvenidos md:bg-cover bg-cover bg-no-repeat'>
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
								border: '1px solid',
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
				<p className='text-xs md:text-md lg:text-md w-10/12 leading-relaxed' tabIndex={0}>
					<span className='font-semibold'>
						Video compuesto de los siguientes clips:{' '}
					</span>
					Mariposa sobre una hoja moviendo sus alas, niña sonriente caminando
					entre la naturaleza con la asistencia de un andador, paisaje de
					montañas colombianas, un par de abuelos abrazan felizmente a su nieto
					sentados en el césped, tres cabras curiosas se acercan a la cámara,
					una madre besa a su hijo en la mejilla que está sonriendo en su silla
					de ruedas eléctrica, logo de La Finca De Todos.
				</p>
			</section>
				<h1 className='titulo md:text-4xl text-3xl text-center text-blue-900 font-bold tracking-wide mt-24' tabIndex={0}>
					BIENVENIDOS
				</h1>
				<div className='max-w-md my-auto mx-auto pt-6 md:pb-10 pb-6 text-center md:text-xl text-base font-medium text-gray-800'>
					<p className='titulo leading-relaxed md:px-0 lg:px-0 px-4' tabIndex={0}>
						¡Este mundo es para disfrutarlo al máximo! Te invitamos a{' '}
						<span className='text-blue-900'>La Finca de Todos </span>, un lugar
						hecho para todos.
					</p>
				</div>
				<div className='titulo text-center md:pb-20 pb-10'>
					<BotonLaFinca />
				</div>
			</article>
		</main>
	);
};
