
import React from 'react';
import { SERVICES } from '../constants.tsx';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">خدماتنا الاحترافية</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">نقدم مجموعة متكاملة من الخدمات لضمان عمل مكيفك بكفاءة عالية على مدار الساعة.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-100 text-cyan-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;