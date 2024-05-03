import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonRequest } from "./PokemonRequest/pokemonRequest";
import { PokemonResponse } from "./PokemonResponse/pokemonResponse.";
import {
  PokemonNew,
  pokemonRequestDetail,
} from "./PokemonRequest/pokemonRequestDetail";

const pokemonService = createApi({
  reducerPath: "pokemonService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonResponse, PokemonRequest>({
      query: (data) => {
        const params = new URLSearchParams({
          limit: data.limit,
          offset: data.offset,
        });
        return {
          url: `pokemon?${params}`,
          method: "GET",
        };
      },
    }),
    getPokemon2: builder.mutation<PokemonResponse, PokemonRequest>({
      query: (data) => {
        const params = new URLSearchParams({
          limit: data.limit,
          offset: data.offset,
        });
        return {
          url: `pokemon?${params}`,
          method: "GET",
        };
      },
    }),
    getPokemon3: builder.mutation<PokemonNew, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response: pokemonRequestDetail) => {
        const transformedPokemon = {
          id: response.id,
          name: response.name,
          types: response.types.map((type) => type.type.name),
          img: {
            main: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`,
            default: {
              front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.id}.png`,
              back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${response.id}.png`,
            },
            shiny: {
              front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${response.id}.png`,
              back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${response.id}.png`,
            },
          },
          exp: response.base_experience,
          stats: {
            hp: response.stats[0].base_stat,
            attack: response.stats[1].base_stat,
            defence: response.stats[2].base_stat,
            specialAttack: response.stats[3].base_stat,
            specialDefence: response.stats[4].base_stat,
            speed: response.stats[5].base_stat,
          },
          abilities: response.abilities.map((ability) => ability.ability.name),
        };

        return transformedPokemon;
      },
    }),
  }),
});

export const {
  useGetPokemonQuery,
  useGetPokemon2Mutation,
  useGetPokemon3Mutation,
} = pokemonService;

export default pokemonService;
