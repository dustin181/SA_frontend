import React from 'react';
import axios from 'axios';
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";

class App extends React.Component {

    state = { result: []}

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`http://localhost:8080/${entry}`);
        this.setState({result: response.data})
    }

    render() {
        return (
            <div>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList result={this.state.result}/>
            </div>
        )
    }
}

export default App;