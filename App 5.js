import React from 'react'
import './appStyle.css'
import ConditionalStyling from './ConditionalStyling'
import Inline from './Inline'
const App = () => {

    return (
        <div>
             {/* <h1 className='error'>Error</h1>
             <Inline/> */}
             <ConditionalStyling primary={true}/>
        </div>
    )
}

export default App