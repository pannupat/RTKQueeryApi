export type pokemonRequestDetail = {
  id: number;
  name: string;
  types: {
    type: { name: string };
  }[];
  base_experience: number;
  stats: { base_stat: number }[];
  abilities: {
    ability: { name: string };
  }[];
};

export type PokemonNew = {
  id: number;
  name: string;
  types: string[];
  img: {
    main: string;
    default: {
      front: string;
      back: string;
    };
    shiny: {
      front: string;
      back: string;
    };
  };
  exp: number;
  stats: {
    hp: number;
    attack: number;
    defence: number;
    specialAttack: number;
    specialDefence: number;
    speed: number;
  };
  abilities: string[];
};
