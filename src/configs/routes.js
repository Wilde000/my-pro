import { withLayout } from "../HOC/currentLayout";
import AuthPage from "../pages/AuthPage";
import DirectoriesPage from "../pages/DirectoriesPage";
import HomePage from "../pages/HomePage";
import MaterialPage from "../pages/MaterialPage";
import TransfersPage from "../pages/TransfersPage";

export const routes = {
  home: "/",
  auth: "/auth",
  directories: "/directories",
  transfers: "/transfers",
  material: "/material",
};

export const router = [
  {
    id: 1,
    name: "auth",
    path: routes.auth,
    component: withLayout(AuthPage),
  },
  {
    id: 2,
    name: "home",
    path: routes.home,
    component: withLayout(HomePage),
  },
  {
    id: 3,
    name: "directories",
    path: routes.directories,
    component: withLayout(DirectoriesPage),
  },
  {
    id: 4,
    name: "transfers",
    path: routes.transfers,
    component: withLayout(TransfersPage),
  },
  {
    id: 5,
    name: "material",
    path: routes.material,
    component: withLayout(MaterialPage),
  },
];
