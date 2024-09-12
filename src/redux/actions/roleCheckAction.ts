import { createAction } from '@reduxjs/toolkit'

export const CHECK_ROLE = 'CHECK_ROLE'
export const checkRole = createAction<any>(CHECK_ROLE)