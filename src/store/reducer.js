import { combineReducers } from "redux";
import countriesDataSlice from "./features/countriesData";
import globalDataSlice from "./features/globalData";

const rootReducer = combineReducers({
    global:globalDataSlice,
    countries:countriesDataSlice

})
export default rootReducer