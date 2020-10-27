import React from "react"
import faker from "faker"
import Comment from './Comment'

const App = () => {
    return(
        <div className="comments">
            <Comment 
              author="Callum Worall"
              text="You are awesome"
            />
            <Comment 
              author="Ashley"
              text="You are nice"
            />
            <Comment 
              author="Sevda"
              text="You are nice"
            />
        </div>
        
    )
}

export default App