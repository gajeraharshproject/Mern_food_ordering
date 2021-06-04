import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userreducer from "./Redusers/User"

const rootreducer = combineReducers({
    userreducer
});


const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk)))

export default store