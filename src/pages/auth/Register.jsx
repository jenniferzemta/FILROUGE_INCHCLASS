import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import logo from './../../assets/logo.png';
import { GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  role: yup.string().required('Veuillez sélectionner un rôle'),
  nom: yup.string().required('Veuillez entrer votre nom'),
  prenom: yup.string().required('Veuillez entrer votre prénom'),
  email: yup.string().email('Email invalide').required('Email requis'),
  password: yup.string().min(6, 'Minimum 6 caractères').required('Mot de passe requis'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas'),
  numeroBadge: yup.string().when('role', {
    is: (role) => ['ra', 'rs'].includes(role),
    then: yup.string().required('Numéro de badge requis'),
  }),
  matriculeEnseignant: yup.string().when('role', {
    is: 'prof',
    then: yup.string().required('Matricule enseignant requis'),
  }),
  matriculeEtudiant: yup.string().when('role', {
    is: 'etudiant',
    then: yup.string().required('Matricule étudiant requis'),
  }),
});

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [photoPreview, setPhotoPreview] = useState(null);
  const role = watch('role');

  const onSubmit = (data) => {
    toast.success('Inscription réussie !');
    console.log(data);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhotoPreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-[#0927EB] to-[#00C6FB]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full m-10 max-w-sm border border-gray-100 m-4">
        {/* Logo mis en valeur */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-white overflow-hidden">
            <img src={logo} className="w-full h-full object-contain " alt="logo"/>
          </div>
          <h1 className="text-3xl font-bold pb-4 text-gray-800 mt-4 font-sans">
            Créer un compte
          </h1>
          <p className="text-gray-500 font-sans mt-2">Rejoignez notre communauté académique</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Champ Role avec nouvelle section Remember me */}
          <div className="space-y-4">
            <div>
              <label className="block pb-2 text-sm font-medium text-gray-700 mb-1">
                Vous êtes 
              </label>
              <select
                {...register('role')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="">Sélectionnez votre rôle</option>
                <option value="etudiant">Étudiant</option>
                <option value="prof">Enseignant</option>
                <option value="ra">Responsable Académique</option>
                <option value="rs">Responsable de Stage</option>
              </select>
              {errors.role && (
                <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
              )}
            </div>

            {/* Nouvelle section Remember me ajoutée ici */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Se souvenir de moi
              </label>
            </div>
          </div>

  {/* Champs Conditionnels */}
  {role === 'ra' || role === 'rs' ? (
            <div>
              <label className="block text-sm  pb-2 font-medium text-gray-700 mb-1">
                Numéro de badge {role === 'ra' ? '(RA)' : '(RS)'} 
              </label>
              <input
                {...register('numeroBadge')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              {errors.numeroBadge && (
                <p className="mt-1 text-sm text-red-600">{errors.numeroBadge.message}</p>
              )}
            </div>
          ) : null}

          {role === 'prof' && (
            <div>
              <label className="block text-sm  pb-2 font-medium text-gray-700 mb-1">
                Matricule 
              </label>
              <input
                {...register('matriculeEnseignant')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              {errors.matriculeEnseignant && (
                <p className="mt-1 text-sm text-red-600">{errors.matriculeEnseignant.message}</p>
              )}
            </div>
          )}

          {role === 'etudiant' && (
            <div>
              <label className="block text-sm  pb-2 font-medium text-gray-700 mb-1">
                Matricule 
              </label>
              <input
                {...register('matriculeEtudiant')}
                className="w-full px-4 py-2  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              {errors.matriculeEtudiant && (
                <p className="mt-1 text-sm text-red-600">{errors.matriculeEtudiant.message}</p>
              )}
            </div>
          )}
          {/* Champs Communs */}
          <div className="grid grid-cols-2 font-sans gap-8">
            <div>
              <label className="block pb-2 text-sm font-medium text-gray-700 mb-1">
                Nom 
              </label>
              <input
                {...register('nom')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              {errors.nom && (
                <p className="mt-1 text-sm text-red-600">{errors.nom.message}</p>
              )}
            </div>
            <div>
              <label className="block pb-2 text-sm font-medium text-gray-700 mb-1">
                Prénom 
              </label>
              <input
                {...register('prenom')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              {errors.prenom && (
                <p className="mt-1 text-sm text-red-600">{errors.prenom.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block pb-2 text-sm font-medium text-gray-700 mb-1">
              Email 
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2  font-sans gap-4">
            <div>
              <label className="block pb-2 text-sm font-medium text-gray-700 mb-1">
                Mot de passe 
              </label>
              <input
                {...register('password')}
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
            <div>
              <label className="block pb-2 text-sm font-medium text-gray-700 mb-1">
                Confirmation 
              </label>
              <input
                {...register('confirmPassword')}
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          {/* Photo de profil */}
          <div>
            <label className="block  subpixel-antialiased text-sm pb-4 font-medium text-gray-700 mb-1">
              Photo de profil
            </label>
            <div className="flex items-center">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
            </div>
            {photoPreview && (
              <div className="mt-3 flex justify-center">
                <img 
                  src={photoPreview} 
                  alt="Preview" 
                  className="h-24 w-24 rounded-full object-cover border-2 border-white shadow"
                />
              </div>
            )}
          </div>

        

          <button
            type="submit"
            className="w-full bg-[#0923EB] hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-md transition duration-200 ease-in-out transform hover:-translate-y-0.5"
          >
            S'inscrire
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            Déjà membre ?{' '}
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Connectez-vous
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}