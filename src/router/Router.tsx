import { Route, Routes } from "react-router-dom";
import Pokemain from "../page/PokeMain";
import PokeDetail from "../page/PokeDetail";
import NotFound from "../page/NotFound";

const Router = () => {
  return (
    <>
      <Routes>
        <Route index path="pokemon/pokemon-list" element={<Pokemain />} />
        <Route path="pokemon/detail/:name_pokemon" element={<PokeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
