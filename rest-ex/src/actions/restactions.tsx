//actions
//ideas (types)

import axios from "axios";
import { Dispatch } from "redux";
import { CATCH_ERRORS, CATCH_PRODUCTS_ARRAY, HIT_Server, restActionTypes } from "../types/restActionTypes";



const getProducts = ()=>{
    return async (dispatch:Dispatch<restActionTypes>)=>{
        dispatch({
            type:HIT_Server,
            loading:false,
            products:[],
            error:""
        })

        try{
            const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
            const { data } = res;
            dispatch({
                type : CATCH_PRODUCTS_ARRAY,
                loading:true,
                products:data,
                error:""
            })
        }catch(err){
            dispatch({
                type : CATCH_ERRORS,
                products:[],
                error:err.message,
                loading:true
            })
        }



    }
};

export default getProducts;