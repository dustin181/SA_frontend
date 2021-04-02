import React from 'react';

const Contact = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // },2000) //example of automatic link switch after 2 seconds
    return (
        <div
            className='ui raised very padded text container segment'
            style={{marginTop:'80px'}}
        >
            <h3 className='ui header'>Contact</h3>
            <p>Hello World from Contact component</p>
        </div>
    )
}

export default Contact;