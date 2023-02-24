/* eslint-disable react/prop-types */
export const CardsTalleres = ({ imagen, titulo, parrafo, alt }) => {
	return (
		<section className='p-4'>
			<div className='bg-white '>
				<div className='fondoCardsActividades md:flex flex-row items-center rounded-lg shadow-lg md:max-w-5xl '>
					<div className=' flex flex-wrap items-center p-6 leading-normal'>
						<h5 className='mb-2 md:text-2xl text-lg font-bold tracking-tight text-blue-900 leading-relaxed' tabIndex={0}>
							{titulo}
						</h5>
						<div className='font-normal md:text-xl text-base text-gray-800'>
							<p className='leading-relaxed' tabIndex={0}>{parrafo}</p>
						</div>
					</div>
					<img
						className='md:w-auto w-full rounded-b-lg md:rounded-r-lg'
						src={imagen}
						alt={alt}
						tabIndex={0}
					/>
				</div>
			</div>
		</section>
	);
};
