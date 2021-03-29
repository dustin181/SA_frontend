import React from 'react';

class SearchInput extends React.Component {

    state = {entry: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.entry);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit} action ="">
                    <input
                        type="text"
                        placeholder='search...'
                        onChange={(event) => this.setState({entry:event.target.value})}
                        value={this.state.entry}
                    />
                </form>
            </div>
        )
    }
}

export default SearchInput;