import React from 'react'

const API = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

class RandomQuote extends React.Component {

    state = {
        quotes: null,
        randomQuote: null
    }

    componentDidMount() {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    quotes: data.quotes
                })
            })
    }

    RandomQuoteHandler = () => {
        const randomNumber = Math.floor(Math.random() * this.state.quotes.length)
        const randomQuote = this.state.quotes[randomNumber]

        this.setState({
            randomQuote: randomQuote
        })
    }

    render() {
        return (
            <div class="columns">
                <div class="column is-half is-centered">
                    <div class="container is-fluid">
                        <div class="card">
                            <div class="card-content">
                                <p class="title is-4">{this.state.randomQuote !== null && this.state.randomQuote.quote}</p>
                                <p class="subtitle is-6">{this.state.randomQuote !== null && this.state.randomQuote.author}</p>
                            </div>
                        </div>
                        <button class="button is-danger is-outlined" onClick={this.RandomQuoteHandler}>Get A Random Quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomQuote