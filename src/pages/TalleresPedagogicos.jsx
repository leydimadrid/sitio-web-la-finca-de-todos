import { InfografiaPasaDia } from '../components/InfografiaPasaDia';
import asistirTalleres from '../assets/images/imagen-asistir-talleres.jpg';
import { BotonContactenos } from '../components/BotonContactenos';
import FontSizeChanger from 'react-font-size-changer';
import { useTranslation } from 'react-i18next';
import { TalleresElCampo } from '../components/TalleresElCampo';
import { TalleresReciclaje } from '../components/TalleresReciclaje';
import { TalleresImpactoCultural } from '../components/TalleresImpactoCultural';
import { TalleresCocina } from '../components/TalleresCocina';
import { TalleresMeditacionYoga } from '../components/TalleresMeditacionYoga';
import { TalleresSostenibilidad } from '../components/TalleresSostenibilidad';
import { TalleresAnimalesFinca } from '../components/TalleresAnimalesFinca';
import { TalleresActividadFisica } from '../components/TalleresActividadFisica';
// import infografiaPasaDia from "../assets/images/infografia-pasa-dia.jpg";

export const TalleresPedagogicos = () => {
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
				<section className='bg-white'>
					<div>
						<h1
							className='titulo font-bold md:text-2xl text-xl text-center md:pt-28 pt-16 text-gray-800 leading-relaxed'
							tabIndex={0}
						>
							{t('educationalWorkshops.ourObjective')}
						</h1>
						<hr className='linea-fucsia mx-auto mt-2' tabIndex={0}></hr>
					</div>
					<div className='grid justify-center my-auto pt-6 md:pb-10 pb-6 px-4 md:text-xl lg:text-lg text-base font-medium'>
						<p
							className='titulo text-gray-800 md:text-justify text-center max-w-5xl leading-relaxed'
							tabIndex={0}
						>
							{t('educationalWorkshops.paragraphMain')}
						</p>
						<p
							className='titulo text-gray-800 max-w-5xl leading-relaxed mt-1 text-center'
							tabIndex={0}
						>
							{t('educationalWorkshops.paragraphMain-1')}
							<span className='titulo text-blue-900 font-semibold leading-relaxed'>
								{t('reusable.logo')}
							</span>
							{t('educationalWorkshops.paragraphMain-2')}
						</p>{' '}
					</div>
				</section>
				<section className='fondoTalleres md:bg-cover bg-cover bg-no-repeat'>
					<div>
						<h1
							className='titulo font-bold md:text-2xl text-xl text-center pt-10 text-gray-800 leading-relaxed'
							tabIndex={0}
						>
							{t('educationalWorkshops.workshops')}
						</h1>
						<hr className='linea-azul-titulo mx-auto mt-2'></hr>
					</div>
					<section className='md:py-6 px-4 mt-4 md:mb-4 mb-10'>
						<div className='titulo flex flex-wrap place-content-center'>
							<TalleresElCampo/>
							<TalleresReciclaje/>
							<TalleresImpactoCultural/>
							<TalleresCocina/>
							<TalleresMeditacionYoga/>
							<TalleresSostenibilidad/>
							<TalleresAnimalesFinca/>
							<TalleresActividadFisica/>
						</div>
					</section>
				</section>
				<section className='titulo'>
					<InfografiaPasaDia />
				</section>
				{/* <img className="w-auto mx-auto" src={infografiaPasaDia} /> */}
				<section className='fondoAsistirTalleres md:bg-cover bg-auto bg-no-repeat'>
					<div className='flex justify-center pt-10'>
						<h1
							className='titulo FondoFucsiaTalleres py-4 px-2 md:text-2xl text-xl font-bold text-white rounded-lg text-center md:w-96 mx-3 leading-relaxed'
							tabIndex={0}
						>
							{t('titleWorkshop.titleWorkshop')}
						</h1>
					</div>
					<div className='md:pt-14 md:flex flex-row items-center justify-center'>
						<div className='md:max-w-2xl max-w-sm md:p-6 p-8 md:mr-28 lg:mr-1'>
							<h1
								className='titulo font-bold md:text-2xl text-lg text-left mb-4 leading-relaxed'
								tabIndex={0}
							>
								{t('titleWorkshop.workshopInformation')}
							</h1>
							<p
								className='titulo text-gray-800 md:text-xl text-base leading-relaxed'
								tabIndex={0}
							>
								{t('titleWorkshop.paragraphWorkshopInformation')}
							</p>
							<h1
								className='titulo font-bold md:text-2xl text-lg pt-6 text-left mb-4 leading-relaxed'
								tabIndex={0}
							>
								{t('titleWorkshop.workshopInformation-1')}
							</h1>
							<p
								className='titulo text-gray-800 md:text-xl text-base leading-relaxed'
								tabIndex={0}
							>
								{t('titleWorkshop.paragraphWorkshopInformation-1')}
							</p>
						</div>
						<div>
							{' '}
							<img
								className='rounded-lg'
								src={asistirTalleres}
								alt={t('coursesAltText.img-1')}
								tabIndex={0}
							/>
						</div>
					</div>
					<div className='flex justify-center pt-10'>
						<h1
							className='md:text-2xl text-xl font-bold rounded-lg text-center w-96 px-3'
							tabIndex={0}
						>
							{t('titleWorkshop.titleCourses')}
						</h1>
					</div>
					<div className='md:flex flex-row items-center justify-center'>
						<div className='max-w-xl md:p-6 p-8'>
							<p
								className='titulo text-center text-gray-800 md:text-xl text-base leading-relaxed'
								tabIndex={0}
							>
								{t('titleWorkshop.paragraphCourses')}
							</p>
							<div className='flex justify-center'>
								<ul>
									<li
										className='titulo font-bold md:text-2xl text-lg pt-6 text-center mb-4 m-4 leading-relaxed'
										tabIndex={0}
									>
										6 {t('reusable.to')} 8
									</li>
									<li
										className='titulo font-bold md:text-2xl text-lg text-center mb-4  m-4 leading-relaxed'
										tabIndex={0}
									>
										9 {t('reusable.to')}  11
									</li>
								</ul>

								<ul>
									<li
										className='titulo font-bold md:text-2xl text-lg pt-6  text-center mb-4  m-4 leading-relaxed'
										tabIndex={0}
									>
										12 {t('reusable.to')}  14
									</li>
									<li
										className='titulo font-bold md:text-2xl text-lg text-center mb-4 m-4 leading-relaxed'
										tabIndex={0}
									>
										15 {t('reusable.to')}  17
									</li>
								</ul>
							</div>

							<h1
								className='titulo font-bold md:text-2xl text-lg pt-6 text-center mb-4 leading-relaxed'
								tabIndex={0}
							>
								{t('titleWorkshop.schedules')}
							</h1>
							<p
								className='titulo text-gray-800 md:text-xl text-base text-center leading-relaxed'
								tabIndex={0}
							>
								{t('titleWorkshop.tuesdayTofriday')}
								<span className='titulo block leading-relaxed' tabIndex={0}>
									9am - 4pm
								</span>
							</p>
							<p
								className='titulo text-center text-gray-800 md:text-xl text-base leading-relaxed mt-6'
								tabIndex={0}
							>
								{t('titleWorkshop.transportation')}
							</p>
							<p
								className='titulo text-center text-gray-800 md:text-xl text-base leading-relaxed'
								tabIndex={0}
							>
								{t('titleWorkshop.contactUs')}
							</p>
						</div>
					</div>
					<div className='titulo text-center md:mt-4 md:text-2xl text-xl md:mb-10 mb-6'>
						<BotonContactenos />
					</div>
				</section>
			</div>
		</div>
	);
};
