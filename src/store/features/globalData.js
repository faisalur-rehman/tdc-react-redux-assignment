import axios from "axios";

export default function globalDataSlice(state = null, action) {
  switch (action.type) {
    case "data/global": {
      return action.payload;
    }
    default:
      return state;
  }
}

export const fetchGlobalData = async (dispatch) => {
  try {
    const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
    dispatch({ type: "data/global", payload: data });
  } catch (error) {
    console.log(error.response);
  }
};
