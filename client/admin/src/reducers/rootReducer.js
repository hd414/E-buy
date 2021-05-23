
import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";



const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer
})

export default rootReducer