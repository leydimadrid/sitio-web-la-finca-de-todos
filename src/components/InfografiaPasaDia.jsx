/* eslint-disable react/no-unescaped-entities */
import logo from '../assets/images/logo-la-finca-de-todos-pasa-dia.svg';
import reloj from '../assets/images/reloj-infografia-pasa-dia.svg';
import tiempoActividades from '../assets/images/tiempo-infografía-pasa-dia.svg';
import vectorBienvenida from '../assets/images/vector-bienvenida-infografia-pasa-dia.svg';
import vectorHuerto from '../assets/images/vector-huerto-infografia-pasa-dia.svg';
import vectorCocina from '../assets/images/vector-cocina-infografia-pasa-dia.svg';
import vectorAlmuerzo from '../assets/images/vector-almuerzo-infografia-pasa-dia.svg';
import vectorDescanso from '../assets/images/vector-descanso-infografia-pasa-dia.svg';
import vectorCasaAccesible from '../assets/images/vector-casa-accesible-infografia-pasa-dia.svg';
import vectorReciclaje from '../assets/images/vector-reciclaje-infografia-pasa-dia.svg';
import vectorArteReciclaje from '../assets/images/vector-arte-reciclaje-infografia-pasa-dia.svg';
import vectorSalida from '../assets/images/vector-salida-infografia-pasa-dia.svg';
import vectorRelojSalida from '../assets/images/vector-reloj-salida-infografia-pasa-dia.svg';

export const InfografiaPasaDia = () => {
	return (
		<section className='fondoInfografiaPasaDia  md:bg-cover bg-cover'>
			{/* Inicio Título infografía */}
			<div>
				<h1
					className='font-bold md:text-6xl text-3xl text-center md:pt-24 text-pink-600'
					tabIndex={0}
				>
					Pasadía para niños
				</h1>
				<h1
					className='block font-bold md:text-6xl text-3xl text-center text-pink-600'
					tabIndex={0}
				>
					de <span className='text-blue-900'>4to de primaria</span>
				</h1>
			</div>
			{/* Final Título infografía */}

			{/* Inicio párrafo introductorio */}
			<div className='flex justify-center px-4 '>
				<p
					className='text-gray-800 font-normal lg:text-xl text-sm max-w-4xl text-justify leading-relaxed'
					tabIndex={0}
				>
					Un pequeño encuentro con el descanso y la diversión.
				</p>
			</div>
			{/* Final párrafo introductorio */}
			{/* Línea */}
			<hr
				className='linea-azul h-1 max-w-xl md:mx-auto mx-auto mt-2'
				tabIndex={0}
			></hr>
			{/* Línea */}

			{/* Inicio Sección inicio */}
			<section className='flex md:flex-row lg:flex-row flex-col justify-start md:mt-24 lg:mt-24 mt-10'>
				<div className='basis-2/5 w-auto grid place-items-center'>
					<h1
						className='FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center w-72 px-3 md:mx-0 mx-auto mb-4'
						tabIndex={0}
					>
						INICIO
					</h1>
					<p
						className='md:text-xl lg:text-lg text-base text-gray-800 leading-relaxed'
						tabIndex={0}
					>
						Llegada a{' '}
						<span className='text-blue-900 font-semibold'>
							La Finca de Todos{' '}
						</span>
					</p>
					<img
						src={logo}
						alt='Logo La Finca De Todos'
						className='mt-2'
						tabIndex={0}
					/>
				</div>
				<div className='basis-2/5 grid place-content-center content-end py-2'>
					<img
						src={reloj}
						alt='Vector de reloj indicando las 9:30am'
						className='mt-2 md:w-auto lg:w-auto w-64'
						tabIndex={0}
					/>
				</div>
			</section>
			<hr
				className='linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2'
				tabIndex={0}
			></hr>
			{/* Final sección inicio */}

			{/* Inicio Sección centro de bienvenida */}
			<section className='flex md:flex-row lg:flex-row flex-col justify-end md:mt-24 lg:mt-24 mt-10'>
				<div className='basis-2/5 grid place-content-center content-end py-2'>
					<img
						src={vectorBienvenida}
						alt='Vector de un hombre y una mujer saludando'
						className='my-2 md:w-auto lg:w-auto w-64'
						tabIndex={0}
					/>
				</div>
				<div className='basis-2/5 grid place-items-center'>
					<div className='w-auto grid place-content-start'>
						<div className='grid place-content-center'>
							<img
								src={tiempoActividades}
								alt='Vector de un reloj'
								tabIndex={0}
							/>
							<h1
								className='md:text-xl lg:text-lg text-base text-gray-800 font-semibold'
								tabIndex={0}
							>
								15 MIN
							</h1>
						</div>
						<h1
							className='FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4'
							tabIndex={0}
						>
							CENTRO DE BIENVENIDA
						</h1>
						<div>
							<ul
								className='font-normal md:text-xl lg:text-lg text-base text-gray-800 leading-relaxed md:text-right lg:text-right text-center'
								tabIndex={0}
							>
								<li className='mb-2 leading-relaxed'>
									{' '}
									<span className='font-semibold'>Introducción</span>
								</li>
								<li className='mb-2 leading-relaxed'>
									Información de la <span className='font-semibold'>finca</span>{' '}
									y su <span className='font-semibold'>propósito</span>
								</li>
								<li className='leading-relaxed'>
									<span className='font-semibold'>Cronograma</span> de
									actividades
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<div className='flex justify-end'>
				<hr
					className='linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2'
					tabIndex={0}
				></hr>
			</div>
			{/* Final sección centro de bienvenida */}

			{/* Inicio Sección en el huerto */}
			<section className='flex md:flex-row lg:flex-row flex-col justify-start md:mt-24 lg:mt-24 mt-10'>
				<div className='basis-2/5 grid place-items-center'>
					<div className='w-auto grid place-content-start'>
						<div className='grid place-content-center'>
							<img
								src={tiempoActividades}
								alt='vector de un reloj'
								tabIndex={0}
							/>
							<h1
								className='md:text-xl lg:text-lg text-base text-gray-800 font-semibold'
								tabIndex={0}
							>
								40 MIN
							</h1>
						</div>
						<h1
							className='bg-blue-900 py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4'
							tabIndex={0}
						>
							EN EL HUERTO
						</h1>
						<div>
							<ul
								className='font-normal md:text-xl lg:text-lg text-base text-gray-800 leading-relaxed md:text-left lg:text-left text-center'
								tabIndex={0}
							>
								<li className='mb-2 leading-relaxed'>
									{' '}
									<span className='font-semibold'>Oler</span> y
									<span className='font-semibold'> sentir</span> las
									<span className='font-semibold'> texturas del campo</span>
								</li>
								<li className='mb-2 leading-relaxed'>
									¿Cómo
									<span className='font-semibold'> nutrimos</span> el
									<span className='font-semibold'> campo?</span>
								</li>
								<li className='mb-2 leading-relaxed'>
									<span className='font-semibold'>Recoger</span> los
									<span className='font-semibold'> sembrados</span> en
									<span className='font-semibold'> cosecha</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='basis-2/5 grid place-content-center content-end py-2'>
					<img
						src={vectorHuerto}
						alt='Vector de un niño y una niña en el huerto regando las plantas'
						className='my-2 md:w-auto lg:w-auto w-80'
						tabIndex={0}
					/>
				</div>
			</section>
			<hr
				className='linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2'
				tabIndex={0}
			></hr>
			{/* Final sección en el huerto */}

			{/* Inicio Sección en la cocina */}
			<section className='flex md:flex-row lg:flex-row flex-col justify-end md:mt-24 lg:mt-24 mt-10'>
				<div className='basis-2/5 grid place-content-center content-end py-2'>
					<img
						src={vectorCocina}
						alt='Vector de un recipiente con ensalada de tomate, pepino, lechuga, cebolla y zanahoria'
						className='my-2 md:w-auto lg:w-auto w-64'
						tabIndex={0}
					/>
				</div>
				<div className='basis-2/5 grid place-items-center'>
					<div className='w-auto grid place-content-start'>
						<div className='grid place-content-center'>
							<img
								src={tiempoActividades}
								alt='Vector de un reloj'
								tabIndex={0}
							/>
							<h1
								className='md:text-xl lg:text-lg text-base text-gray-800 font-semibold'
								tabIndex={0}
							>
								1 HORA
							</h1>
						</div>
						<h1
							className='FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4'
							tabIndex={0}
						>
							EN LA COCINA
						</h1>
						<div>
							<ul
								className='font-normal md:text-xl lg:text-lg text-base text-gray-800 leading-relaxed md:text-right lg:text-right text-center'
								tabIndex={0}
							>
								<li className='mb-2 leading-relaxed'>
									{' '}
									¿Por qué
									<span className='font-semibold'> debemos</span> comer
									<span className='font-semibold'> saludable</span>?
								</li>
								<li className='mb-2 leading-relaxed'>
									<span className='font-semibold'>Conozcamos</span> más sobre
									los
									<span className='font-semibold'> alimentos "deli-sanos"</span>
								</li>
								<li className='mb-2 leading-relaxed'>
									<span className='font-semibold'>Preparación</span> de
									<span className='font-semibold'> ensaladas verdes</span> o con
									<span className='font-semibold'> frutas</span> más
									<span className='font-semibold'> aderezos</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<div className='flex justify-end'>
				<hr
					className='linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2'
					tabIndex={0}
				></hr>
			</div>
			{/* Final sección en la cocina */}

			{/* Inicio Sección almuerzo */}
			<section className='flex md:flex-row lg:flex-row flex-col justify-center md:mt-24 lg:mt-24 mt-10'>
				<div className='basis-2/5 grid place-items-center'>
					<div className='w-auto grid place-content-start'>
						<div className='grid place-content-center'>
							<img
								src={tiempoActividades}
								alt='Vector de un reloj'
								tabIndex={0}
							/>
							<h1
								className='md:text-xl lg:text-lg text-base text-gray-800 font-semibold'
								tabIndex={0}
							>
								30 MIN
							</h1>
						</div>
						<h1
							className='bg-blue-900 py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4'
							tabIndex={0}
						>
							ALMUERZO
						</h1>
						<div className='basis-2/5 grid place-content-center content-end py-2'>
							<img
								src={vectorAlmuerzo}
								alt='Vector de una mujer con discapacidad auditiva, almorzando saludablemente'
								className='my-2 md:w-auto lg:w-auto w-64'
								tabIndex={0}
							/>
						</div>
					</div>
				</div>
			</section>
			<hr
				className='linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2'
				tabIndex={0}
			></hr>
			{/* Final sección almuerzo */}

			{/* Inicio Sección descanso */}
			<section className='flex md:flex-row lg:flex-row flex-col justify-end md:mt-24 lg:mt-24 mt-10'>
				<div className='basis-2/5 grid place-content-center content-end py-2'>
					<img
						src={vectorDescanso}
						alt='Vector de un niño afrodescendiente en un césped mirando las gallinas'
						className='my-2 md:w-auto lg:w-auto w-80'
						tabIndex={0}
					/>
				</div>
				<div className='basis-2/5 grid place-items-center'>
					<div className='w-auto grid place-content-start'>
						<div className='grid place-content-center'>
							<img
								src={tiempoActividades}
								alt='Vector de un reloj'
								tabIndex={0}
							/>
							<h1
								className='md:text-xl lg:text-lg text-base text-gray-800 font-semibold'
								tabIndex={0}
							>
								30 MIN
							</h1>
						</div>
						<h1
							className='FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4'
							tabIndex={0}
						>
							DESCANSO
						</h1>
						<div className='max-w-md'>
							<p
								className='font-normal md:text-xl lg:text-lg text-base text-gray-800 leading-relaxed md:text-right lg:text-right text-center'
								tabIndex={0}
							>
								{' '}
								<span className='font-semibold'>Disfruta</span> del espacio,{' '}
								<span className='font-semibold'> visita</span> las instalaciones
								con
								<span className='font-semibold'> guías/maestras, </span>o si
								prefieres toma un
								<span className='font-semibold'> descanso </span>en un lugar
								<span className='font-semibold'>
									{' '}
									tranquilo, explora y relajate.{' '}
								</span>
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className='flex justify-end'>
				<hr
					className='linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2'
					tabIndex={0}
				></hr>
			</div>
			{/* Final sección descanso */}

			{/* Inicio Sección casa accesible, reciclaje y arte con reciclaje */}
			<section className='flex md:flex-row lg:flex-row flex-col justify-center md:mt-24 lg:mt-24 mt-10'>
				<div className='basis-1/3 grid place-items-center'>
					<div className='w-auto grid place-content-start'>
						<div className='grid place-content-center'>
							<img
								src={tiempoActividades}
								alt='Vector de un reloj'
								tabIndex={0}
							/>
							<h1
								className='md:text-xl lg:text-lg text-base text-gray-800 font-semibold'
								tabIndex={0}
							>
								30 MIN
							</h1>
						</div>
						<h1
							className='FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4'
							tabIndex={0}
						>
							TOUR CASA ACCESIBLE
						</h1>
						<div className='basis-1/3 grid place-content-center content-end py-2'>
							<img
								src={vectorCasaAccesible}
								alt='Vector de una casa sostenible y accesible, adicional un hombre en silla de ruedas subiendo por la rampla, hacia la casa.'
								className='my-2 md:w-auto lg:w-auto w-64'
								tabIndex={0}
							/>
						</div>
					</div>
				</div>
				<div className='basis-1/3 grid place-items-center'>
					<div className='w-auto grid place-content-start'>
						<div className='grid place-content-center'>
							<img
								src={tiempoActividades}
								alt='Vector de un reloj'
								tabIndex={0}
							/>
							<h1
								className='md:text-xl lg:text-lg text-base text-gray-800 font-semibold'
								tabIndex={0}
							>
								15 MIN
							</h1>
						</div>
						<h1
							className='bg-blue-900 py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4'
							tabIndex={0}
						>
							LECCIÓN SOBRE RECICLAJE
						</h1>
						<div className='basis-1/3 grid place-content-center content-end py-2'>
							<img
								src={vectorReciclaje}
								alt='Icono de reciclaje'
								className='my-2 md:w-auto lg:w-auto w-48'
								tabIndex={0}
							/>
						</div>
					</div>
				</div>
				<div className='basis-1/3 grid place-items-center'>
					<div className='w-auto grid place-content-start'>
						<div className='grid place-content-center'>
							<img
								src={tiempoActividades}
								alt='Vector de un reloj'
								tabIndex={0}
							/>
							<h1
								className='md:text-xl lg:text-lg text-base text-gray-800 font-semibold'
								tabIndex={0}
							>
								1 HORA
							</h1>
						</div>
						<h1
							className='FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4'
							tabIndex={0}
						>
							ARTE CON RECICLAJE
						</h1>
						<div className='basis-2/5 grid place-content-center content-end py-2'>
							<img
								src={vectorArteReciclaje}
								alt='Vector de unas manos realizando arte con reciclaje'
								className='my-2 md:w-auto lg:w-auto w-64'
								tabIndex={0}
							/>
						</div>
					</div>
				</div>
			</section>
			<hr
				className='linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2'
				tabIndex={0}
			></hr>
			{/* Final sección casa accesible, reciclaje y arte con reciclaje */}

			{/* Inicio Sección salida */}
			<section className='flex md:flex-row lg:flex-row flex-col justify-end md:mt-24 lg:mt-24 mt-10'>
				<div className='basis-2/5 grid place-content-center content-end py-2'>
					<img
						src={vectorSalida}
						alt='Vector de una niña como pasajera y un señor como conductor en un bus escolar'
						className='my-2 md:w-auto lg:w-auto w-56'
						tabIndex={0}
					/>
				</div>
				<div className='basis-2/5 grid place-items-center'>
					<div className='w-auto grid place-content-start'>
						<h1
							className='FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4'
							tabIndex={0}
						>
							SALIDA
						</h1>
						<div className='basis-2/5 grid place-content-center content-end py-2'>
							<img
								src={vectorRelojSalida}
								alt='Reloj indicando las 3:30pm'
								className='mt-2 md:w-auto lg:w-auto w-64'
								tabIndex={0}
							/>
						</div>
					</div>
				</div>
			</section>
			{/* Final sección salida */}
			<div className='bg-blue-900 md:p-3 md:flex hidden mt-8'>
				<ul className='text-white text-xs leading-relaxed' tabIndex={0}>
					<li>Fuentes:</li>
					<li>
						<a
							href='https://www.freepik.es/vector-gratis/ilustracion-concepto-pasta_21118033.htm#query=ALMUERZO&position=26&from_view=search&track=sph'
							target='_blank'
							rel='noreferrer'
						>
							https://www.freepik.es/vector-gratis/ilustracion-concepto-pasta_21118033.htm#query=ALMUERZO&position=26&from_view=search&track=sph
						</a>
					</li>
					<li>
						<a
							href='https://www.freepik.es/vector-gratis/autobus-escolar-ninos-diseno-plano_2325669.htm#page=2&query=BUS&position=14&from_view=search&track=sph'
							target='_blank'
							rel='noreferrer'
						>
							https://www.freepik.es/vector-gratis/autobus-escolar-ninos-diseno-plano_2325669.htm#page=2&query=BUS&position=14&from_view=search&track=sph
						</a>
					</li>
					<li>
						<a
							href='https://www.freepik.es/vector-gratis/dibujado-mano-gente-diseno-plano-agitando-ilustracion_20859175.htm#query=despedida&position=0&from_view=search&track=sph'
							target='_blank'
							rel='noreferrer'
						>
							https://www.freepik.es/vector-gratis/dibujado-mano-gente-diseno-plano-agitando-ilustracion_20859175.htm#query=despedida&position=0&from_view=search&track=sph
						</a>
					</li>
					<li>
						<a
							href='https://www.freepik.es/vector-gratis/ilustracion-personaje-dibujos-animados-aislado-grande-ninos-lindos-que-cultivan-huerto-jardin-fuera-casa-ilustracion-plana_12953903.htm#query=huerto&position=1&from_view=search&track=sphhttps://www.freepik.es/vector-gratis/conjunto-iconos-planos-discapacitados-discapacitados_3910281.htm#query=discapacidad%20baille&position=20&from_view=search&track=ais'
							target='_blank'
							rel='noreferrer'
						>
							https://www.freepik.es/vector-gratis/ilustracion-personaje-dibujos-animados-aislado-grande-ninos-lindos-que-cultivan-huerto-jardin-fuera-casa-ilustracion-plana_12953903.htm#query=huerto&position=1&from_view=search&track=sph
						</a>
					</li>
					<li>
						<a
							href='https://www.freepik.es/vector-gratis/ilustracion-personaje-dibujos-animados-aislado-grande-ninos-lindos-que-cultivan-huerto-jardin-fuera-casa-ilustracion-plana_12953928.htm#query=huerto&position=8&from_view=search&track=sph'
							target='_blank'
							rel='noreferrer'
						>
							https://www.freepik.es/vector-gratis/ilustracion-personaje-dibujos-animados-aislado-grande-ninos-lindos-que-cultivan-huerto-jardin-fuera-casa-ilustracion-plana_12953928.htm#query=huerto&position=8&from_view=search&track=sph
						</a>
					</li>
					<li>
						<a
							href='https://www.freepik.es/vector-gratis/frutas-ensaladeras-diseno-dibujado-mano_7474818.htm#query=ensalada&position=5&from_view=search&track=sph'
							target='_blank'
							rel='noreferrer'
						>
							https://www.freepik.es/vector-gratis/frutas-ensaladeras-diseno-dibujado-mano_7474818.htm#query=ensalada&position=5&from_view=search&track=sph
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};
