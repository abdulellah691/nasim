import React from 'react';
import { LANDLINE_NUMBER, PHONE_NUMBER, WHATSAPP_NUMBER } from '../constants.tsx';
import { LandlineIcon, PhoneIcon, WhatsAppIcon } from './icons/ContactIcons.tsx';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <WhatsAppIcon className="w-8 h-8"/>,
      title: 'واتساب',
      info: WHATSAPP_NUMBER,
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      actionText: 'أرسل رسالة'
    },
    {
      icon: <PhoneIcon className="w-8 h-8"/>,
      title: 'الجوال',
      info: PHONE_NUMBER,
      href: `tel:${PHONE_NUMBER}`,
      actionText: 'اتصل الآن'
    },
    {
      icon: <LandlineIcon className="w-8 h-8"/>,
      title: 'الهاتف الثابت',
      info: LANDLINE_NUMBER,
      href: `tel:${LANDLINE_NUMBER}`,
      actionText: 'اتصل الآن'
    }
  ]
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">تواصل معنا مباشرة</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">نحن هنا لمساعدتك. اختر الطريقة الأنسب لك للتواصل معنا.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method) => (
            <a href={method.href} target="_blank" rel="noopener noreferrer" key={method.title} className="bg-slate-700 p-8 rounded-xl flex flex-col items-center text-center group hover:bg-cyan-600 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-cyan-400 group-hover:text-white transition-colors duration-300 mb-4">{method.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
              <p className="text-xl font-light text-slate-300 group-hover:text-white mb-4" dir="ltr">{method.info}</p>
              <span className="mt-auto bg-slate-600 group-hover:bg-white group-hover:text-cyan-600 text-white font-bold py-2 px-5 rounded-full transition-all duration-300">
                {method.actionText}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;