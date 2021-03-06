import React from 'react';
import { connect} from 'react-redux';
import { deleteCard } from '../actions/cardActions';

class Card extends React.Component{

    // state = { user: ''}

    // componentDidMount() {
    //     let user = this.props.match.params.user
    //     this.setState({user}) //user:user
    // }

    onButtonClick = () => {
        let id = this.props.card.id;
        this.props.deleteCard(id)
        this.props.history.push('/contact')
    }

    render(){
        console.log(this.props);
        const { title, body } = this.props.card;
        return(
            <div
                className='ui raised very padded text container segment'
                style={{marginTop:'80px'}}
            >
                <h3 className='ui header'>{title}</h3>
                <p>{ body }</p>
                <button className='ui primary right floated button' onClick={this.onButtonClick}>
                    Delete
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let title = ownProps.match.params.user;
    return {
        card: state.cards.find(card => card.title === title)
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        deleteCard: (id) => {dispatch(deleteCard(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);