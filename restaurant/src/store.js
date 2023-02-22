//functions from redux
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {restaurantListReducer} from './reducers/restaurantReducer'
const reducers = combineReducers({
    restaurantReducer : restaurantListReducer

})
// Then the combine reducer in the store  contains a key as restaurant 
// reducer and the value is restaurantlistreducer from reducer.js.
// Thus the state reached at store.
// All the states are in the combinereducer’s key (restaurantReducer.).
//combinereducers is used for handle the reducers
//middleware thunk is used for making asynchronous to avoid delay eventhough the function is asynchronous it will act as synchronouns.
// updated state is stored in store.
const middleware = [thunk]

const store = createStore(reducers,applyMiddleware(...middleware))

export default store
