import React from 'react';
import { Step1Icon, Step2Icon, Step3Icon } from './icons/StepIcons.tsx';

const Step = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white text-cyan-600 shadow-lg">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);


const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">خطوات بسيطة لخدمة ممتازة</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">تجربة طلب الخدمة أسهل من أي وقت مضى.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 left-0 h-0.5 bg-cyan-200"></div>
          <div className="relative">
            <Step
              icon={<Step1Icon />}
              title="1. اطلب الخدمة"
              description="املأ النموذج ببياناتك والخدمة المطلوبة في أقل من دقيقة."
            />
          </div>
          <div className="relative">
             <Step
              icon={<Step2Icon />}
              title="2. نؤكد الموعد"
              description="سيتصل بك فريقنا لتأكيد تفاصيل الموعد والخدمة."
            />
          </div>
          <div className="relative">
            <Step
              icon={<Step3Icon />}
              title="3. نصل إليك"
              description="يصلك الفني في الموعد المحدد لتقديم الخدمة باحترافية."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;