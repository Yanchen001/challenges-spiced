import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0")

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("data ", data);
        
        setPokemon(data);
        
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);
  console.log("pokemon ", pokemon)
  return (
    <main>
      {pokemon.previous && (
      <button type="button" onClick={()=>setUrl(pokemon.previous)}>Previous Page</button>
      )}
      <button type="button" onClick={()=>setUrl(pokemon.next)}>Next Page</button>
      <ul>
        {pokemon.results?.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
