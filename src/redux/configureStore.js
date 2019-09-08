import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {

 const composeEnhancers = window._REDUX_DETOOLS_EXTENSION_COMPOSE_ || compose;
 return createStore(rootReducer,
     initialState,
     composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
     );
}
