

import { useState, useEffect, Fragment } from "react"
import Link from "react-router-dom"

import { Dialog, Transition } from "@headlessui/react"
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline"
import { usePathname } from "next/navigation"

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userRole, setUserRole] = useState("etudiant") // Peut être 'etudiant', 'professeur', 'responsable-stage', 'responsable-admin'
  const pathname = usePathname()

  // Simuler la détection du rôle de l'utilisateur
  useEffect(() => {
    // Dans une application réelle, cela viendrait d'une API ou d'un contexte d'authentification
    if (pathname.includes("/responsable-stage")) {
      setUserRole("rs")
    } else if (pathname.includes("/etudiant")) {
      setUserRole("Etudiant")
    } else if (pathname.includes("/professeur")) {
      setUserRole("Enseignant")
    } else if (pathname.includes("/responsable-admin")) {
      setUserRole("ra")
    }
  }, [pathname])

  // Navigation pour chaque rôle
  const navigation = {
    "rs": [
      { name: "Tableau de bord", href: "/dashboard/responsable-stage", icon: HomeIcon },
      { name: "Offres de stage", href: "/dashboard/responsable-stage/offres", icon: BriefcaseIcon },
      { name: "Candidatures", href: "/dashboard/responsable-stage/candidatures", icon: UserGroupIcon },
      { name: "Entreprises", href: "/dashboard/responsable-stage/entreprises", icon: AcademicCapIcon },
      { name: "Étudiants", href: "/dashboard/responsable-stage/etudiants", icon: UserGroupIcon },
      { name: "Statistiques", href: "/dashboard/responsable-stage/statistiques", icon: ChartBarIcon },
    ],
    Etudiant: [
      { name: "Tableau de bord", href: "/dashboard/etudiant", icon: HomeIcon },
      { name: "Offres de stage", href: "/dashboard/etudiant/offres", icon: BriefcaseIcon },
      { name: "Mes candidatures", href: "/dashboard/etudiant/candidatures", icon: BriefcaseIcon },
      { name: "Emploi du temps", href: "/dashboard/etudiant/emploi-du-temps", icon: CalendarIcon },
      { name: "Mes cours", href: "/dashboard/etudiant/cours", icon: AcademicCapIcon },
      { name: "Mes notes", href: "/dashboard/etudiant/notes", icon: ChartBarIcon },
    ],
    Enseignant: [
      { name: "Tableau de bord", href: "/dashboard/professeur", icon: HomeIcon },
      { name: "Mes cours", href: "/dashboard/professeur/cours", icon: AcademicCapIcon },
      { name: "Mes étudiants", href: "/dashboard/professeur/etudiants", icon: UserGroupIcon },
      { name: "Évaluations", href: "/dashboard/professeur/evaluations", icon: ChartBarIcon },
      { name: "Stages", href: "/dashboard/professeur/stages", icon: BriefcaseIcon },
      { name: "Emploi du temps", href: "/dashboard/professeur/emploi-du-temps", icon: CalendarIcon },
    ],
    "ra": [
      { name: "Tableau de bord", href: "/dashboard/responsable-admin", icon: HomeIcon },
      { name: "Étudiants", href: "/dashboard/responsable-admin/etudiants", icon: UserGroupIcon },
      { name: "Professeurs", href: "/dashboard/responsable-admin/professeurs", icon: AcademicCapIcon },
      { name: "Cours", href: "/dashboard/responsable-admin/cours", icon: DocumentTextIcon },
      { name: "Salles", href: "/dashboard/responsable-admin/salles", icon: BuildingOfficeIcon },
      { name: "Emploi du temps", href: "/dashboard/responsable-admin/emploi-du-temps", icon: CalendarIcon },
      { name: "Stages", href: "/dashboard/responsable-admin/stages", icon: BriefcaseIcon },
      { name: "Examens", href: "/dashboard/responsable-admin/examens", icon: ClipboardDocumentCheckIcon },
      { name: "Inscriptions", href: "/dashboard/responsable-admin/inscriptions", icon: PencilSquareIcon },
      { name: "Statistiques", href: "/dashboard/responsable-admin/statistiques", icon: ChartBarIcon },
      { name: "Paramètres", href: "/dashboard/responsable-admin/parametres", icon: Cog6ToothIcon },
    ],
  }

  // Titre du tableau de bord en fonction du rôle
  const dashboardTitle = {
    "rs": "Gestion des Stages",
    Etudiant: "Espace Étudiant",
    Enseignant: "Espace Enseignant",
    "ra": "Administration",
  }

  // Informations de l'utilisateur en fonction du rôle
  const userInfo = {
    "rs": {
      name: "Marie Dupont",
      email: "marie.dupont@academipro.com",
      avatar: "/placeholder.svg?height=40&width=40&text=MD",
    },
    Etudiant: {
      name: "Jean Martin",
      email: "jean.martin@etudiant.academipro.com",
      avatar: "/placeholder.svg?height=40&width=40&text=JM",
    },
    Enseignant: {
      name: "Dr. Robert Dupuis",
      email: "robert.dupuis@academipro.com",
      avatar: "/placeholder.svg?height=40&width=40&text=RD",
    },
    "ra": {
      name: "Philippe Leroy",
      email: "philippe.leroy@academipro.com",
      avatar: "/placeholder.svg?height=40&width=40&text=PL",
    },
  }

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Fermer la barre latérale</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <div className="h-8 w-8 rounded-full bg-[#0927EB] flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-[#FD6E47] flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[#16A637]"></div>
                    </div>
                  </div>
                  <span className="ml-2 text-xl font-bold text-gray-900">AcademiPro</span>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation[userRole].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${
                        pathname === item.href
                          ? "bg-[#0927EB]/10 text-[#0927EB] font-medium"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                    >
                      <item.icon
                        className={`${
                          pathname === item.href ? "text-[#0927EB]" : "text-gray-500 group-hover:text-[#0927EB]/70"
                        } mr-4 flex-shrink-0 h-6 w-6`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <div className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <Image
                        className="inline-block h-10 w-10 rounded-full"
                        src={userInfo[userRole].avatar || "/placeholder.svg"}
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                        {userInfo[userRole].name}
                      </p>
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        {userInfo[userRole].email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0927EB]/5 to-white z-0"></div>
          <div className="relative z-10">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <div className="h-8 w-8 rounded-full bg-[#0927EB] flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-[#FD6E47] flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[#16A637]"></div>
                  </div>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">AcademiPro</span>
              </div>
              <div className="mt-5 flex-1 flex flex-col">
                <nav className="flex-1 px-2 space-y-1">
                  {navigation[userRole].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${
                        pathname === item.href
                          ? "bg-[#0927EB]/10 text-[#0927EB] font-medium"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                    >
                      <item.icon
                        className={`${
                          pathname === item.href ? "text-[#0927EB]" : "text-gray-500 group-hover:text-[#0927EB]/70"
                        } mr-3 flex-shrink-0 h-6 w-6`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <Image
                      className="inline-block h-9 w-9 rounded-full"
                      src={userInfo[userRole].avatar || "/placeholder.svg"}
                      alt=""
                      width={36}
                      height={36}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {userInfo[userRole].name}
                    </p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700 truncate">
                      {userInfo[userRole].email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0927EB]"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Ouvrir la barre latérale</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">{dashboardTitle[userRole]}</h1>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0927EB]"
                  >
                    <span className="sr-only">Voir les notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0927EB]"
                  >
                    <span className="sr-only">Paramètres</span>
                    <Cog6ToothIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0927EB]"
                  >
                    <span className="sr-only">Se déconnecter</span>
                    <ArrowRightOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
