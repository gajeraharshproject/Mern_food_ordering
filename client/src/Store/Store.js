import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const rootreducer = combineReducers({

});


const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk)))

export default store