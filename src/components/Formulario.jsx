import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Error from './Error';
import MensajeEnviado from '../components/MensajeEnviado';
import { useTranslation } from 'react-i18next';

export const Formulario = () => {
	const [t] = useTranslation('global');
	const [error, setError] = useState(false);
	const [enviado, setEnviado] = useState(false);

	const [nombre, setNombre] = useState('');
	const [contacto, setContacto] = useState('');
	const [mensaje, setMensaje] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		if ([nombre, contacto, mensaje].includes('')) {
			setError(true);
			return;
		}

		setNombre('');
		setContacto('');
		setMensaje('');

		setError(false);

		emailjs
			.sendForm(
				'service_35mx0t7',
				'template_y63tqvl',
				e.target,
				'hOByMRfajx3LnyXzm'
			)
			.then(response => {
				if (response.status === 200) {
					setEnviado(true);
				}
			})
			.catch(error => console.log(error));
	};

	return (
		<div className='mt-8 flex justify-center'>
			<form onSubmit={handleSubmit} className='w-full flex flex-col space-y-3'>
				<div>
					<label
						htmlFor='nombre_usuario'
						className='titulo text-gray-700 md:text-md lg:text-md text-sm font-bold leading-relaxed'
					>
						{t('contactUs.label-1')}
					</label>
				</div>
				<div>
					<input
						id='nombre_usuario'
						type='text'
						name='nombre_usuario'
						aria-required='true'
						placeholder={t('contactUs.placeHolder-1')}
						className='titulo leading-relaxed w-full ring-2 ring-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4'
						value={nombre}
						onChange={e => setNombre(e.target.value)}
					/>
				</div>

				<div>
					<label
						htmlFor='contacto_usuario'
						className='titulo text-gray-700 md:text-md lg:text-md text-sm font-bold leading-relaxed'
					>
						{t('contactUs.label-2')}
					</label>
				</div>
				<div className='mt-2'>
					<input
						id='contacto_usuario'
						name='contacto_usuario'
						aria-required='true'
						placeholder={t('contactUs.placeHolder-2')}
						className='titulo leading-relaxed w-full ring-2 ring-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4'
						value={contacto}
						onChange={e => setContacto(e.target.value)}
					/>
				</div>

				<div>
					<label
						htmlFor='mensaje_usuario'
						className='titulo leading-relaxed text-gray-700 md:text-md lg:text-md text-sm font-bold'
					>
						{t('contactUs.label-3')}
					</label>
				</div>
				<div className='mt-2'>
					<textarea
						id='mensaje_usuario'
						name='mensaje_usuario'
						aria-required='true'
						className='titulo leading-relaxed w-full ring-2 ring-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4'
						value={mensaje}
						onChange={e => setMensaje(e.target.value)}
					/>
				</div>
				<input
					type='submit'
					className='titulo leading-relaxed inline-block px-6 py-4 bg-blue-900 text-white font-semibold rounded-lg text-sm uppercase'
					value={t('contactUs.buttonForm')}
				/>
				<div className='titulo'>{error && <Error />}</div>
				<div className='titulo'>{enviado && <MensajeEnviado />}</div>
			</form>
		</div>
	);
};
