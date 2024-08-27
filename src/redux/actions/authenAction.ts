import { createAction } from '@reduxjs/toolkit'
export const LOGIN = 'LOGIN'
export const loginAction = createAction<any>(LOGIN)

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginSuccess = createAction<any>(LOGIN_SUCCESS)

export const UPDATE_AUTH = 'UPDATE_AUTH'
export const auth_exited = createAction<boolean>(UPDATE_AUTH)

export const LOG_OUT = 'LOG_OUT'