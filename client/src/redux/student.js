import * as ActionTypes from './ActionTypes';

const initialState = {
    isLoading: true,
    errMess: null,
    issuedBooks: [],
};

const Student = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.STUDENT_ISSUED:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                issuedBooks: action.payload
            }
        
        default: 
            return state
    }
}

export default Student;