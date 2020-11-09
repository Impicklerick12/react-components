import React from 'react'

class Form extends React.Component {

    constructor(props) {
        super(props)
        const {firstName, lastName, email, phone} = props
        this.state = {firstName, lastName, email, phone}
    }

    onInputChange = (event, stateVal) => {
        this.setState({[stateVal]: event.target.value})
        
    }

    render() {
        const {firstName, lastName, email, phone} = this.state

        return(
            <div>
                <div>
                    <h1>{firstName} {lastName}</h1>
                    <h1>{email}</h1>
                    <h1>{phone}</h1>
                </div>
                <div>
                    <input type="text"
                    defaultValue="First Name"
                    onChange={(event) => this.onInputChange(event, "firstName")}/>
                </div>
                <div>
                    <input type="text"
                    defaultValue="Last Name"
                    onChange={(event) => this.onInputChange(event, "lastName")}/>
                </div>
                <div>
                    <input type="text"
                    defaultValue="Email Address"
                    onChange={(event) => this.onInputChange(event, "email")}/>
                </div>
                <div>
                    <input type="text"
                    defaultValue="Phone Number"
                    onChange={(event) => this.onInputChange(event, "phone")}/>
                </div>
            </div>
        )
    }
}

Form.defaultProps = {

    firstName: "Mc",
    lastName: "Lovin",
    email: "mclovin@superbad.com",
    phone: "0400000000"

}

export default Form