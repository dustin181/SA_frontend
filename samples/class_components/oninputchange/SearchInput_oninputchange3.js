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
                        value={this.state.entry}
                    />
                </form>
            </div>
        )
    }
}

export default SearchInput;