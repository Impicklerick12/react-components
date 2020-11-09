import React from 'react'

const YellingGreeting = (props) => {
    let upperCase = props.message.toUpperCase()

    return (
        <h1>{upperCase}</h1>
    )
}

export default YellingGreeting