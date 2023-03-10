import { useTranslation } from 'react-i18next';

export const Traductor = () => {
	// eslint-disable-next-line no-unused-vars
	const [t, i18n] = useTranslation('global');

	return (
		<div className='flex justify-center'>
			<div className='flex-row my-auto'>
				<button
					onClick={() => i18n.changeLanguage('es')}
					className='cursor-pointer text-white ring-pink-600 bg-pink-600 rounded-full p-2 font-medium md:text-sm lg:text-sm text-xs m-1 md:w-9 md:h-9 lg:w-9 lg:h-9 w-8 h-8'
				>
					ES
				</button>
				<button
					onClick={() => i18n.changeLanguage('en')}
					className='cursor-pointer text-white ring-blue-900 bg-blue-900  rounded-full p-2 font-medium md:text-sm lg:text-sm text-xs m-1 md:h-9 lg:w-9 lg:h-9 w-8 h-8'
				>
					EN
				</button>
			</div>
		</div>
	);
};
