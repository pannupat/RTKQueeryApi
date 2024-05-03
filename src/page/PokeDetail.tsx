import { useEffect } from "react";
import { useGetPokemon3Mutation } from "../services/PokemonService/pokemonService";
import { Link, useParams } from "react-router-dom";
import back from "../assets/backbutton.svg";

const PokeDetail = () => {
  const { name_pokemon } = useParams();
  const [getPokemonByName, DetailPoke] = useGetPokemon3Mutation();

  const fnGetPokemonDetail = async () => {
    try {
      const result = await getPokemonByName(name_pokemon || "");
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (name_pokemon) {
      fnGetPokemonDetail();
    }
  }, [name_pokemon]);
  console.log(DetailPoke.data?.abilities);

  return (
    <>
      <div className="flex justify-center mt-[70px]">
        <div className="Card relative p-3  w-[286px] h-[442px] items-center justify-center bg-[#70C15C] rounded-2xl shadow-2xl  ">
          <div className="absolute flex  right-0 top-0 -mt-6 text-[90px] text-white opacity-15 ">
            <p># </p> {DetailPoke.data?.id}
          </div>
          <Link to="/pokemon/pokemon-list" className="opacity-60">
            <img className="w-7" src={back} alt="" />
          </Link>
          <div className="text-2xl  text-white font-extrabold">
            {DetailPoke.data?.name}
          </div>
          <div className="rounded-[9999999px] text-[10px]  bg-white bg-opacity-25 w-fit px-2 text-cente">
            <div className="text-white z-10">{DetailPoke.data?.types}</div>
          </div>
          <div>
            {" "}
            <div className="absolute z-10 w-40 ml-[60px] left-0 items-center">
              <img
                className="p-2"
                src={DetailPoke.data?.img?.main}
                alt={DetailPoke.data?.name}
              />
            </div>
            <div className="absolute bottom-0 left-0  w-[286px] h-[242px] bg-white rounded-b-2xl rounded-t-3xl  ">
              <div className="flex  w-[400px]  ml-[40px]  py-3 ">
                <div className="-mx-3">
                  <img
                    className="-mx-2 "
                    src={DetailPoke.data?.img?.default?.front}
                    alt={DetailPoke.data?.name}
                  />
                </div>
                <div className="-mx-3">
                  <img
                    className="-mx-2   "
                    src={DetailPoke.data?.img?.default?.back}
                    alt={DetailPoke.data?.name}
                  />
                </div>
                <div className="-mx-3">
                  <img
                    className="-mx-2 "
                    src={DetailPoke.data?.img?.shiny?.front}
                    alt={DetailPoke.data?.name}
                  />
                </div>
                <div className="-mx-3">
                  <img
                    className="-mx-2 "
                    src={DetailPoke.data?.img?.shiny?.back}
                    alt={DetailPoke.data?.name}
                  />
                </div>
              </div>

              <div className="rounded-[99999px] bg-[#70C15C] w-fit px-2 text-white my-2 ml-4 -mt-5 text-[11px]">
                Exp : {DetailPoke.data?.exp}
              </div>
              <div className="grid grid-cols-3 text-[#767676] font-semibold text-opacity-85 text-[8px] bg-[#F6F6F6] rounded-xl p-1 px-4 mx-4">
                <div>{DetailPoke.data?.stats.hp} : Hp</div>
                <div>{DetailPoke.data?.stats.attack} : Attack</div>
                <div>{DetailPoke.data?.stats.speed} : Speed</div>
                <div>{DetailPoke.data?.stats.defence} : Defence</div>
                <div>
                  {DetailPoke.data?.stats.specialAttack} : SpecialAttack
                </div>
                <div>
                  {DetailPoke.data?.stats.specialDefence} : SpecialDefence
                </div>
              </div>
              <div className="rounded-[99999px] text-[#767676] font-semibold  w-fit px-2  my-1 ml-4  text-[11px]">
                Abilities:
              </div>
              <div className=" text-[#767676] font-semibold text-opacity-85 text-[8px] bg-[#F6F6F6] rounded-xl p-1 px-4 mx-4 h-[60px]">
                <ul>
                  {DetailPoke.data?.abilities.map((ability, index) => (
                    <li key={index}>{ability}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeDetail;
