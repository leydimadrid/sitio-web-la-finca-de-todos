import imagen from '../assets/images/icono-reduccion-desigualdades.svg';

export const SostenibilidadReduccionDesigualdades = () => {
	return (
		<section className='mt-6 max-w-sm p-4'>
			<div className='bg-white'>
				<div className='cardSostenibilidad max-w-sm rounded shadow-lg'>
					<div className='px-6 py-4 flex justify-center'>
						<img
							className='rounded-full shadow-lg'
							src={imagen}
							alt='Icono reduccion de las desigualdades'
							tabIndex={0}
						/>
					</div>
					<div className='px-4 py-2 text-center'>
						<p
							className='font-bold text-lg text-gray-800 leading-normal'
							tabIndex={0}
						>
							Creación de empleos para personas con discapacidades promoviendo
							el crecimiento económico inclusivo y sostenible.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
