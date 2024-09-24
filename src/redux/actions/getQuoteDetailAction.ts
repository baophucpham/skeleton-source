import { createAction } from '@reduxjs/toolkit'

export const GET_QUOTE_DETAIL_ACTION = 'GET_QUOTE_DETAIL_ACTION'
export const getQuoteDetailAction = createAction<any>(GET_QUOTE_DETAIL_ACTION)

export const UPDATE_QUOTE_DETAIL ='UPDATE_QUOTE_DETAIL'
export const updateQuoteDetailtAction = createAction<any>(UPDATE_QUOTE_DETAIL) 