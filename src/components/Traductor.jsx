import { useTranslation } from 'react-i18next';

export const Traductor = () => {
	// eslint-disable-next-line no-unused-vars
	const [t, i18n] = useTranslation('global');

	return (
		<div className='flex justify-center '>
			<div className='flex-row flex space-x-3 mb-2 bg-white'>
				<button
					onClick={() => i18n.changeLanguage('es')}
					className='cursor-pointer text-white ring-2 ring-blue-900 bg-blue-900 rounded-sm p-1 font-medium'
				>
					ES
				</button>
				<button
					onClick={() => i18n.changeLanguage('en')}
					className='cursor-pointer text-white ring-2 ring-blue-900 bg-blue-900  rounded-sm p-1 font-medium'
				>
					EN
				</button>
			</div>
		</div>
	);
};
