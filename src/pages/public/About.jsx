import React from "react";
import Navbar from "../../components/layouts/Navbar";
import logcon from './../../assets/contact1.jpg';
import { AcademicCapIcon, LightBulbIcon, ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  CheckBadgeIcon  } from "@heroicons/react/24/outline";


const About = () => {

  const processSteps = [
    {
      icon: <ChatBubbleBottomCenterTextIcon className="w-10 h-10" />,
      title: "Consultation",
      description: "We discuss your needs and goals to understand your requirements",
      color: " bg-opacity-30 bg-[#0923EB]  text-[#0927EB]"
    },
    
    {
      icon: <Cog6ToothIcon className="w-10 h-10" />,
      title: "Implementation",
      description: "Our team executes the plan with precision and expertise",
      color: "bg-opacity-30 bg-[#FD6E47]  text-[#FD6E47]"
    },
    {
      icon: <CheckBadgeIcon className="w-10 h-10" />,
      title: "Final Result",
      description: "We deliver exceptional results that exceed expectations",
      color: " bg-opacity-30 bg-[#16A637]  text-[#16A637]"
    }
  ];

  return (
    <div className="font-sans">
      <Navbar/>
      
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[200px] md:h-[40vh] lg:h-[50vh] xl:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {/* Image avec effet sombre à droite */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${logcon})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center right', // Focus sur la droite
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.7) contrast(1.1)'
            }}
          ></div>
          
          {/* Overlay gradient asymétrique */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#000039]/90 via-[#000039]/50 to-transparent"
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-xl">
            À propos
          </h1>
          <div className="flex items-center justify-center text-gray-200 text-sm sm:text-base md:text-lg">
            <a href="/" className="hover:text-white transition-colors duration-200">Accueil</a>
            <span className="mx-2 sm:mx-3">/</span>
            <span className="text-white font-medium">À propos</span>
          </div>
        </div>
      </section>

    {/* Section Mission & Vision */}
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Mission */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
          <div className="flex items-center mb-4">
            <div className="bg-[#0927EB] p-2 rounded-lg mr-3">
              <AcademicCapIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg md:text-xl font-bold text-gray-700">
              Notre Mission
            </h2>
          </div>
          <p className="text-[#0B2238] opacity-60 font-serif text-sm md:text-sm"> {/* pl-11 pour l'alignement avec l'icône */}
            Transformer l'éducation supérieure grâce à des solutions innovantes qui simplifient 
            la gestion académique et renforcent les liens entre les étudiants, les enseignants 
            et les entreprises partenaires.
          </p>
        </div>
        
        {/* Vision */}
        <div className="bg-white p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
          <div className="flex items-center mb-4">
            <div className="bg-[#0927EB] p-2 rounded-lg mr-3">
              <LightBulbIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg md:text-xl font-bold text-[#000039]">
              Notre Vision
            </h2>
          </div>
          <p className=" text-[#0B2238] opacity-60 font-serif text-sm md:text-sm">
            Devenir la plateforme de référence pour l'écosystème académique, en offrant une 
            expérience unifiée qui optimise les processus éducatifs et favorise 
            l'employabilité des étudiants.
          </p>
        </div>
      </div>
    </section>

      {/* Section Vidéo */}
      <section className="relative py-5 md:py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
  {/* Conteneur Vidéo */}
  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg mb-4">
    <iframe 
      className="w-full h-64 sm:h-80 md:h-96"
      src="https://www.youtube.com/embed/video-id" 
      title="Présentation de notre entreprise"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>

  {/* Conteneur Statistiques - Positionné en overlay partiel */}
  <div className="relative bg-[#000036] rounded-lg shadow-xl mx-auto -mt-8 md:-mt-10 lg:-mt-12 ml-8 md:ml-10 lg:ml-6 ml-6 max-w-4xl py-4 px-2">
    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/60">
      <div className="px-2 py-1 text-center">
        <p className="text-2xl md:text-4xl font-bold text-white">50+</p>
        <p className="text-base text-white/90">Établissements</p>
      </div>
      <div className="px-2 py-1 text-center">
        <p className="text-2xl md:text-4xl font-bold text-white">10K+</p>
        <p className="text-base text-white/90">Étudiants</p>
      </div>
      <div className="px-2 py-1 text-center">
        <p className="text-2xl md:text-4xl font-bold text-white">500+</p>
        <p className="text-base text-white/90">Entreprises</p>
      </div>
      <div className="px-2 py-1 text-center">
        <p className="text-2xl md:text-4xl font-bold text-white">95%</p>
        <p className="text-base text-white/90">Satisfaction</p>
      </div>
    </div>
  </div>
</section>

    

    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-2xl font-bold text-[#0927EB] normal-case mb-4">
            Notre Processus
          </h2>
          <p className="text-lg text-gray-500 font-serif max-w-2xl mx-auto">
            A systematic approach that delivers consistent, high-quality results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl gap-10 md:ml-20 lg:ml-1">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className={`absolute -top-6 left-6 w-14 h-14 ${step.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                {step.title}
              </h3>
              <p className="text-[#0B2238] font-serif opacity-60">
                {step.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Connecting line for desktop */}
        <div className="hidden lg:flex items-center justify-between px-10 mt-8">
          {processSteps.map((_, index) => (
            <React.Fragment key={index}>
              <div className="w-8 h-8 rounded-full bg-white border-4 border-gray-300"></div>
              {index < processSteps.length - 1 && (
                <div className="flex-1 h-1 bg-gray-200"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
    </div>

  );
};

export default About;