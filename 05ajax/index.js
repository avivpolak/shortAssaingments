const { default: axios } = require("axios");

const baseURL = "https://pokeapi.co/api/v2/pokemon/pikachu/";
const getChar = async (baseURL) => {
    try {
        const response = await axios.get(baseURL);
        const json = response.data.results;
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
};
const getSingleCharacter = async (name) => {
    try {
        const response = await axios.get(`${baseURL}name=${name}`);
        console.log(response.data.results[0]);
    } catch (error) {
        console.error(error);
    }
};
getChar(baseURL);
getSingleCharacter("rick");
