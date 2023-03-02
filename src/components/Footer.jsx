import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const [t] = useTranslation('global');
  return (
    <footer className="p-4 bg-blue-900 shadow md:px-6 md:py-8 text-center" tabIndex={0}>
      <span className="md:text-sm text-xs text-white" tabIndex={0}>
        © 2023 La Finca de Todos. {t('footer.footer')}
      </span>
    </footer>
  );
};
