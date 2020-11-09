import React from 'react'
import ColorSelector from './ColorSelector'

const canvasStyles = {
    border: "6px solid black"
}

const divStyles = {
    margin: "1em"
}

class Canvas extends React.Component {
    
    constructor(props) {
        super(props)
        this.canvasRef = React.createRef()
        this.state = {
            hex: props.hex
        }
    }

    changeHandler = (hexVal) => {
        this.setState({ hex: hexVal })
    }
    
    render() {
        const { hex } = this.state
        return (
            <div>
                <div style={divStyles}>
                    <ColorSelector 
                        changeHandlerCb={ this.changeHandler }
                        hex={ hex }
                    />
                </div>
                <div style={divStyles}>
                    <canvas ref={this.canvasRef} width="400" height="400" style={canvasStyles}/>
                </div>
            </div>
        )
    }
}

Canvas.defaultProps = {
    hex: "#f4424b"
}

export default Canvas