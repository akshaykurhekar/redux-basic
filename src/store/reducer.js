const initialState = {
    persons: []
}

const reducer = (state = initialState, action) =>{

    switch (action.type) {
        case 'ADD':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }       
            return{
              ...state,
              persons: state.persons.concat(newPerson)
        }
        case 'DELETE_PERSON':
            return {
                ...state, 
                persons: state.persons.filter(person => person.id !== action.personId)
            }
         
        default:
            break;
    }

    return state;
}

export default reducer;