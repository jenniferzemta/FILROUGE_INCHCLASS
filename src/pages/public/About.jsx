import React from "react";

const About = () => {
  return (
    <div className="font-sans">
      {/* Navbar (identique à Home) */}

      {/* Hero About */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Notre mission</h1>
          <p className="text-xl">Faciliter l'éducation grâce à la technologie.</p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 container mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Qui sommes-nous ?</h2>
          <p className="text-gray-700">
            AcademicFlow est né en 2023 pour répondre aux défis de gestion des établissements d'enseignement supérieur.
            Notre plateforme unifie les processus académiques et de stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          {[
            { number: "50+", label: "Établissements partenaires" },
            { number: "10K+", label: "Utilisateurs actifs" },
            { number: "100%", label: "Satisfaction des RA" }
          ].map((item, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <p className="text-4xl font-bold text-blue-600 mb-2">{item.number}</p>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer (identique) */}
    </div>
  );
};

export default About;