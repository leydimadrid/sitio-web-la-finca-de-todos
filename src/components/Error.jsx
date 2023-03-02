import { useTranslation } from 'react-i18next';

const Error = () => {
  const [t] = useTranslation('global');
    return (
      <div className="bg-blue-100 text-blue-800 rounded-md p-2 text-sm mt-2 font-bold text-center" tabIndex={0}>😕 {t('contactUs.error')}</div>
    );
  };
  
  export default Error;
