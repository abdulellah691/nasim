
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {currentYear} تقنية النسيم. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
