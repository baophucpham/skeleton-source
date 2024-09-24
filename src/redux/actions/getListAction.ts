import { createAction } from '@reduxjs/toolkit'

export const GET_LIST_ACTION = 'GET_LIST_ACTION'
export const getListAction = createAction<any>(GET_LIST_ACTION)

export const UPDATE_LIST ='UPDATE_LIST'
export const updateListAction = createAction<any>(UPDATE_LIST) 
