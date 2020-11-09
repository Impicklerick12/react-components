import React from 'react'

// class ColourSelector extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = { hex: props.hex }
//     }

//     handleChange = (event) => {
//         console.log(event.target.value)
//         this.setState({ hex: event.target.value })
//     }

//     render() {
//         const { hex } = this.state;
//         return (
//             <div class='columns'>
//                 <div class='column is-half is-centered'>
//                     <div class='card'>
//                         <input type="color" value={ hex } onChange={ this.handleChange }/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

// Re-writing from a class to a function
const ColourSelector = (props) => {
    const { changeHandlerCb, hex } = props
    
    function changeHandler(event) {
        changeHandlerCb(event.target.value)
    }

    return (
        <input
            type="color"
            value={ hex }
            onChange={ changeHandler }
        />

    )
}

export default ColourSelector;