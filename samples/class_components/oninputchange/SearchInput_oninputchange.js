import React from 'react';

class SearchInput extends React.Component {

    onInputChange(event) {
        console.log(event.target.value)
    }

    render() {
        return(
            <div>
                <form action ="">
                    <input
                        type="text"
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchInput;