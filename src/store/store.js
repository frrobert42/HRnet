import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from "./employee-reducer";

/**
 * Store
 * @type {EnhancedStore<any, UnknownAction, Tuple<[StoreEnhancer<{dispatch: ExtractDispatchExtensions<Tuple<[ThunkMiddlewareFor<any>]>>}>, StoreEnhancer]>>}
 */
export const store = configureStore({
    reducer: {
        employees: employeeReducer,
    },
})
