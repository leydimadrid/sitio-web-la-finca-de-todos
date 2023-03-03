import { useTranslation } from 'react-i18next';

const MensajeEnviado = () => {
  const [t] = useTranslation('global');
    return (
      <div className=" ring-1 ring-pink-600 text-pink-600 rounded-md p-2 text-sm mt-2 font-bold text-center">{t('contactUs.messageSent')} 😀</div>
    );
  };
  
  export default MensajeEnviado;
