const initialState = {
   cards:  [
       { id: 1, title: 'Alex', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"},
       { id: 2, title: 'Mike', body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
       { id: 3, title: 'Jake', body: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"}
   ]
}

const rootReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case 'DELETE_CARD':
            let newCard = state.cards.filter((card) => {
                return action.id !== card.id
            })
            return {
                ...state,
                cards: newCard
            }

        default:
            return state;
    }
};

export default rootReducer;