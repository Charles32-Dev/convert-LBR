const ButtonConverted = document.querySelector(".button-convert")
const CurrencySelect = document.querySelector(".Change-Currency")




async function ConvertValues() {
    const inputCurrencyValue = document.querySelector(".input-value").value
    const enteredValue = document.querySelector(".entered-value")
    const CurrencyConvertedValue = document.querySelector(".Currency-Converted-Value")

    const CurrentToday = await fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())


    const dolarToday = CurrentToday.EURBRL.high
    const euroToday = CurrentToday.USDBRL.high


    enteredValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    if (CurrencySelect.value == "dolar") {
        CurrencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (CurrencySelect.value == "euro") {
        CurrencyConvertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

}

function ChangeCurrency() {
    const TextName = document.querySelector(".Currency-Name")
    const ImgCurrency = document.querySelector(".img-currency-Change")

    if (CurrencySelect.value == "dolar") {
        TextName.innerHTML = "Dolar Americano"
        ImgCurrency.src = "./assets/estados-unidos.png"
    }

    if (CurrencySelect.value == "euro") {
        TextName.innerHTML = "Euro"
        ImgCurrency.src = "./assets/euro.png"
    }

    if (CurrencySelect.value == "libra") {
        TextName.innerHTML = "Libra"
        ImgCurrency.src = "./assets/libra.png"
    }

}

CurrencySelect.addEventListener("change", ChangeCurrency)
ButtonConverted.addEventListener("click", ConvertValues)