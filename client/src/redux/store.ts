import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers/index'

const store = configureStore({
  reducer: rootReducer,
})
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// )

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;