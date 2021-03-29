import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from "../functional_components/SingleComment";
import UserCard from "../functional_components/UserCard";

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <SingleComment
                    name='Sarah'
                    date='Today at 5:00PM'
                    comment='my comment'
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Rick'
                    date='Today at 6:00PM'
                    comment='lets go'
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Jeff'
                    date='Today at 7:00PM'
                    comment='it is Tuesday
                '/>
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)