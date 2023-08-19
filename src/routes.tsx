const privateRoutes = [
  {
    path: "/Home",
    loader: () => import("src/pages/Home/Home"),
  },
  {
    path: "/Profile",
    loader: () => import("src/pages/Auth/ProfilePage"),
  },
  {
    path: "/recharge",
    loader: () => import("src/pages/Solde/Recharge"),
  },
  {
    path: "/Tasks",
    loader: () => import("src/pages/Tasks/Tasks"),
  },
  {
    path: "/Vip",
    loader: () => import("src/pages/Vip/Vip"),
  },
  {
    path: "/Team",
    loader: () => import("src/pages/Team/Team"),
  },
  {
    path: "/Address",
    loader: () => import("src/pages/Solde/Adresse"),
  },
  {
    path: "/Withdraw",
    loader: () => import("src/pages/Solde/Withdraw"),
  },
  {
    path: "/Retrait",
    loader: () => import("src/pages/Retrait/Retrait"),
  },
  {
    path: "/",
    loader: () => import("src/pages/Dashboard/Dashboard"),
  },
];
const publicRoutes = [
  {
    path: "/auth/signin",
    loader: () => import("src/pages/Auth/SigninPage"),
  },
  {
    path: "/auth/signup",
    loader: () => import("src/pages/Auth/SignupPage"),
  },
  {
    path: "/auth/forgetpassword",
    loader: () => import("src/pages/Auth/SignupPage"),
  },
];
export default {
  privateRoutes,
  publicRoutes,
};
