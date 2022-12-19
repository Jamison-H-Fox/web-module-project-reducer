import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEM_SET, MEM_RETRIEVAL, MEM_CLEAR } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

export const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        case(CLEAR_DISPLAY):
            return ({ 
                ...state,
                total: 0
            });
        case(MEM_SET):
            return ({
                ...state,
                memory: action.payload
            });
        case(MEM_RETRIEVAL):
            return ({
                ...state,
                total: calculateResult(state.total, action.payload, state.operation)
            });
        case(MEM_CLEAR):
            return ({
                ...state,
                memory: 0
            });
        default:
            return state;
    }
}