export const VideoInicio = () => {
	return (
		<>
			<section className='pt-10 md:px-40 px-5 md:pt-6'>
				<div className='flex justify-center md:mb-4 mb-4 shadow-md'>
					<iframe
						width='1490'
						height='839'
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
