import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = {text: 'submit'};
    const style = {backgroundColor: 'red', color: 'white'};

    return(
        <div>
            <label htmlFor="name" className="label">enter email</label>
            <input id="name" type="text"/>
            <button style={style}>
                { buttonText.text }
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