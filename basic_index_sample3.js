import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Hi There'
}

const App = () => {
    return(
        <div>
            <label htmlFor="name" className="label">enter email</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'red', color: 'white'}}>
                { getButtonText() }
            </button>
        </div>

    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

// const App = function() {
//     return(
//         <div>Hi There!</div>
//     )
// }