export const getRandomPokemon: (notThisOne?: number) => number = (notThisOne) => {
    const pokemon = Math.floor(Math.random() * 151) + 1;
    return pokemon === notThisOne ? getRandomPokemon(notThisOne) : pokemon;
};

export const getOptionsForVote = () => {
    const options = [];
    const firstPokemon = getRandomPokemon();
    const secondPokemon = getRandomPokemon(firstPokemon);
    options.push(firstPokemon);
    options.push(secondPokemon);
    return options;
}