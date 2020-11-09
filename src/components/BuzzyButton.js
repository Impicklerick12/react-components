import React from 'react'

class BuzzyButton extends React.Component {

    vibrate() {
        window.navigator.vibrate(200);
    }

    render() {
        return(
            <div>
                <button onClick={this.vibrate}>Click me to Buzz!</button>
            </div>
        )
    }
}

export default BuzzyButton