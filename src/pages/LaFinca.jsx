import { VideoFinca } from '../components/VideoFinca';
import FontSizeChanger from 'react-font-size-changer';
import { useTranslation } from 'react-i18next';
import { AccesibilidadLenguaDeSeñas } from '../components/AccesibilidadLenguaDeSeñas';
import { AccesibilidadCaminosPLanos } from '../components/AccesibilidadCaminosPLanos';
import { AccesibilidadBucleAuditivo } from '../components/AccesibilidadBucleAuditivo';
import { AccesibilidadSeñalizacion } from '../components/AccesibilidadSeñalizacion';
import { AccesibilidadBraille } from '../components/AccesibilidadBraille';
import { AccesibilidadBaños } from '../components/AccesibilidadBaños';
import { AccesibilidadAnimales } from '../components/AccesibilidadAnimales';
import { AccesibilidadMinTic } from '../components/AccesibilidadMinTic';
import { SostenibilidadEcosistemas } from '../components/SostenibilidadEcosistemas';
import { SostenibilidadIndustriaInnovacion } from '../components/SostenibilidadIndustriaInnovacion';
import { SostenibilidadAccionClima } from '../components/SostenibilidadAccionClima';
import { SostenibilidadEnergiaAsequible } from '../components/SostenibilidadEnergiaAsequible';
import { SostenibilidadReduccionDesigualdades } from '../components/SostenibilidadReduccionDesigualdades';
import { SostenibilidadEducacion } from '../components/SostenibilidadEducacion';
import { SostenibilidadConsumoResponsable } from '../components/SostenibilidadConsumoResponsable';

export const LaFinca = () => {
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
			<div id='contenedor'>
				<section
					id='lafinca'
					className='fondoFinca3d md:bg-contain bg-auto bg-no-repeat'
				>
					<div className='flex justify-center'>
						<h1
							className='titulo md:max-w-lg max-w-sm font-bold md:text-2xl text-xl text-center md:pt-24 pt-16 text-gray-800 leading-relaxed'
							tabIndex={0}
						>
							{t('theFarm.title3D')}
						</h1>
					</div>
					<hr className='linea-verde mx-auto mt-2' tabIndex={0}></hr>
					<article className='grid place-items-center'>
						<VideoFinca />
						<p
							className='titulo text-xs md:text-md lg:text-md w-10/12 mb-2 leading-relaxed text-center'
							tabIndex={0}
						>
							{t('theFarm.altTextVideo3d')}
						</p>
					</article>
				</section>
				<section className='fondoAccesibilidad md:bg-cover bg-contain bg-no-repeat'>
					<div className='flex justify-center'>
						<h1
							className='titulo md:max-w-sm max-w-xs font-bold md:text-2xl text-xl text-center md:mt-14 mt-6 text-gray-800 leading-relaxed'
							tabIndex={0}
						>
							{t('theFarm.titleAccessibility')}
						</h1>
					</div>
					<hr className='linea-fucsia mx-auto mt-2' tabIndex={0}></hr>
					<section className='md:py-6'>
						<div className='titulo flex flex-wrap place-content-center leading-relaxed'>
							<AccesibilidadLenguaDeSeñas />
							<AccesibilidadCaminosPLanos />
							<AccesibilidadBucleAuditivo />
							<AccesibilidadSeñalizacion />
							<AccesibilidadBraille />
							<AccesibilidadBaños />
							<AccesibilidadAnimales />
							<AccesibilidadMinTic />
						</div>
					</section>
				</section>
				<section className='fondoSostenibilidad md:bg-cover bg-auto bg-no-repeat'>
					<div className='flex justify-center'>
						<h1
							className='titulo flex flex-col md:max-w-xl max-w-sm font-bold md:text-xl text-xl text-center mt-10 text-gray-800 leading-relaxed'
							tabIndex={0}
						>
							{t('theFarm.titleONU-1')}
							<span className='titulo text-gray-800 md:text-base text-base leading-relaxed'>
								{t('theFarm.titleONU-2')}
							</span>
						</h1>
					</div>
					<hr className='linea-fucsia mx-auto mt-2' tabIndex={0}></hr>
					<section className='md:py-6'>
						<div className='titulo flex flex-wrap md:mb-4 mb-10 place-content-center leading-relaxed'>
							<SostenibilidadEcosistemas />
							<SostenibilidadIndustriaInnovacion />
							<SostenibilidadAccionClima />
							<SostenibilidadEnergiaAsequible />
							<SostenibilidadReduccionDesigualdades />
							<SostenibilidadEducacion />
							<SostenibilidadConsumoResponsable />
						</div>
					</section>
				</section>
			</div>
		</div>
	);
};
