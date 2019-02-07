import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";
import { forbiddenWordsMiddleware } from "./middleware/middleware";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../redux/sagas/api-saga";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware),
  ),
);

initialiseSagaMiddleware.run(apiSaga);

export default store;
