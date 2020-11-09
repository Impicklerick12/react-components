import React, { useState, useEffect } from 'react'
import CurrencyRow from './CurrencyRow'
import './CurrencyConverter.css'

const BASE_URL = "https://api.exchangeratesapi.io/latest"

const CurrencyConverter = () => {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const[amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    let toAmount, fromAmount
    if(amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }


    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                const firstCurrency = Object.keys(data.rates)[0]
                setCurrencyOptions([data.base, ...Object.keys(data.rates)])
                setFromCurrency(data.base)
                setToCurrency(firstCurrency)
                setExchangeRate(data.rates[firstCurrency])
            })
    }, [])

    useEffect(() => {
        if(fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates[toCurrency]))
        }
    }, [fromCurrency, toCurrency]);

    function handleFromChangeAmount(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    function handleToChangeAmount(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }

    return (
        <section class="currency">
            <div>
                <h1>Currency Converter</h1>
                <CurrencyRow 
                    currencyOptions={currencyOptions}
                    selectedCurrency={fromCurrency}
                    onChangeCurrency={e => setFromCurrency(e.target.value)}
                    amount={fromAmount}
                    onChangeAmount={handleFromChangeAmount}
                />
                <div className="equals">=</div>
                <CurrencyRow
                    currencyOptions={currencyOptions} 
                    selectedCurrency={toCurrency}
                    onChangeCurrency={e => setToCurrency(e.target.value)}
                    amount={toAmount}
                    onChangeAmount={handleToChangeAmount}
                />
            </div>
        </section>
    )
}

export default CurrencyConverter
