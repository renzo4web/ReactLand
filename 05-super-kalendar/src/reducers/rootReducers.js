import {combineReducers} from "redux";
import {calendarReducer} from "./calendarReducer";

export const rootReducers = combineReducers({
    calendar: calendarReducer
})

