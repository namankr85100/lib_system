import * as ActionTypes from './ActionTypes';

const initialState = {
    isLoading: true,
    errMess: null,
    studentsBooks: [],
    issuedBooks: [],
    userBook: [],
};

const Student = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.STUDENT_ISSUED:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                issuedBooks: action.payload,
            }

        case ActionTypes.FETCH_STUDENT_ISSUED: 
            return {
                ...state,
                isLoading: false,
                errMess: null,
                studentsBooks: action.payload,
            }
    
        case ActionTypes.GET_ONLY_USER_BOOK: 
            return {
                ...state,
                isLoading: false,
                errMess: null,
                userBook: action.payload,
            }
        default: 
            return state
    }
}

export default Student;