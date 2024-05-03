import { useEffect, useState } from "react";
import { useGetPokemon2Mutation } from "../services/PokemonService/pokemonService";
import logo from "./image/Pokelogo.png";
import { Link, useParams } from "react-router-dom";
import PokeCard from "./PokeCard";
import loading from "./image/loading.png";

function PokeMain() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [getListPokemon, result_data_pokemon] = useGetPokemon2Mutation();
  const { name } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      fnGetListPokrmon();
    }
  }, [isLoading, page]);

  const fnGetListPokrmon = async () => {
    try {
      const result = await getListPokemon({
        limit: "10",
        offset: `${(page - 1) * 10}`,
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePageChange = (newPage: any) => {
    setPage(newPage);
  };
  console.log(result_data_pokemon.isLoading);

  return (
    <>
      <div>
        <div className="flex flex-col items-center  bg-[#D9D9D9] w-[100vw] h-[100vh] p-10">
          <div className="flex flex-col items-center font-extrabold text-xl text-[#3a5da8] ">
            <img className="w-40" src={logo} alt="" />
            <div>Dex</div>
          </div>

          <div className="grid grid-cols-5 gap-4 w-[666.53px] mt-5 ">
            {isLoading ? (
              <div className="flex justify-center items-center w-[666.52px] h-[331.21px] ">
                <div>
                  <img className="w-5 animate-spin" src={loading} alt="" />
                </div>
                <div className="text-[#767676] pl-2">loading...</div>
              </div>
            ) : (
              <>
                {result_data_pokemon.data?.results.map((item) => (
                  <PokeCard name={item.name} />
                ))}
              </>
            )}
          </div>
          <div className="flex justify-center items-center mt-10  ">
            {" "}
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                className={`px-3 py-1 mx-1 ${
                  page === index + 1
                    ? "bg-[#3A5DA8] text-white rounded-[999999999px]"
                    : " rounded-[999999999px]"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PokeMain;
