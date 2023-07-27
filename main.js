// Function to display the saved Pokémon on page2 (indx.html)
function displaySavedPokemon() {
  const savedPokemonContainer = document.querySelector(".saved-pokemon-container");
  const caughtPokemons = JSON.parse(localStorage.getItem("caughtPokemons") || "[]");

  caughtPokemons.forEach(pokemonData => {
    const pokemonCard = createElement("div", "pokemon-card");
    const image = createElement("img", "pokemon-image");
    const name = createElement("h4", "pokemon-name");
    const stats = createElement("div", "pokemon-stats");

    image.src = pokemonData.image;
    image.alt = `${pokemonData.name} Image`;
    name.textContent = pokemonData.name;

    const ivStat = createElement("p");
    ivStat.textContent = `IV: ${pokemonData.iv}`;
    const hpStat = createElement("p");
    hpStat.textContent = `HP: ${pokemonData.hp}`;
    const attackStat = createElement("p");
    attackStat.textContent = `Attack: ${pokemonData.attack}`;
    const defenseStat = createElement("p");
    defenseStat.textContent = `Defense: ${pokemonData.defense}`;

    stats.appendChild(ivStat);
    stats.appendChild(hpStat);
    stats.appendChild(attackStat);
    stats.appendChild(defenseStat);

    pokemonCard.appendChild(image);
    pokemonCard.appendChild(name);
    pokemonCard.appendChild(stats);
    savedPokemonContainer.appendChild(pokemonCard);
  });
}

// Call the function to display the saved Pokémon when the DOM is ready
document.addEventListener("DOMContentLoaded", displaySavedPokemon);

// Function to handle the "Clear Saved Pokémon" button click event
function clearSavedPokemon() {
  // Clear the saved Pokémon data from local storage
  localStorage.removeItem("caughtPokemons");

  // Refresh the page to remove the displayed Pokémon
  window.location.reload();
}
