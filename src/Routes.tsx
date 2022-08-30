import { useRoutes } from "react-router-dom";

// pages

import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Estilos from "./pages/Estilos";
import Lottie from "./pages/Lottie";
import CalculoImc from "./pages/CalculoImc";
import CicloDeVida from "./pages/CicloDeVida";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ProductItem from "./pages/ProductItem";
import RequireAuth from "./components/RequireAuth";
import JogoDaMemoria from "./pages/JogoDaMemoria";
import Reducers from "./pages/Reducers";
import Redux from "./pages/Redux";
import ParallaxPage from "./pages/ParallaxPage";
import ParallaxMouseMove from "./pages/ParallaxMouseMove";
import { Max } from "./pages/Max";

export function AppRoutes() {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/eventos", element: <Eventos /> },
    { path: "/estilos", element: <Estilos /> },
    { path: "/ciclo-de-vida", element: <CicloDeVida /> },
    {
      path: "/produtos",
      element: (
        <RequireAuth>
          <Product />
        </RequireAuth>
      ),
    },
    {
      path: "/produtos/:slug",
      element: (
        <RequireAuth>
          <ProductItem />
        </RequireAuth>
      ),
    },

    { path: "/reducers", element: <Reducers /> },
    { path: "/redux", element: <Redux /> },
    { path: "/lottie", element: <Lottie /> },
    { path: "/parallax", element: <ParallaxPage /> },
    { path: "/parallax-move", element: <ParallaxMouseMove /> },

    { path: "/calculo-imc", element: <CalculoImc /> },
    { path: "/jogo-da-memoria", element: <JogoDaMemoria /> },
    { path: "/max", element: <Max /> },
    { path: "*", element: <NotFound /> },
  ]);
}
