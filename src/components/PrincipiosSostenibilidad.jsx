/* eslint-disable react/prop-types */

export const PrincipiosSostenibilidad = ({ imagen, parrafo, alt }) => {
	return (
		<section className='mt-6 max-w-sm p-4'>
			<div className='bg-white'>
				<div className='cardSostenibilidad max-w-sm rounded shadow-lg'>
					<div className='px-6 py-4 flex justify-center'>
						<img className='rounded-full shadow-lg' src={imagen} alt={alt} />
					</div>
					<div className='px-4 py-2 text-center'>
						<p className='font-bold text-lg text-gray-800 leading-normal'>
							{parrafo}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
