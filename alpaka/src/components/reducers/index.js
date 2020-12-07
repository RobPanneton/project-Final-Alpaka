import { combineReducers } from "redux";

import { adminReducer as admin } from "./admin-reducer";
import { contentReducer as content } from "./content-reducer";

export default combineReducers({ admin, content });
