/* eslint-disable react/no-unknown-property */
export const VideoFinca = () => {
	return (
		<section className='md:px-40 px-5 md:mt-10 mt-10'>
			<div className='flex justify-center md:mb-2 mb-2 shadow-md'>
				<iframe
				className="md:max-w-full lg:max-w-full sm:max-w-full xl:max-w-full max-w-xs max-h-40 md:max-h-80 lg:max-h-80 sm:max-h-80 xl:max-h-full"
					width='1490'
					height='839'
					src='https://www.youtube.com/embed/GtDCd-yA6oE'
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen
				></iframe>
			</div>
		</section>
	);
};
