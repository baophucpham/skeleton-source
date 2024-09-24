import { createAction } from '@reduxjs/toolkit'

export const CHECK_ROLE = 'CHECK_ROLE'
export const checkRoleAction = createAction<string>(CHECK_ROLE)
export const SET_CHECK_ROLE = 'SET_CHECK_ROLE'
export const updateCheckRoleSuccess = createAction<string>(SET_CHECK_ROLE)