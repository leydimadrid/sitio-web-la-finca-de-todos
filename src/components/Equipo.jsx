import equipo1 from '../assets/images/equipo1.jpg';
import equipo2 from '../assets/images/equipo2.jpg';
import { useTranslation } from 'react-i18next';

export const Equipo = () => {
	const [t] = useTranslation('global');

	return (
		<section className='equipo'>
			<div id='contenedor'>
				<h1
					className='font-bold md:text-2xl text-xl text-center mt-12 text-gray-800'
					tabIndex={0}
				>
					{t('team.team')}
				</h1>
				<hr className='linea-fucsia mx-auto mt-2' tabIndex={0}></hr>
				<div className='equipo flex flex-col items-center md:flex-row md:max-w-6xl md:text-xl text-base'>
					<img
						className='object-cover w-full h-auto md:h-auto md:w-auto rounded-md md:mr-14 shadow-md'
						src={equipo1}
						alt='foto Lissette Ortegon'
						tabIndex={0}
					/>
					<div className='flex flex-col p-4 leading-normal'>
						<h1
							className='mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-800 leading-relaxed'
							tabIndex={0}
						>
							Lissette Ortegon
						</h1>
						<ul
							className='ml-4 list-disc font-normal md:text-xl lg:text-lg text-base text-gray-800 leading-relaxed'
							tabIndex={0}
						>
							<li className='mb-2 leading-relaxed'> {t('team.projectCreator')}</li>
							<li className='mb-2 leading-relaxed'>
							{t('team.title-1-Lissette')}
							</li>
							<li className='mb-2 leading-relaxed'>
							{t('team.title-2-Lissette')}
							</li>
							<li className='leading-relaxed'>
							{t('team.title-3-Lissette')}
							</li>
						</ul>
					</div>
				</div>
				<div className='equipo flex flex-col items-center md:flex-row md:max-w-6xl md:text-xl text-base'>
					<img
						className='object-cover w-full h-auto md:h-auto md:w-auto rounded-md md:mr-14 shadow-md'
						src={equipo2}
						alt='foto Fabiola Velez'
						tabIndex={0}
					/>
					<div className='flex flex-col p-4 leading-normal'>
						<h1
							className='mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-800 leading-relaxed'
							tabIndex={0}
						>
							Fabiola Velez
						</h1>
						<ul
							className='ml-4 list-disc font-normal md:text-xl lg:text-lg  text-base text-gray-800 leading-relaxed'
							tabIndex={0}
						>
							<li className='mb-2 leading-relaxed'>
								{' '}
								{t('team.title-1-Fabiola')}
							</li>
							<li className='mb-2 leading-relaxed'>
							{t('team.title-2-Fabiola')}
							</li>
							<li className='leading-relaxed'>
							{t('team.title-3-Fabiola')}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
