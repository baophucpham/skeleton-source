import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { rootReducer } from './reducers'
import { rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store