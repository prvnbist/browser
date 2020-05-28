import React from "react";

import initialState from "./initialState";
import reducers from "./reducers";

const Context = React.createContext();

export { initialState, reducers, Context };
