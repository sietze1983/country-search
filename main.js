const searchBelgiumButton = document.getElementById("searchBelgium")

searchBelgiumButton.addEventListener("click", async () => {
await console.log("click")
})

async function getBelgium(){
    // Haalt de data op uit de API van een land
    const response = await axios.get("https://restcountries.eu/rest/v2/name/netherlands")
    console.log(response)
    // Uit de response halen we de url van de image van de vlag van het land, deze heet URl opgeslagen
    const url = response.data[0].flag
    // Selecteer een element op de pagina met ID 'Flag'
    const flag = document.getElementById("flag")
    // var btn = document.createElement("BUTTON")
    // maken we een nieuw image element
    const flagImage = document.createElement('img')
    flagImage.src = url
    flag.appendChild(flagImage)

    //Opdracht 2
    //haal de naam uit de array
    const countryName = response.data[0].name;
    //haal de subregion uit de array
    const countrySubRegion = response.data[0].subregion;
//    haal de population uit de array
    const amountOfPeople = response.data[0].population;
    //zet alle informatie bij elkaar
    const countryInformation = countryName + " is situated in " + countrySubRegion + ". It has a population of " + amountOfPeople + " people ";


//    Opdracht 3
//     Haal de hoofdstad uit de array van response
    const countryCapital = response.data[0].capital;
    // Zet alle informatie in een nieuwe string
    const countryCapitalInformation = "The capital is " + countryCapital;

//    Opdracht 4
//    Haal het betaalmiddel uit de response
    const currency = response.data[0].currencies[0].name;
    //Zet dit in een string
    const countryCurrencyInformation = " and you can pay with " + currency + "'s"

    // Opdracht 7
    const countryInformations = document.getElementById("countryInformation");
    countryInformations.textContent = countryInformation + countryCapitalInformation + countryCurrencyInformation
}
getBelgium()


// Opdracht 8
const search = document.getElementById("search")
console.log(search)
search.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            async function getInfo() {
                const input = search.value;
                const query = await axios.get(`https://restcountries.eu/rest/v2/name/${input}`);
                console.log(query)
            }
            getInfo()
        }
    })

// Opdracht 9
// const inputField = document.querySelector("#search")
// const query = inputField.value
// async function getSearch (){
//     const query = form.elements.input.value;
//     const result = await axios.get(`https://restcountries.eu/rest/v2/name/${query}`);
// }
// Helaas kom ik tijd tekort om de rest af te maken. Ik ben dus tot en met opdracht 8 gekomen.
// Ik heb het idee dat ik heel dicht bij opdracht 9 zit, maar het lukt me gewoon niet meer om hem af te krijgen.
// De rest van de opdrachten is mij dus ook niet meer gelukt zodat het er nu wat rommelig uitziet op de webpagina