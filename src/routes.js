// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";

import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import AddVideo from "views/AddVideo.js";
import ListVideos from "views/VideoList.js";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Painel",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
    protected: true,
  },
  {
    path: "/add-video",
    name: "Cadastrar Vídeo",
    icon: <DocumentIcon color="inherit" />,  // Substitua YourIconComponent pelo ícone que você quer usar
    component: AddVideo,  // Este será o componente React que criaremos em breve
    layout: "/admin",
    protected: true,
  },
  {
    path: "/list-videos",
    name: "Vídeos",
    icon: <DocumentIcon color="inherit" />,  // Substitua YourIconComponent pelo ícone que você quer usar
    component: ListVideos,  // Este será o componente React que criaremos em breve
    layout: "/admin",
    protected: true,
  },
  

  {
    name: "Pagina de Usuário",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Perfil",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
        protected: true,
      },
      {
        path: "/tables",
        name: "Tabelas",
        icon: <StatsIcon color="inherit" />,
        component: Tables,
        layout: "/admin",
        protected: true,
      },
      {
        path: "/billing",
        name: "Cobrança",
        icon: <CreditIcon color="inherit" />,
        component: Billing,
        layout: "/admin",
        protected: true,
      },
      {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
      
    ],
  },
];
export default dashRoutes;
