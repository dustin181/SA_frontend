import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from "../functional_components/SingleComment";

const App = () => {
    return(
        <div className='ui comments'>
            <SingleComment name='Sarah'
                           date='Today at 5:00PM'
                           comment='my comment'/>
            <SingleComment name='Rick'
                           date='Today at 6:00PM'
                           comment='lets go'/>
            <SingleComment name='Jeff'
                           date='Today at 7:00PM'
                           comment='it is Tuesday'/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)