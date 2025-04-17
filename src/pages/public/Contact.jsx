import React from "react";
import Navbar from "../../components/layouts/Navbar";
import logcon from './../../assets/contact1.jpg';


const Contact = () => {
  return (
    <div className="font-sans ">
      {/* Navbar */}
      {/* <nav className="bg-[#0927eb] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">AcademicFlow</span>
          </div>
      
        </div>
      </nav> */}
<Navbar/>
  
      {/* Hero simple */}

          <section className="relative h-[40vh] min-h-[300px] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Conteneur image + overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Image responsive - charge la taille adaptée selon l'écran */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{   backgroundImage: `url(${logcon})`,backgroundSize: 'cover', backgroundPosition: 'center center',  backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Overlay dynamique */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000039] via-[#1d2951]/15 to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Contenu centré responsive */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
        <h1 className="text-3xl xs:text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-3 md:mb-4 drop-shadow-xl">
          Contactez-nous
        </h1>
        
        <div className="flex items-center justify-center text-gray-200 text-sm sm:text-base md:text-lg">
          <a href="/" className="hover:text-white transition-colors duration-200">Accueil</a>
          <span className="mx-2 sm:mx-3">/</span>
          <span className="text-white font-medium">Contact</span>
        </div>
      </div>
    </section>
      
      {/* <section className="relative bg-[#0927eb] h-72 flex  items-center justify-center"> */}
      {/* <section 
    className="relative h-72 flex items-center justify-center"
    style={{
      background: `
        linear-gradient(135deg, rgba(9, 39, 235, 0.9) 0%, rgba(82, 109, 255, 0.7) 100%),
        url() center/cover no-repeat
      `,
    }}
  >
        <div className=" absolute text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl">Nous sommes là pour répondre à vos questions</p>
        </div>
      </section> */}
{/* Formulaire compact */}
<div className="container bg-white  p-10 mx-auto max-w-4xl px-4">
  <div className="relative  overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Colonne gauche - Infos avec couleur */}
      <div className="bg-[#000025] shadow-lg rounded-2xl max-w- border bg-opacity-90 text-white p-8">
        <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>
        
        <div className="space-y-8">
          <div>
            <h4 className="font-bold">Adresse</h4>
            <p>123 Rue des Universités, Paris</p>
          </div>
          
          <div>
            <h4 className="font-bold">Contact</h4>
            <p>contact@academicflow.fr</p>
            <p>+33 1 23 45 67 89</p>
          </div>
          
          <div>
            <h4 className="font-bold">Horaires</h4>
            <p>Lun-Ven : 9h-18h</p>
          </div>

          {/* Élément visuel supplémentaire */}
          <div className="pt-6 mt-2 border-t border-white border-opacity-20">
            <h4 className="font-bold mb-3">Restons connectés</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#0927EB] hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="text-[#0927EB] hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-[#0927EB] hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Colonne droite - Formulaire avec opacité */}
      <div className="bg-white bg-opacity-90 p-8 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-[#0927eb] mb-6">Nous <span className="text-[#152259]">Contactez</span></h3> 
        
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input 
                id="nom"
                type="text" 
                className="w-full p-3  bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0927eb]/50 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
              <input 
                id="prenom"
                type="text" 
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0927eb]/50 focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              id="email"
              type="email" 
              className="w-full p-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0927eb]/50 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service concerné</label>
            <select 
              id="service"
              className="w-full p-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0927eb]/50 focus:border-transparent"
            >
              <option>Sélectionnez un service</option>
              <option>Gestion académique</option>
              <option>Offres de stage</option>
              <option>Support technique</option>
            </select>
          </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              id="message"
              rows="4"
              className="w-full bg-gray-100 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0927eb]/50 focus:border-transparent"
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="w-32 bg-[#0927eb] text-white px-6 py-3 rounded-xl hover:bg-[#1a38f0] transition-colors"
          >
            Envoyer 
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

      {/* Section Carte */}
      <div className="container mx-auto max-w-7xl">
        <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.99144060821!2d2.292292615509614!3d48.85837360866185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

     
    </div>
  );
};

export default Contact;