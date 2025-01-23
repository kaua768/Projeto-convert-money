const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValues = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // outros valores em moedas

    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.16
    const bitconToday = 1.0


    if (currencySelect.value == "dolar") {
        //se o select estiver selecionado o valor de dolar, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValues / dolarToday)
    }

    if (currencySelect.value == "euro") {
        //se o select estiver selecionado o valor de euro, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValues / euroToday)
    }

    if (currencySelect.value == "libra") {
        // se o select estiver selecionado o valor de libra, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
        }).format(inputCurrencyValues / libraToday)
    }

    if (currencySelect.value == "bitcon") {
        // se o select estiver selecionado o valor de bitcon, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
        }).format(inputCurrencyValues / bitconToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValues)

}




function changeCurrency (){
 const currencyName = document.getElementById("currency-name")
 const currencyImage = document.querySelector(".currency-img")

 if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./img/estados-unidos.png"
 }


 if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./img/Euro.png"
 }

 if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./img/libra.png"
 }

 if (currencySelect.value == "bitcon") {
    currencyName.innerHTML = "Bitcon"
    currencyImage.src = "./img/bitcoin.png"
 }

 convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)












