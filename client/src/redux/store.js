import {initState} from './initState'
import {createStore, applyMiddleware} from 'redux'
import { rootReducer } from './reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension' 

export const store = createStore(
    rootReducer,
    initState,
    composeWithDevTools(
        applyMiddleware()
    )
)