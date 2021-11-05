import axios from "axios";

export default function countriesDataSlice(state=[],action){
    switch(action.type){
        case "data/countries":{
            return action.payload
        }
        case "data/search":{
            const countries = state.filter(country=>country.country.toLowerCase().includes(action.payload.toLowerCase()))
            return countries
        }
        default:
            return state
    }
}

export const fetchAllCountriesData = async(dispatch)=>{
    try {
        const {data} = await axios.get('https://disease.sh/v3/covid-19/countries/')
        dispatch({type:"data/countries",payload:data})
    } catch (error) {
        console.log(error.response);
    }
}