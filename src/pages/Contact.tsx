import React from 'react';
import HeroImage from '../components/hero-image/HeroImage';
import contactHero from "../assets/contact/contactHero.webp";
import ContactForm from '../components/form/ContactForm';

const Contact = () => {
  return (
    <header>
      <HeroImage
        title='Kontakta oss'
        subtitle='Har du några frågor? Fyll i formuläret nedan så hör vi av oss!'
        image={contactHero}
        showIcon={false} // Dölj pilikonen
      >
        <ContactForm/>
      </HeroImage>
    </header>
  );
};

export default Contact;
