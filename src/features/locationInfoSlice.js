import { createSlice } from "@reduxjs/toolkit";

// Function to get data from localStorage
const getInitialState = () => {
    const localData = localStorage.getItem('locationData');
    return localData ? JSON.parse(localData) : null;
};

const locationInfoSlice = createSlice({
    name: "locationInfoSlice",
    initialState: getInitialState(),
    reducers: {
        addLocationData: (state, action) => {
            const newState = action.payload; 
            localStorage.setItem('locationData', JSON.stringify(newState));  
            return newState; 
        }
    }
});

export const { addLocationData } = locationInfoSlice.actions;
export default locationInfoSlice.reducer;
