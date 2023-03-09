export const VideoInicio = () => {
	return (
		<>
			<section className='pt-10 md:px-40 px-5 md:pt-6'>
				<div className='flex justify-center md:mb-4 mb-4 shadow-md'>
					<iframe
						className='md:max-w-full lg:max-w-full sm:max-w-full xl:max-w-full max-w-xs max-h-44 md:max-h-96 lg:max-h-96 sm:max-h-96 xl:max-h-full'
						width='1490'
						height='840'
						src='https://www.youtube.com/embed/WHID4wFqkpc'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen
					></iframe>
				</div>
			</section>
		</>
	);
};
