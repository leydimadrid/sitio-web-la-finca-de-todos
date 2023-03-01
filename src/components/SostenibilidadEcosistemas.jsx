import imagen from "../assets/images/icono-vida-ecosistemas-terrestres.svg"

export const SostenibilidadEcosistemas = () => {
	return (
		<section className='mt-6 max-w-sm p-4'>
			<div className='bg-white'>
				<div className='cardSostenibilidad max-w-sm rounded shadow-lg'>
					<div className='px-6 py-4 flex justify-center'>
						<img className='rounded-full shadow-lg' src={imagen} alt="Icono vida de ecosistemas terrestres" tabIndex={0} />
					</div>
					<div className='px-4 py-2 text-center'>
						<p className='font-bold text-lg text-gray-800 leading-normal' tabIndex={0}>
                        Construcción que respeta al terreno existente para promover y proteger la biodiversidad.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};