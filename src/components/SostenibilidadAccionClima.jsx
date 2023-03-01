import imagen from "../assets/images/icono-accion-por-el-clima.svg"

export const SostenibilidadAccionClima = () => {
	return (
		<section className='mt-6 max-w-sm p-4'>
			<div className='bg-white'>
				<div className='cardSostenibilidad max-w-sm rounded shadow-lg'>
					<div className='px-6 py-4 flex justify-center'>
						<img className='rounded-full shadow-lg' src={imagen} alt="Icono accion por el clima" tabIndex={0} />
					</div>
					<div className='px-4 py-2 text-center'>
						<p className='font-bold text-lg text-gray-800 leading-normal' tabIndex={0}>
                        Reciclaje de aguas de lluvia para uso en el riego de siembras, la limpieza y los inodoros.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};