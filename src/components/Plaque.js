import React from 'react'

const plaqueStyle = {
    border: "1px solid black",
    margin: "1em",
    padding: "1em",
    backgroundColor: "gold",
    display: "inline-block"
}

class Plaque extends React.Component {
    constructor(props) {
        super(props)
        const {painter, painting} = props
        this.state = {painter, painting}
    }

    bindToState(event, stateVal) {
        this.setState({[stateVal]: event.target.value})
    }

    render() {
        const {painter, painting} = this.state
        return (
            <div>
                <div style={plaqueStyle}>Painting name goes here
                    <h2>{painting}</h2>
                    <h3>{painter}</h3>
                </div>
                <div>
                    <input
                    type="text"
                    defaultValue="painting name goes here"
                    onChange={(event) => this.bindToState(event, painting)} />
                </div>
                <div>
                    <input
                    type="text"
                    defaultValue="painter name goes here"
                    onChange={(event) => this.bindToState(event, painter)} />
                </div>
            </div>
        )
    }
}

Plaque.defaultProps = {
    painter: "Anon",
    painting: "Untitled"
}

export default Plaque
