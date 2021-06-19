//IDEAS
//HIT_SPRINGBOOT_APPLICATION
//CATCH_THE PRODUCTS_ARRAY
//CATCH_THE_ERRORS

import { rest } from "../model/rest";

export const HIT_Server:string = "HIT_Server";
export const CATCH_PRODUCTS_ARRAY:string = "CATCH_PRODUCTS_ARRAY";
export const CATCH_ERRORS:string = "CATCH_ERRORS";


interface RestAsync{
    loading:boolean;
    products:rest[];
    error:string;
};

interface Hitserver extends RestAsync{
    type : typeof HIT_Server;
};

interface CatchProductsArray extends RestAsync{
    type : typeof CATCH_PRODUCTS_ARRAY;
};

interface CatchErrors extends RestAsync{
    type : typeof CATCH_ERRORS;
};

export type restActionTypes = Hitserver | CatchProductsArray | CatchErrors;