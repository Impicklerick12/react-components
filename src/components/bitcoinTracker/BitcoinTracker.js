import React, { useState, useEffect } from 'react'
import CurrencySelector from './CurrencySelector'
import DataDisplay from './DataDisplay'

function BitcoinTracker() {
    
    const defaultCurrency = "AUD"
    const[currency, setCurrency] = useState(defaultCurrency)
    const [bitcoinData, setBitcoinData] = useState({})

    function currencyChangeHandler(newCurrency) {
        console.log("New currency: ", newCurrency)
        setCurrency(newCurrency)
    }

    const bitcoinApi = "https://api.coindesk.com/v1/bpi/historical/close.json"
    useEffect(() => {
        console.log("inside of useEffect")
        function getData() {
        fetch(`${bitcoinApi}?currency=${currency}`)
            .then(response => response.json())
            .then(data => setBitcoinData(data.bpi))
            .catch(e => e)
        }
        getData()
    },[currency])

    return (
        <div>
            <h1>Bitcoin Index</h1>
            <CurrencySelector currency={currency} handleCurrencyChange={currencyChangeHandler}/>
            <DataDisplay data={bitcoinData}/>
        </div>
    )
}

export default BitcoinTracker
