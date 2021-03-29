import React from 'react';

class SearchInput extends React.Component {

    state = {entry: ''}

    render() {
        return(
            <div>
                <form action ="">
                    <input
                        type="text"
                        onChange={(event) => this.setState({entry:event.target.value})}
                    />
                </form>
            </div>
        )
    }
}

export default SearchInput;