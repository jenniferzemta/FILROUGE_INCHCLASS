import { useState, useRef, useEffect } from 'react';
import {  SunIcon, MoonIcon, BellIcon, UserCircleIcon, MagnifyingGlassIcon as SearchIcon, UsersIcon, BriefcaseIcon, AcademicCapIcon, BuildingOffice2Icon, CalendarIcon, ChartBarIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';

import { Chart, BarController, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import logo from './../assets/logo.png';
import Sidebar from '../components/layouts/Sidebar';

// Enregistrer les composants nécessaires de Chart.js
Chart.register(BarController, CategoryScale, LinearScale, BarElement, Tooltip);

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('today');
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  // Données mock
  const stats = [
    { id: 1, name: 'Étudiants', value: '1,248', icon: AcademicCapIcon, change: '+12%' },
    { id: 2, name: 'RA', value: '24', icon: UsersIcon, change: '+2' },
    { id: 3, name: 'RS', value: '18', icon: BriefcaseIcon, change: '+3' },
    { id: 4, name: 'Professeurs', value: '94', icon: UsersIcon, change: '+5%' },
    { id: 5, name: 'Salles', value: '42', icon: BuildingOffice2Icon, change: '' },
    { id: 6, name: 'EDT Actifs', value: '36', icon: CalendarIcon, change: '+4' },
  ];

  const courses = [
    { id: 1, name: 'Algorithmique Avancée', department: 'Informatique', credits: 4 },
    { id: 2, name: 'Gestion de Projet', department: 'Management', credits: 3 },
    { id: 3, name: 'IA Fondamentale', department: 'Informatique', credits: 5 },
  ];

  // Données pour le graphique
  const chartData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Offres consultées',
        data: [65, 59, 80, 81, 56, 72],
        backgroundColor: '#0927EB',
        borderRadius: 6,
      },
      {
        label: 'Candidatures',
        data: [28, 48, 40, 19, 36, 27],
        backgroundColor: '#FFA500',
        borderRadius: 6,
      }
    ]
  };

//   // Configurer le graphique
//   useEffect(() => {
//     if (chartRef.current) {
//       if (chartInstance) {
//         chartInstance.destroy();
//       }

//       const ctx = chartRef.current.getContext('2d');
//       const newChart = new Chart(ctx, {
//         type: 'bar',
//         data: chartData,
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           scales: {
//             x: {
//               grid: {
//                 display: false,
//                 drawBorder: false
//               },
//               ticks: {
//                 color: darkMode ? '#E5E7EB' : '#6B7280'
//               }
//             },
//             y: {
//               grid: {
//                 color: darkMode ? '#374151' : '#E5E7EB',
//                 drawBorder: false
//               },
//               ticks: {
//                 color: darkMode ? '#E5E7EB' : '#6B7280'
//               }
//             }
//           },
//           plugins: {
//             tooltip: {
//               backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
//               titleColor: darkMode ? '#FFFFFF' : '#111827',
//               bodyColor: darkMode ? '#E5E7EB' : '#6B7280',
//               borderColor: '#E5E7EB',
//               borderWidth: 1,
//               padding: 12,
//               usePointStyle: true,
//               callbacks: {
//                 label: function(context) {
//                   return `${context.dataset.label}: ${context.raw}%`;
//                 }
//               }
//             },
//             legend: {
//               labels: {
//                 color: darkMode ? '#E5E7EB' : '#6B7280',
//                 usePointStyle: true,
//                 pointStyle: 'circle',
//                 padding: 20
//               }
//             }
//           }
//         }
//       });

//       setChartInstance(newChart);
//     }

//     return () => {
//       if (chartInstance) {
//         chartInstance.destroy();
//       }
//     };
//   }, [darkMode]);
 
// Enregistrez les composants une seule fois
Chart.register(BarController, CategoryScale, LinearScale, BarElement, Tooltip);

const MyChartComponent = ({ darkMode }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    // Détruire le graphique existant avant d'en créer un nouveau
    if (chartInstance) {
      chartInstance.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const newChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
          datasets: [{
            label: 'Offres consultées',
            data: [65, 59, 80, 81, 56, 72],
            backgroundColor: '#0927EB',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      setChartInstance(newChart);
    }

    // Nettoyage lors du démontage du composant
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [darkMode]); // Réexécuter quand darkMode change

  return (
    <div className="h-80">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navbar */}
      {/* <Sidebar/> */}
      <header className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo côté gauche */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="ml-3 text-xl font-semibold">EduManager</span>
            </div>

            {/* Elements côté droit */}
            <div className="flex items-center space-x-4">
              {/* Barre de recherche */}
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className={`pl-10 pr-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64`}
                />
              </div>

              {/* Bouton mode sombre */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'text-yellow-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
              </button>

              {/* Notification */}
              <button className={`p-2 rounded-full relative ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <BellIcon className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>

              {/* Avatar utilisateur */}
              <div className="flex items-center space-x-2">
                <UserCircleIcon className="h-8 w-8" />
                <span className="hidden md:inline">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </header>

<div className="">
    <Sidebar/>
</div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Cartes statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`rounded-lg p-4 shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex items-center">
                <div className={`p-2 rounded-full ${darkMode ? 'bg-blue-900 text-blue-100' : 'bg-blue-100 text-blue-600'}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {stat.name}
                  </p>
                  <p className="text-2xl font-semibold">
                    {stat.value}
                    {stat.change && (
                      <span className="ml-2 text-sm text-green-500">{stat.change}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bannière de bienvenue */}
        <div className={`rounded-lg p-6 mb-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white`}>
          <h2 className="text-2xl font-bold mb-2">Bienvenue sur EduManager</h2>
          <p className="max-w-3xl">
            Votre plateforme complète de gestion académique. Gérez les emplois du temps, 
            les ressources pédagogiques, les stages et bien plus encore en toute simplicité.
          </p>
        </div>

        {/* Section calendrier et programme */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Calendrier */}
          <div className={`rounded-lg p-6 shadow ${darkMode ? 'bg-gray-800' : 'bg-white'} lg:col-span-2`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Calendrier Académique</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setActiveTab('today')}
                  className={`px-3 py-1 rounded-md ${activeTab === 'today' ? 'bg-blue-100 text-blue-600' : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  Aujourd'hui
                </button>
                <button 
                  onClick={() => setActiveTab('week')}
                  className={`px-3 py-1 rounded-md ${activeTab === 'week' ? 'bg-blue-100 text-blue-600' : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  Semaine
                </button>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className={`grid grid-cols-7 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-2 font-medium`}>
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
                  <div key={day} className="text-center py-2">{day}</div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-px bg-gray-200">
                {Array.from({ length: 35 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-1 ${i === 15 ? 'border-2 border-blue-500' : ''}`}
                  >
                    {i < 7 && i === 3 && (
                      <div className={`text-xs p-1 rounded ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mb-1`}>Réunion RA</div>
                    )}
                    {i === 15 && (
                      <div className={`text-xs p-1 rounded ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>Algorithmique</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Programme du jour */}
          <div className={`rounded-lg p-6 shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-lg font-semibold mb-4">Programme du jour</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-medium">8h30 - 10h00</p>
                <p>Algorithmique Avancée</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Salle A12 - Prof. Dupont</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-medium">10h15 - 12h00</p>
                <p>Gestion de Projet</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Salle B07 - Prof. Martin</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="font-medium">14h00 - 16h00</p>
                <p>IA Fondamentale</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Salle C03 - Prof. Leroy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tableau des matières */}
        <div className={`rounded-lg shadow overflow-hidden mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Liste des Matières</h3>
            <button className="text-blue-600 hover:text-blue-800">Voir tout</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Nom
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Département
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Crédits
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y divide-gray-200 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                {courses.map((course) => (
                  <tr key={course.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{course.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900 text-blue-100' : 'bg-blue-100 text-blue-800'}`}>
                        {course.department}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.credits}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">Éditer</button>
                      <button className="text-red-600 hover:text-red-900">Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Graphique Chart.js */}
        <div className={`rounded-lg p-6 shadow mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Taux de consultation des offres de stage</h3>
            <select className={`rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} p-2`}>
              <option>30 derniers jours</option>
              <option>7 derniers jours</option>
              <option>Cette année</option>
            </select>
          </div>
          <div className="h-80">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;