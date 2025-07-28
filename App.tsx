import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import BookingForm from './components/BookingForm.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;