import { useEffect } from "react";
import { useGetPokemon3Mutation } from "../services/PokemonService/pokemonService";
import { Link } from "react-router-dom";
import loading from "./image/loading.png";

const PokeCard = ({ name }: { name: string }) => {
  const [getPokemonByName, DetailPoke] = useGetPokemon3Mutation();
  const fnGetPokemonDetail = async () => {
    try {
      const result = await getPokemonByName(name);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (name) {
      fnGetPokemonDetail();
    }
  }, []);

  return (
    <>
      {DetailPoke.isLoading ? (
        <div>
          {" "}
          <img className="animate-spin " src={loading} alt="" />
        </div>
      ) : (
        <>
          <Link to={`/pokemon/detail/${DetailPoke.data?.name}`}>
            <div
              className="card rounded-xl shadow-2xl bg-white"
              key={DetailPoke.data?.name}
            >
              <div className="gap5   text-center">
                <img
                  className="p-2"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${DetailPoke.data?.id}.png`}
                  alt=""
                />
                <div className="flex justify-between px h-[37.1px]  text-gray-500 bg-[#E3E3E3] rounded-b-xl text-[10px] p-3">
                  <div> {DetailPoke.data?.name}</div>
                  <div className="text-white">#{DetailPoke.data?.id}</div>
                </div>
              </div>
            </div>
          </Link>
        </>
      )}
    </>
  );
};
export default PokeCard;
