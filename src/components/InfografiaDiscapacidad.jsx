import lineaDiscontinua from '../assets/images/linea-discontinua-infografia.svg';
import lineaDiscontinuaDerecha from '../assets/images/linea-discontinua-derecha.svg';
import lineaDiscontinua2Izquierda from '../assets/images/linea-discontinua-2-izquierda.svg';
import lineaDiscontinua2Derecha from '../assets/images/linea-discontinua-2-derecha.svg';
import lineaDerechoDiscapacidad from '../assets/images/linea-derecho-discapacidad.svg';
import lineaDiscontinuaLarga from '../assets/images/linea-discontinua-larga.svg';
import lineaDiscontinua3 from '../assets/images/linea-discontinua3.svg';
import lineaDiscontinua3OtraOpcion from '../assets/images/linea-discontinua3-otra-opcion.svg';
import lineaDiscontinuaLarga2 from '../assets/images/linea-discontinua-larga-2.svg';
import vector1 from '../assets/images/vector1-discapacidad.svg';
import vector2 from '../assets/images/vector2-discapacidad.svg';
import vector3 from '../assets/images/vector-3-discapacidad.svg';
import vector4 from '../assets/images/vector-4-discapacidad.svg';
import vector5 from '../assets/images/vector-5-discapacidad.svg';
import { useTranslation } from 'react-i18next';

export const InfografiaDiscapacidad = () => {
	const [t] = useTranslation('global');

	return (
		<section className='fondoInfografiaDiscapacidad  md:bg-cover bg-cover'>
			<div className='flex justify-center'>
				<div className='md:w-4/5'>
					{/* Inicio Título infografía */}
					<div className='p-4'>
						<h1
							className='font-bold md:text-6xl text-3xl text-center md:pt-24 text-blue-900'
							tabIndex={0}
						>
							{t('infographics.disabilityInColombia')}
						</h1>
						<hr
							className='linea-amarilla h-1 md:w-3/5 md:mx-auto mx-auto mt-2'
							tabIndex={0}
						></hr>
					</div>
					{/* Final Título infografía */}

					{/* Párrafo introductorio */}
					<div className='flex justify-center px-4 '>
						<p
							className='text-gray-800 font-normal md:text-xl text-base max-w-4xl text-justify leading-relaxed'
							tabIndex={0}
						>
							{t('infographics.mainParagraph-1')}
							<span className='font-semibold'>
								{t('infographics.mainParagraph-2')}
							</span>
							{t('infographics.mainParagraph-3')}
						</p>
					</div>
					{/* Párrafo introductorio */}

					<div className='flex md:justify-center justify-end mt-8'>
						<div className=' md:w-2/5 w-2/4 md:mr-64 pr-6'>
							<img
								src={lineaDiscontinua}
								alt='Lineas discontinuas'
								tabIndex={0}
							/>
						</div>
					</div>

					{/* Inicio quiénes somos */}
					<section className='md:flex flex-row justify-center mt-10'>
						<div>
							<h1
								className='FondoFucsiaInfografia py-4 md:text-2xl text-xl font-bold text-white rounded-lg text-center w-72 px-3 md:mx-0 mx-auto mb-4'
								tabIndex={0}
							>
								{t('infographics.whoAreWe')}
							</h1>
							<p
								className='max-w-md md:text-xl lg:text-lg text-base mb-4 mx-auto text-gray-800 md:text-left text-center leading-relaxed p-2'
								tabIndex={0}
							>
								<span className='font-semibold leading-relaxed'>
									{t('infographics.paragraphWhoAreWe-1')}
								</span>
								{t('infographics.paragraphWhoAreWe-2')}
								<span className='font-semibold leading-relaxed'>
									{t('infographics.paragraphWhoAreWe-3')}
								</span>{' '}
								{t('infographics.paragraphWhoAreWe-4')}
								<span className='font-semibold leading-relaxed '>
									{t('infographics.paragraphWhoAreWe-5')}
								</span>{' '}
								{t('infographics.paragraphWhoAreWe-6')}
							</p>
							<p
								className='md:text-xl lg:text-lg  max-w-sm text-base mb-4 mx-auto text-gray-800 md:mx-0 md:text-left text-center leading-relaxed p-2'
								tabIndex={0}
							>
								{t('infographics.paragraphWhoAreWe-7')}
							</p>
							<div className='flex justify-center md:mx-0 max-w-sm'>
								<ul
									className='ml-4 list-disc md:text-xl lg:text-lg text-base text-gray-800 px-4 leading-relaxed'
									tabIndex={0}
								>
									<li>{t('infographics.listOne')}</li>
									<li>{t('infographics.listTwo')}</li>
									<li>{t('infographics.listThree')}</li>
									<li>{t('infographics.listFour')}</li>
								</ul>

								<ul
									className='ml-4 list-disc md:text-xl lg:text-lg text-base text-gray-800 px-4 leading-relaxed'
									tabIndex={0}
								>
									<li>{t('infographics.listFive')}</li>
									<li>{t('infographics.listSix')}</li>
									<li>{t('infographics.listSeven')}</li>
									<li>{t('infographics.listEight')}</li>
								</ul>
							</div>
						</div>
						<div className='md:pl-8 px-6 mt-8'>
							<img
								src={vector1}
								alt='Vector de personas con diferentes discapacidades'
								tabIndex={0}
							/>
						</div>
					</section>
					<section>
						<div className='md:flex flex-row justify-center mt-8 mb-8'>
							<div className='md:flex justify-center mb-8 md:pr-10'>
								<div className='md:w-auto w-2/4 md:ml-44 ml-28 md:flex hidden'>
									<img
										src={lineaDiscontinuaDerecha}
										alt='Lineas discontinuas'
										tabIndex={0}
									/>
								</div>
							</div>
							<div>
								<p
									className='md:max-w-md max-w-sm md:text-xl lg:text-lg  text-base md:mx-0 mx-auto text-gray-800 md:text-left text-center leading-relaxed p-2'
									tabIndex={0}
								>
									<span className='text-blue-900 md:text-5xl lg:text-4xl text-4xl font-semibold leading-relaxed '>
										{t('infographics.15%')}
									</span>
									{t('infographics.paragraphWhoAreWe-8')}
									<span className='font-semibold leading-relaxed'>
										{t('infographics.paragraphWhoAreWe-9')}
									</span>
								</p>
							</div>

							{/* Linea discontinua oculta para MD */}
							<div className='w-2/4 mx-auto md:hidden flex mt-8'>
								<img
									src={lineaDiscontinuaDerecha}
									alt='Lineas discontinuas'
									tabIndex={0}
								/>
							</div>
							{/* Linea discontinua oculta para MD */}
						</div>
					</section>
					{/* Final quiénes somos */}

					{/* Inicio cuántos somos */}
					<section className='md:flex flex-col justify-center'>
						<div className='flex justify-center'>
							<h1
								className='bg-blue-900 py-4 md:text-2xl text-xl font-bold text-white rounded-lg text-center w-72 px-3 md:mx-0 mx-auto mb-4'
								tabIndex={0}
							>
								{t('infographics.HowManyOfUsAreThere')}
							</h1>{' '}
						</div>
						<div className='md:flex flex-row justify-center'>
							<div className='md:w-auto w-2/6 mb-8 mx-6 md:flex hidden'>
								<img
									src={lineaDiscontinua2Izquierda}
									alt='Lineas discontinuas'
									tabIndex={0}
								/>
							</div>
							<div className='md:mx-0 mx-auto text-center'>
								<p
									className='md:text-xl lg:text-lg  text-base mb-4 text-gray-800 leading-relaxed'
									tabIndex={0}
								>
									{t('infographics.paragraphHowManyOfUsAreThere-1')}
									<span className='block '>
										<span className='font-semibold leading-relaxed'>
											{t('infographics.paragraphHowManyOfUsAreThere-2')}
										</span>{' '}
										{t('infographics.paragraphHowManyOfUsAreThere-3')}
									</span>
								</p>
								<div className='md:px-0 flex justify-center'>
									<img
										className='w-80'
										src={vector2}
										alt='vector de personas con diferentes discapacidades'
										tabIndex={0}
									/>
								</div>

								{/* Linea discontinua oculta para MD */}
								<div className='w-3/5 mx-auto md:hidden flex mt-8 justify-center'>
									<img
										src={lineaDerechoDiscapacidad}
										alt='Lineas discontinuas'
										tabIndex={0}
									/>
								</div>
								{/* Linea discontinua oculta para MD */}
							</div>
							<div className='mb-8 mx-4 md:flex hidden'>
								<img
									src={lineaDiscontinua2Derecha}
									alt='Lineas discontinuas'
									tabIndex={0}
								/>
							</div>
						</div>
						<div className='md:flex flex-row justify-center mt-4 md:space-x-64 '>
							<div className='flex justify-center'>
								<p
									className='md:max-w-xl lg:max-w-md max-w-sm md:text-xl lg:text-lg text-base text-center text-gray-800 leading-relaxed mx-4'
									tabIndex={0}
								>
									<span className='text-blue-900 md:text-xl text-lg font-bold leading-relaxed'>
										{t('infographics.paragraphHowManyOfUsAreThere-4')}
									</span>
									{t('infographics.paragraphHowManyOfUsAreThere-5')}
									<p
										className='md:max-w-md max-w-sm md:text-xl lg:text-lg text-base md:mx-0 mx-auto mt-4 leading-relaxed'
										tabIndex={0}
									>
										<span className=' text-blue-900 md:text-xl text-xl font-bold leading-relaxed'>
											“{' '}
										</span>{' '}
										{t('infographics.paragraphHowManyOfUsAreThere-6')}
										<span className=' text-blue-900 md:text-2xl text-2xl font-bold leading-relaxed'>
											{' '}
											{t('infographics.paragraphHowManyOfUsAreThere-7')}
										</span>{' '}
										{t('infographics.paragraphHowManyOfUsAreThere-8')}
										<span className=' text-blue-900 md:text-xl text-xl font-bold leading-relaxed'>
											”
										</span>
										:
										<span className='block'>
											{t('infographics.paragraphHowManyOfUsAreThere-9')}
										</span>
									</p>
								</p>
							</div>
							{/* Linea discontinua oculta para MD */}
							<div className='w-3/5 mx-auto md:hidden flex mt-8 justify-center'>
								<img
									src={lineaDerechoDiscapacidad}
									alt='Lineas discontinuas'
									tabIndex={0}
								/>
							</div>
							{/* Linea discontinua oculta para MD */}
							<div className='flex justify-center'>
								<p
									className='md:max-w-xl lg:max-w-sm max-w-sm md:text-xl lg:text-lg text-base text-center text-gray-800 leading-relaxed mx-4'
									tabIndex={0}
								>
									<span className='text-pink-600 md:text-4xl text-4xl font-bold block leading-relaxed'>
										{t('infographics.paragraphHowManyOfUsAreThere-10')}
									</span>
									{t('infographics.paragraphHowManyOfUsAreThere-11')}
									<span className='font-semibold leading-relaxed'>
										{t('infographics.paragraphHowManyOfUsAreThere-12')}
									</span>
								</p>
							</div>
						</div>
						{/* Linea discontinua oculta para MD */}
						<div className='w-3/5 mx-auto md:hidden flex mt-8 justify-center'>
							<img
								src={lineaDerechoDiscapacidad}
								alt='Lineas discontinuas'
								tabIndex={0}
							/>
						</div>
						{/* Linea discontinua oculta para MD */}
						<div className='md:flex justify-center mb-8 mx-4 hidden'>
							<img
								src={lineaDerechoDiscapacidad}
								alt='Lineas discontinuas'
								tabIndex={0}
							/>
						</div>
						<div className='flex justify-center mt-4'>
							<p
								className='md:max-w-sm max-w-sm md:text-xl lg:text-lg text-base text-center text-gray-800 leading-relaxed p-2'
								tabIndex={0}
							>
								{t('infographics.paragraphHowManyOfUsAreThere-13')}
								<span className='font-semibold leading-relaxed'>
									{t('infographics.paragraphHowManyOfUsAreThere-14')}
								</span>{' '}
								{t('infographics.paragraphHowManyOfUsAreThere-15')}
								<span className='text-pink-600 md:text-3xl text-base font-bold leading-relaxed'>
									{' '}
									{t('infographics.paragraphHowManyOfUsAreThere-16')}
								</span>{' '}
								{t('infographics.paragraphHowManyOfUsAreThere-17')}
								<span className=' text-blue-900 md:text-xl text-base font-bold block leading-relaxed'>
									{t('infographics.paragraphHowManyOfUsAreThere-18')}
								</span>
							</p>
						</div>
					</section>
					{/* Final cuántos somos */}

					<div className='flex md:justify-center justify-end mt-8'>
						<div className=' md:w-2/5 w-2/4 mx-auto md:mx-0 md:mr-40'>
							<img
								src={lineaDiscontinua}
								alt='Lineas discontinuas'
								tabIndex={0}
							/>
						</div>
					</div>

					{/* Inicio dónde estamos */}
					<section>
						<div className='flex flex-col justify-center mt-4 md:flex-row'>
							<div className='md:ml-10 md:mt-0'>
								<h1
									className='FondoFucsiaInfografia py-4 md:text-2xl text-xl font-bold text-white rounded-lg text-center w-72 px-3 md:mx-0 mx-auto mb-4'
									tabIndex={0}
								>
									{t('infographics.whereAreWe')}
								</h1>
								<div className='max-w-xl md:text-xl lg:text-lg  mx-auto md:mx-0'>
									<p
										className='md:text-xl lg:text-lg text-base mb-4 text-gray-800 md:text-left text-center leading-relaxed p-8 md:p-0 lg:p-0'
										tabIndex={0}
									>
										{t('infographics.paragraphwhereAreWe-1')}
										<span className='font-semibold leading-relaxed'>
											{t('infographics.paragraphwhereAreWe-2')}
										</span>
									</p>{' '}
								</div>
								<div className='mt-8 px-6 md:px-0 lg:px-0'>
									<img
										src={vector3}
										alt='Mapa de Colombia señalando Antioquia, Santander, Bogotá, Valle del Cauca y Huila'
										tabIndex={0}
									/>
								</div>
							</div>
							{/* Linea discontinua oculta para MD */}
							<div className='w-3/5 mx-auto md:hidden flex mt-8 justify-center'>
								<img
									src={lineaDerechoDiscapacidad}
									alt='Lineas discontinuas'
									tabIndex={0}
								/>
							</div>
							{/* Linea discontinua oculta para MD */}
							<div>
								<div className='md:flex hidden pt-6'>
									<img
										src={lineaDiscontinuaLarga}
										alt='Lineas discontinuas'
										tabIndex={0}
									/>
								</div>
								<div className='md:ml-48 lg:ml-40 mt-4'>
									<p
										className='md:max-w-md lg:max-w-lg max-w-sm md:text-xl lg:text-lg text-base text-center  md:mx-0 mx-4 text-gray-800 leading-relaxed'
										tabIndex={0}
									>
										{t('infographics.paragraphwhereAreWe-3')}
										<span className='text-blue-900 md:text-xl text-lg font-bold leading-relaxed'>
											{t('infographics.paragraphwhereAreWe-4')}
										</span>
										{t('infographics.paragraphwhereAreWe-5')}
										<span className='text-blue-900 md:text-xl text-lg font-bold leading-relaxed'>
											{t('infographics.paragraphwhereAreWe-6')}
										</span>{' '}
										{t('infographics.paragraphwhereAreWe-7')}
									</p>
									<p
										className='md:max-w-md lg:max-w-lg max-w-sm md:text-xl lg:text-lg text-base text-center mt-4 md:mx-0 mx-auto text-gray-800 leading-relaxed'
										tabIndex={0}
									>
										{t('infographics.paragraphwhereAreWe-8')}
										<span className='text-pink-600 md:text-xl text-lg font-bold leading-relaxed'>
											{t('infographics.paragraphwhereAreWe-9')}
										</span>
										{t('infographics.paragraphwhereAreWe-10')}
										<span className='text-pink-600 md:text-xl text-lg font-bold leading-relaxed'>
											{t('infographics.paragraphwhereAreWe-11')}
										</span>{' '}
										{t('infographics.paragraphwhereAreWe-12')}
									</p>
									<div className='md:flex hidden'>
										<img
											className='mx-auto mt-4'
											src={lineaDiscontinua3}
											alt='Lineas discontinuas'
											tabIndex={0}
										/>
									</div>
									<div className='flex md:hidden'>
										<img
											className='mx-auto mt-4'
											src={lineaDiscontinua3OtraOpcion}
											alt='Lineas discontinuas'
											tabIndex={0}
										/>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Final dónde estamos */}

					{/* Inicio cómo estamos */}
					<section>
						<div className='flex flex-col md:flex-row justify-end mr-10'>
							<div className='md:flex hidden mt-16'>
								<img
									src={lineaDiscontinuaLarga2}
									alt='Lineas discontinuas'
									tabIndex={0}
								/>
							</div>
							<div className='mt-10 ml-6'>
								<div className='md:flex md:justify-end  lg:flex lg:justify-end flex justify-center'>
									<h1
										className='bg-blue-900 py-4 px-2 md:text-2xl text-xl font-bold text-white rounded-lg text-center w-72 md:mx-0 mx-4 mb-4'
										tabIndex={0}
									>
										{t('infographics.howAreWeDoing')}
									</h1>
								</div>
								<p
									className='max-w-xl md:text-xl lg:text-lg text-base mb-4 text-gray-800 md:text-right text-center leading-relaxed'
									tabIndex={0}
								>
									{t('infographics.paragraphhowAreWeDoing-1')}
									<span className='font-semibold leading-relaxed'>
										{t('infographics.paragraphhowAreWeDoing-2')}
									</span>{' '}
									{t('infographics.paragraphhowAreWeDoing-3')}
									<span className='font-semibold leading-relaxed'>
										{t('infographics.paragraphhowAreWeDoing-4')}
									</span>{' '}
								</p>{' '}
							</div>
						</div>
						{/* Linea discontinua oculta para MD */}
						<div className='w-3/5 mx-auto md:hidden flex justify-center'>
							<img
								src={lineaDerechoDiscapacidad}
								alt='Lineas discontinuas'
								tabIndex={0}
							/>
						</div>
						{/* Linea discontinua oculta para MD */}
						<div className='flex flex-col justify-center md:flex-row'>
							<div className='mt-4 mr-4'>
								<h1
									className='text-pink-600 font-bold md:text-2xl lg:text-xl text-xl md:text-left text-center leading-relaxed'
									tabIndex={0}
								>
									{t('infographics.paragraphhowAreWeDoing-5')}
								</h1>
								<p
									className='md:text-xl lg:text-lg text-base text-gray-800 md:text-left text-center leading-relaxed'
									tabIndex={0}
								>
									{t('infographics.paragraphhowAreWeDoing-6')}
								</p>
								<ul
									className='list-disc md:text-xl lg:text-lg text-base text-gray-800 px-10 max-w-xl mt-4 leading-relaxed sm:px-10'
									tabIndex={0}
								>
									<li className='leading-relaxed'>
										{t('infographics.paragraphhowAreWeDoing-7')}
										<span className='font-semibold'>
											{t('infographics.paragraphhowAreWeDoing-8')}
										</span>
									</li>
									<li className='leading-relaxed'>
										<span className='font-semibold'>
											{t('infographics.paragraphhowAreWeDoing-9')}
										</span>{' '}
										{t('infographics.paragraphhowAreWeDoing-10')}
									</li>
									<li className='leading-relaxed'>
										<span className='font-semibold'>
											{t('infographics.paragraphhowAreWeDoing-11')}{' '}
										</span>
										{t('infographics.paragraphhowAreWeDoing-12')}
									</li>
								</ul>
								<div className='flex md:justify-center mt-8'>
									<div className=' md:w-2/5 w-2/4 mx-auto md:mx-0 md:flex hidden'>
										<img
											src={lineaDiscontinua}
											alt='Lineas discontinuas'
											tabIndex={0}
										/>
									</div>
								</div>
							</div>
							<div className='mt-8 px-10'>
								<img
									src={vector4}
									alt='Vector de escaleras, señalización y libro en braille para personas con discapacidad'
									tabIndex={0}
								/>
							</div>
							{/* Linea discontinua oculta para MD */}
							<div className='w-3/5 mx-auto md:hidden flex justify-center mt-4'>
								<img
									src={lineaDerechoDiscapacidad}
									alt='Lineas discontinuas'
									tabIndex={0}
								/>
							</div>
							{/* Linea discontinua oculta para MD */}
						</div>
						<div className=' flex flex-col md:flex-row'>
							<div className='max-w-2xl mt-4 mr-10'>
								<p
									className='md:text-xl lg:text-lg text-base text-gray-800 ml-10 md:text-left text-center leading-relaxed'
									tabIndex={0}
								>
									<span className='font-semibold leading-relaxed'>
										{t('infographics.paragraphhowAreWeDoing-13')}
									</span>{' '}
									{t('infographics.paragraphhowAreWeDoing-14')}
									<span className='text-blue-900 font-bold leading-relaxed'>
										{t('infographics.paragraphhowAreWeDoing-15')}
									</span>{' '}
									{t('infographics.paragraphhowAreWeDoing-16')}
									<span className='font-semibold leading-relaxed'>
										{t('infographics.paragraphhowAreWeDoing-17')}
									</span>{' '}
									{t('infographics.paragraphhowAreWeDoing-18')}
									<span className='font-semibold leading-relaxed'>
										{t('infographics.paragraphhowAreWeDoing-19')}
									</span>{' '}
								</p>
							</div>
							{/* Linea discontinua oculta para MD */}
							<div className='w-3/5 mx-auto md:hidden flex justify-center mt-4'>
								<img
									src={lineaDerechoDiscapacidad}
									alt='Lineas discontinuas'
									tabIndex={0}
								/>
							</div>
							{/* Linea discontinua oculta para MD */}
							<div className='md:flex hidden mt-16'>
								<img
									src={lineaDiscontinuaLarga}
									alt='Lineas discontinuas'
									tabIndex={0}
								/>
							</div>
						</div>

						<div className='flex flex-col'>
							<div className='mt-8 px-8 flex justify-end mr-4'>
								<img src={vector5} alt='Logo La Finca De Todos' tabIndex={0} />
							</div>
							<div className='flex justify-end'>
								<div className='max-w-2xl mt-4 mr-10 mb-8'>
									<p
										className='md:text-xl lg:text-lg text-base text-gray-800 ml-10 md:text-right text-center leading-relaxed'
										tabIndex={0}
									>
										<span className='text-blue-900 font-bold leading-relaxed'>
										{t('reusable.logo')}
										</span>{' '}
										{t('infographics.paragraphhowAreWeDoing-20')}
									</p>
								</div>
							</div>
						</div>
					</section>
					{/* Final cómo estamos */}
					{/* Footer de la infografia */}
					<section>
						<div className='bg-blue-900 md:p-3 md:flex hidden'>
							<ul
								className='text-white text-xs md:max-w-6xl max-w-xs leading-relaxed'
								tabIndex={0}
							>
								<li>{t('reusable.sources')}</li>
								<li>
									<a
										href='https://www.funcionpublica.gov.co/en/web/inclusion-publica/categor%C3%ADas-de-discapacidad'
										target='_blank'
										rel='noreferrer'
									>
										https://www.funcionpublica.gov.co/en/web/inclusion-publica/categor%C3%ADas-de-discapacidad
									</a>
								</li>
								<li>
									<a
										href='https://www.funcionpublica.gov.co/en/web/inclusion-publica/qu%C3%A9-es-discapacidad-'
										target='_blank'
										rel='noreferrer'
									>
										https://www.funcionpublica.gov.co/en/web/inclusion-publica/qu%C3%A9-es-discapacidad-
									</a>
								</li>
								<li>
									<a
										href='https://www.freepik.es/vector-gratis/dia-internacional-plano-personas-discapacidad_10623554.htm#query=discapacidad&from_query=discacidad&position=1&from_view=search&track=sph'
										target='_blank'
										rel='noreferrer'
									>
										https://www.freepik.es/vector-gratis/dia-internacional-plano-personas-discapacidad_10623554.htm#query=discapacidad&from_query=discacidad&position=1&from_view=search&track=sph
									</a>
								</li>
								<li>
									<a
										href='https://www.freepik.es/vector-gratis/conjunto-iconos-planos-discapacitados-discapacitados_3910281.htm#query=discapacidad%20baille&position=20&from_view=search&track=ais'
										target='_blank'
										rel='noreferrer'
									>
										https://www.freepik.es/vector-gratis/conjunto-iconos-planos-discapacitados-discapacitados_3910281.htm#query=discapacidad%20baille&position=20&from_view=search&track=ais
									</a>
								</li>
								<li>
									<a
										href='https://www.freepik.es/vector-gratis/dia-internacional-personas-discapacidad_10753024.htm#query=personas%20con%20discapacidadad&position=26&from_view=search&track=ais'
										target='_blank'
										rel='noreferrer'
									>
										https://www.freepik.es/vector-gratis/dia-internacional-personas-discapacidad_10753024.htm#query=personas%20con%20discapacidadad&position=26&from_view=search&track=ais
									</a>
								</li>
							</ul>
						</div>
					</section>
					{/* Footer de la infografia */}
				</div>
			</div>
		</section>
	);
};
