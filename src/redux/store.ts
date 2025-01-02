'use client'
import React from "react";
import AutomationReducer from "@/redux/slices/automation"
import {TypedUseSelectorHook, useSelector} from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    AutomationReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector 

