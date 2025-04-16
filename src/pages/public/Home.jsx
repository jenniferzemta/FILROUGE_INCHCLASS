import React from "react";
import Navbar from "../../components/layouts/Navbar";
import { Button } from '@mui/material';
import { School, Groups, Assignment, CalendarToday } from '@mui/icons-material';
import { styled } from '@mui/system';
import home from './../../assets/home.jpg';
import { useEffect } from 'react';






// Composant stylisé avec MUI
const OrangeButton = styled(Button)({
  backgroundColor: '#FD6E47',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '8px',

  '&:hover': {
    backgroundColor: 'white',
    color: '#FD6E47'
  }
});

const Home = () => {

      // Animation de flash après 2 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      const section = document.getElementById('hero-section');
      section.classList.add('animate-flash');
      setTimeout(() => section.classList.remove('animate-flash'), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans">
    <Navbar/>

      {/* Hero Section */}
 
    <section 
      id="hero-section"
      className="relative h-screen max-h-[800px] text-white overflow-hidden transition-all duration-500"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img
          src={home} // Remplacez par votre image
          alt="Administration universitaire"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0927EB]/90 via-[#0927EB]/50 to-transparent"></div>
      </div>

      {/* Contenu */}
      <div className="container mx-auto h-full flex items-center relative z-10">
        <div className="w-full md:w-1/2 px-6 lg:px-12 py-20">
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight animate-fadeIn">
            Simplifiez la gestion académique et des stages
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-lg animate-fadeIn delay-100">
            Une plateforme tout-en-un pour les responsables, enseignants et étudiants.
          </p>
          
          <Button
            variant="contained"
            startIcon={<School />}
            sx={{
              backgroundColor: '#FD6E47',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'white',
                color: '#FD6E47',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.3s ease',
              animation: 'fadeIn 0.5s ease-out 0.2s both'
            }}
          >
            Commencer
          </Button>
        </div>
      </div>

      {/* Styles d'animation */}
      <style jsx global>{`
        @keyframes flash {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-flash {
          animation: flash 0.5s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </section>
 
{/*  */}
  
    

      {/* CTA Final */}
      <section className="py-16 bg-gray-100 px-5 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Prêt à révolutionner votre gestion académique ?</h2>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-100">
            Nous contacter
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto text-center">
          <p>© 2024 AcademicFlow. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;