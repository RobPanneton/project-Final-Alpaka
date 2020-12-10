import { combineReducers } from "redux";

import { userReducer as user } from "./user-reducer";
import { contentReducer as content } from "./content-reducer";

export default combineReducers({ user, content });
