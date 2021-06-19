import { rest } from "../model/rest";
import { CATCH_ERRORS, CATCH_PRODUCTS_ARRAY, HIT_Server, restActionTypes } from "../types/restActionTypes";

interface IState{
    loading:boolean;
    products:rest[];
    error:any;
};

const initialState:IState = {
    loading:false,
    products:[],
    error:""
};

const restReducer = (state=initialState,action:restActionTypes):IState=>{
    switch(action.type){
        case HIT_Server:
        case CATCH_PRODUCTS_ARRAY:
        case CATCH_ERRORS:
        return{
                ...state,
                loading : action.loading,
                products: action.products,
                error : action.error
            }
            break;

        default:
            return state;
    }
};

export default restReducer;