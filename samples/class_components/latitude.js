import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from "./HemisphereDisplay";

// State:
// 1) Only usable with class components
// 2) Updating state on a component causes the component to re-render
// 3) State must be initialized when a component is created
// 4) State can only be updated using the function 'setState'


class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { latitude: null, errorMessage: '' }
    // }

    state = { latitude: null, errorMessage: '' }

    componentDidMount() {
        //good place to put data loading
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude})
            },
            (error) => {
                this.setState({ errorMessage: error.message })
            }
        );
    }

    componentDidUpdate() {
        //good place to do more data loading when state/props change
    }

    render() {
        if(this.state.errorMessage && !this.state.latitude){
            return <div> Your error was: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.latitude){
            return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>
        }

        else {
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)